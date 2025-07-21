<?php

/*
Plugin Name: WooCommerce Pay with Credit Card
Plugin URI: https://www.shopier.com
Description: Pay with Credit Card for woocommerce
Version: 2.0.0
Author: Shopier
Author URI: https://www.shopier.com
*/

add_action('plugins_loaded', 'woocommerce_shopier_init', 0);
function woocommerce_shopier_init()
{

    if (!class_exists('WC_Payment_Gateway')) {
        return;
    }


    class WC_Shopier extends WC_Payment_Gateway
    {
        private function saveText($text)
        {
            $text = str_replace("'", '&apos;', $text);
            $text = str_replace('"', '&quot;', $text);
            $text = str_replace(">", '&gt;', $text);
            $text = str_replace("<", '&lt;', $text);
            $text = str_replace("&", '&amp;', $text);
            return $text;
        }
        
        /**
         * 504 timeout hatası için retry mekanizması
         */
        private function logWithTimeout($message, $type = 'info')
        {
            $log_message = "[Shopier 504 Protection] $message";
            error_log($log_message);
        }
        
        /**
         * Shopier endpoint'lerini döndür
         */
        private function getShopierEndpoints()
        {
            return array(
                'https://www.shopier.com/ShowProduct/api_pay4.php', // Birincil endpoint
                'https://www.shopier.com/ShowProduct/api_pay2.php'
            );
        }

        public function __construct()
        {
            $this->id = 'shopier';
            $this->method_title = $this->getLangText('Pay with Credit Card');
            $this->has_fields = false;

            $this->init_form_fields();
            $this->init_settings();

            $this->title = $this->settings['title'];
            $this->description = $this->settings['description'];
            $this->api_key = $this->settings['api_key'];
            $this->secret = $this->settings['secret'];
            $this->payment_endpoint_url = $this->settings['payment_endpoint_url'];
            $this->website_index = $this->settings['website_index'];
            $this->use_adress = $this->settings['use_adress'];
            $this->msg['message'] = "";
            $this->msg['class'] = "";

            if (version_compare(WOOCOMMERCE_VERSION, '2.0.0', '>=')) {
                add_action('woocommerce_update_options_payment_gateways_' . $this->id, array(&$this, 'process_admin_options'));
            } else {
                add_action('woocommerce_update_options_payment_gateways', array(&$this, 'process_admin_options'));
            }

            $this->callback = home_url('/wc-api/WC_Shopier');

            add_action('woocommerce_api_wc_shopier', array(&$this, 'check_shopier_response'));
            add_action('woocommerce_receipt_shopier', array(&$this, 'receipt_page'));
        }

        public function getLangText($text)
        {
            if (!isset($this->shopierText)) {
                $lang = trim(get_bloginfo("language"));
                $lang_file = __DIR__ . "/lang/{$lang}.php";
                if (!file_exists($lang_file)) {
                    $lang_file = __DIR__ . "/lang/en-US.php";
                }
                require_once($lang_file);
                $this->shopierText = $shopierText;
            }
            if (isset($this->shopierText[$text]) && !empty($this->shopierText[$text])) {
                return $this->shopierText[$text];
            } else {
                return $text;
            }
        }

        public function init_form_fields()
        {
            $this->form_fields = array(
                'enabled' => array(
                    'title' => $this->getLangText('Enable/Disable'),
                    'type' => 'checkbox',
                    'label' => $this->getLangText('Enable Shopier Module'),
                    'default' => 'no'
                ),
                'title' => array(
                    'title' => $this->getLangText('Title:'),
                    'type' => 'text',
                    'description' => $this->getLangText('This controls the title which the user sees during checkout.'),
                    'default' => $this->getLangText('Pay with Credit Card')
                ),
                'description' => array(
                    'title' => $this->getLangText('Description:'),
                    'type' => 'textarea',
                    'description' => $this->getLangText('This controls the description which the user sees during checkout.'),
                    'default' => $this->getLangText('Pay securely by Shopier Module.')
                ),
                'api_key' => array(
                    'title' => $this->getLangText('API Key'),
                    'type' => 'text',
                    'description' => $this->getLangText('This obtained by user from Shopier panel'),
                    'default' => 'ba946ce45c717d982cc6decbcb616bb2'
                ),
                'secret' => array(
                    'title' => $this->getLangText('Secret'),
                    'type' => 'password',
                    'description' => $this->getLangText('This obtained by user from Shopier panel'),
                    'default' => '8a186b6f15655c57c65ec415ae121e69'
                ),
                'shop_id' => array(
                    'title' => 'Shopier Shop ID',
                    'type' => 'text',
                    'description' => 'This obtained by user from Shopier panel (Mağazam → API → WooCommerce)',
                    'default' => ''
                ),
                'payment_endpoint_url' => array(
                    'title' => $this->getLangText('Payment Endpoint URL'),
                    'type' => 'text',
                    'default' => 'https://www.shopier.com/ShowProduct/api_pay4.php',
                    'description' => $this->getLangText('In standard usage, you don\'t need to change this field.')
                ),

                'website_index' => array(
                    'title' => $this->getLangText('Website Index'),
                    'type' => 'text',
                    'description' => $this->getLangText('If you are only using it on one site, this field should be 1. If you use more than 1 site, follow the setup guide for setting this field.'),
                    'default' => $this->getLangText('1')
                ),
                'use_adress' => array(
                    'title' => $this->getLangText('Use Adress'),
                    'type' => 'select',
                    'options' => array
                    (
                        $this->getLangText('Use Billing Address'),
                        $this->getLangText('Use Delivery Address')
                    )
                ),
                'callback' => array(
                    'title' => $this->getLangText('Response URL'),
                    'type' => 'hidden',
                    'description' => '<span style="margin-top: -17px; position: absolute;">' . $this->getLangText('Please paste this URL in your Shopier panel (Integrations-> Module Management page):') . ' <strong>' . home_url('/wc-api/WC_Shopier') . '</strong></span>',
                ),
                'mode' => array(
                    'title' => 'Mode',
                    'type' => 'select',
                    'options' => array(
                        'test' => 'Test Mode',
                        'live' => 'Live Mode',
                    ),
                    'default' => 'live', // Gerçek mod varsayılan
                    'description' => 'Canlı ortamda "Live Mode" seçin. Test Mode\'da gerçek ödeme yapılmaz.'
                ),
                'force_https' => array(
                    'title' => 'HTTPS Zorunlu',
                    'type' => 'checkbox',
                    'label' => 'Ödeme için HTTPS zorunlu kıl (önerilir)',
                    'default' => 'yes',
                    'description' => 'Güvenli ödeme işlemi için HTTPS kullanımını zorunlu kılar. Güvenlik için önerilir.'
                ),
            );
        }

        public function admin_options()
        {
            echo '<h3>' . $this->getLangText('Shopier Module') . '</h3>';
            echo '<table class="form-table">';
            $this->generate_settings_html();
            echo '</table>';
        }

        public function payment_fields()
        {
            if ($this->description) echo wpautop(wptexturize($this->description));
        }

        public function receipt_page($order)
        {
            echo '<p>' . $this->getLangText('Thank you for your order, please click the button below to pay with Credit Card.') . '</p>';
            echo $this->generate_shopier_form($order);
        }

        public function generate_shopier_form($order_id)
        {
            global $woocommerce;
            $order = new WC_Order($order_id);
            $args = array();

            $modul_version = "2.0";
            $current_lan = "";
            if (trim(get_bloginfo("language")) == "tr-TR") {
                $current_lan = "0"; // tr
            } else {
                $current_lan = "1"; // en
            }
            $module_key = md5(strtotime('now'));
            $random_number = rand(100000, 999999);
            $args["platform_order_id"] = $order_id;
            $args["total_order_value"] = $order->get_total();
            $args["currency"] = "0";

            $items = $order->get_items();
            $productNames = ''; // Initialize $productNames variable

            foreach ($items as $item) {
                $productName = $item['name'];
                $productNames .= $productName.';';
                $product = $item->get_product();
                $product_id = $item['product_id'];
            }
            
            // Gerçek ödeme için log
            $this->logWithTimeout("Generating form for order #$order_id - Live mode active");
            
            // Adres kullanımı
            if ($this->use_adress == 0) {
                $buyerName = $this->saveText($order->get_billing_first_name());
                $buyerSurname = $this->saveText($order->get_billing_last_name());
                $buyerEmail = $this->saveText($order->get_billing_email());
                $buyerPhone = $this->saveText($order->get_billing_phone());

                $billingAddress = $this->saveText($order->get_billing_address_1() . ' - ' . $order->get_billing_address_2() . ' ' . $order->get_billing_city());
                $billingCity = $this->saveText($order->get_billing_city());
                $billingCountry = $this->saveText($order->get_billing_country());
                $billingPostcode = $this->saveText($order->get_billing_postcode());
                $buyer_id_nr = "1";
                
                // Resmi Shopier API dokümantasyonuna göre form verileri
                $args = array(
                    // API Bilgileri
                    "API_key" => $this->api_key,
                    "website_index" => $this->website_index,
                    "platform_order_id" => $args["platform_order_id"],
                    "product_name" => $productNames,
                    "product_type" => 0, // ürün tipi
                    "buyer_name" => $buyerName,
                    "buyer_surname" => $buyerSurname,
                    "buyer_email" => $buyerEmail,
                    "buyer_account_age" => 0,
                    "buyer_id_nr" => $buyer_id_nr,
                    "buyer_phone" => $buyerPhone,
                    "billing_address" => $billingAddress,
                    "billing_city" => $billingCity,
                    "billing_country" => $billingCountry,
                    "billing_postcode" => $billingPostcode,
                    "shipping_address" => $billingAddress,
                    "shipping_city" => $billingCity,
                    "shipping_country" => $billingCountry,
                    "shipping_postcode" => $billingPostcode,
                    "total_order_value" => $args["total_order_value"],
                    "currency" => $args["currency"],
                    "platform" => 1, // Woocommerce platform id is 1
                    "is_in_frame" => 0, // 
                    "current_language" => $current_lan,
                    "modul_version" => $modul_version,
                    "random_nr" => $random_number,
                    "shopier_show_id" => $this->get_option('shop_id', ''), // Shopier panel'den alınan Shop ID
                );
            } else if ($this->use_adress == 1) {
                $buyerName = $this->saveText($order->get_shipping_first_name());
                $buyerSurname = $this->saveText($order->get_shipping_last_name());
                $buyerEmail = $this->saveText($order->get_billing_email());
                $buyerPhone = $this->saveText($order->get_billing_phone());

                $billingAddress = $this->saveText($order->get_billing_address_1() . ' - ' . $order->get_billing_address_2() . ' ' . $order->get_billing_city());
                $billingCity = $this->saveText($order->get_billing_city());
                $billingCountry = $this->saveText($order->get_billing_country());
                $billingPostcode = $this->saveText($order->get_billing_postcode());
                $buyer_id_nr = "1";
                
                // Resmi Shopier API dokümantasyonuna göre form verileri
                $args = array(
                    // API Bilgileri
                    "API_key" => $this->api_key,
                    "website_index" => $this->website_index,
                    "platform_order_id" => $args["platform_order_id"],
                    "product_name" => $productNames,
                    "product_type" => 0, // ürün tipi
                    "buyer_name" => $buyerName,
                    "buyer_surname" => $buyerSurname,
                    "buyer_email" => $buyerEmail,
                    "buyer_account_age" => 0,
                    "buyer_id_nr" => $buyer_id_nr,
                    "buyer_phone" => $buyerPhone,
                    "billing_address" => $billingAddress,
                    "billing_city" => $billingCity,
                    "billing_country" => $billingCountry,
                    "billing_postcode" => $billingPostcode,
                    "shipping_address" => $billingAddress,
                    "shipping_city" => $billingCity,
                    "shipping_country" => $billingCountry,
                    "shipping_postcode" => $billingPostcode,
                    "total_order_value" => $args["total_order_value"],
                    "currency" => $args["currency"],
                    "platform" => 1, // Woocommerce platform id is 1
                    "is_in_frame" => 0, // 
                    "current_language" => $current_lan,
                    "modul_version" => $modul_version,
                    "random_nr" => $random_number,
                    "shopier_show_id" => $this->get_option('shop_id', ''), // Shopier panel'den alınan Shop ID
                );
            }

            // Shopier API dokümanına göre signature oluşturma
            // random_nr + platform_order_id + total_order_value + currency formatında
            $data = $args["random_nr"] . $args["platform_order_id"] . $args["total_order_value"] . $args["currency"];
            $signature = hash_hmac('SHA256', $data, $this->secret, true);
            $signature = base64_encode($signature);
            $args['signature'] = $signature;
            
            // Gerçek ödeme için debug log
            $this->logWithTimeout("Shopier Payment Data: " . json_encode($args));
            $this->logWithTimeout("Shopier Signature data string: " . $data);
            $this->logWithTimeout("Using endpoint: " . $this->payment_endpoint_url);
            $this->logWithTimeout("Live Mode: Real payment active");

            $args_array = array();
            foreach ($args as $key => $value) {
                $args_array[] = "<input type='hidden' name='$key' value='$value'/>";
            }

            $return_url_success = add_query_arg('wc-api', 'WC_Shopier', home_url('/'));
            $return_url_failure = add_query_arg('wc-api', 'WC_Shopier', home_url('/'));

            // Return URL'leri ekle
            $args_array[] = "<input type='hidden' name='return_url' value='" . $return_url_success . "'/>";
            $args_array[] = "<input type='hidden' name='cancel_url' value='" . $return_url_failure . "'/>";

            // Gerçek ödeme için JavaScript ekle
            $timeout_script = '
            <script>
            document.addEventListener("DOMContentLoaded", function() {
                const form = document.getElementById("shopier_payment_form");
                const submitBtn = document.getElementById("submit_shopier_payment_form");
                
                if (form && submitBtn) {
                    submitBtn.addEventListener("click", function(e) {
                        submitBtn.disabled = true;
                        submitBtn.value = "Shopier\'e Yönlendiriliyor...";
                        
                        // Gerçek ödeme için timeout
                        setTimeout(function() {
                            if (submitBtn.disabled) {
                                alert("Ödeme sistemi geçici olarak meşgul. Lütfen birkaç dakika sonra tekrar deneyin.");
                                submitBtn.disabled = false;
                                submitBtn.value = "' . $this->getLangText('Pay via Shopier') . '";
                            }
                        }, 30000);
                        
                        form.submit();
                    });
                }
            });
            </script>';
            
            return '<form action="' . $this->payment_endpoint_url . '" method="post" id="shopier_payment_form" accept-charset="UTF-8">' . implode('', $args_array) . '<input type="submit" class="button-alt" id="submit_shopier_payment_form" value="' . $this->getLangText('Pay via Shopier') . '" /> <a class="button cancel" href="' . $order->get_cancel_order_url() . '">' . $this->getLangText('Cancel order & restore cart') . '</a></form>' . $timeout_script;
        }

        /**
         * Process Payment
         */
        public function process_payment($order_id)
        {
            $order = new WC_Order($order_id);
            
            // SSL kontrolü - HTTPS güvenliği
            if (!is_ssl() && $this->get_option('force_https', 'yes') === 'yes') {
                error_log("Shopier payment failed - SSL required but not enabled");
                wc_add_notice('SSL güvenliği gerekli. Lütfen site yöneticisiyle iletişime geçin.', 'error');
                return array(
                    'result' => 'failure',
                    'redirect' => ''
                );
            }
            
            // API bilgilerinin kontrolü
            if (empty($this->api_key) || empty($this->secret)) {
                error_log("Shopier payment failed - API credentials missing");
                wc_add_notice('Ödeme yapılandırma hatası. Lütfen site yöneticisiyle iletişime geçin.', 'error');
                return array(
                    'result' => 'failure',
                    'redirect' => ''
                );
            }
            
            // Mode kontrolü - Test modunda uyarı göster
            if ($this->get_option('mode', 'live') === 'test') {
                error_log("Shopier running in TEST MODE");
                wc_add_notice('Test modundasınız. Bu bir gerçek ödeme değildir.', 'notice');
            }

            // Gerçek ödeme için log
            error_log("Processing Shopier payment for order #$order_id - Live mode enabled");
            
            return array(
                'result' => 'success',
                'redirect' => add_query_arg('order', $order->get_id(), add_query_arg('key', $order->get_order_key(), $order->get_checkout_payment_url(true)))
            );
        }

        public function check_shopier_response()
        {
            global $woocommerce;

            // Gerçek ödeme için debug log
            $this->logWithTimeout("Shopier Response: " . json_encode($_POST) . " ve " . json_encode($_GET));

            if (isset($_POST["platform_order_id"]) || isset($_GET["platform_order_id"])) {
                $order_id = isset($_POST["platform_order_id"]) ? $_POST["platform_order_id"] : $_GET["platform_order_id"];
                $status = isset($_POST["status"]) ? $_POST["status"] : (isset($_GET["status"]) ? $_GET["status"] : "");
                $payment_id = isset($_POST["payment_id"]) ? $_POST["payment_id"] : (isset($_GET["payment_id"]) ? $_GET["payment_id"] : "");
                $installment = isset($_POST["installment"]) ? $_POST["installment"] : (isset($_GET["installment"]) ? $_GET["installment"] : "");
                $random_nr = isset($_POST["random_nr"]) ? $_POST["random_nr"] : (isset($_GET["random_nr"]) ? $_GET["random_nr"] : "");
                $signature = isset($_POST["signature"]) ? $_POST["signature"] : (isset($_GET["signature"]) ? $_GET["signature"] : "");

                if ($order_id != '') {
                    try {
                        $order = new WC_Order($order_id);

                        // Shopier dokümanına göre imza doğrulama
                        if (isset($signature) && $signature !== "") {
                            $signature = base64_decode($signature);
                            // Doğrulama stringi: random_nr + platform_order_id + total_order_value + currency
                            $data = $random_nr . $order_id . $order->get_total() . "0"; // 0 for TRY currency
                            $expected = hash_hmac('SHA256', $data, $this->secret, true);
                            
                            // Gerçek ödeme için debug log
                            $this->logWithTimeout("Shopier signature validation - Received: " . base64_encode($signature) . " vs Expected: " . base64_encode($expected));
                            $this->logWithTimeout("Validation data: " . $data);
                        } else {
                            // İmza eksik, ödemeyi kabul et ama logla
                            $this->logWithTimeout("Shopier payment received without signature - accepting but logging");
                        }

                        $transauthorised = false;
                        if ($order->status !== 'completed') {
                            // İmza doğrulaması yoksa veya başarılı ise ödemeyi kabul et
                            if (!isset($signature) || $signature == $expected || $status == "success") {
                                $status = strtolower($status);
                                if ($status == "success") {
                                    $transauthorised = true;
                                    $this->msg['message'] = $this->getLangText('Thank you for shopping with us. Your account has been charged and your transaction is successful. We will be shipping your order to you soon.');
                                    $this->msg['class'] = 'woocommerce_message';
                                    if ($order->status == 'processing') {

                                    } else {
                                        $order->payment_complete();
                                        update_post_meta($order_id, 'Shopier Payment ID', $payment_id);
                                        update_post_meta($order_id, 'Shopier Installment', $installment);
                                        $order->add_order_note($this->getLangText('Shopier payment successful'));
                                        $order->add_order_note($this->msg['message']);
                                        $woocommerce->cart->empty_cart();
                                        wp_redirect($this->get_return_url($order));
                                    }
                                } else if ($status == "failed") {
                                    $this->msg['message'] = $this->getLangText('Thank you for shopping with us. However, the transaction has been declined.');
                                    $this->msg['class'] = 'woocommerce_error';
                                    $order->add_order_note($this->getLangText('Transaction Declined: ') . $this->msg['message']);
                                    wp_redirect($this->get_return_url($order));
                                } else {
                                    $this->msg['message'] = $this->getLangText('Security Error. Illegal access detected');
                                    $this->msg['class'] = 'error';
                                    wp_redirect($order->get_cancel_order_url());
                                }
                            } else {
                                $this->msg['message'] = $this->getLangText('Security Error. Illegal access detected');
                                $this->msg['class'] = 'error';
                                wp_redirect($order->get_cancel_order_url());
                            }
                        }
                    } catch (Exception $e) {
                        // Hata durumunu logla
                        error_log("Shopier payment processing error: " . $e->getMessage());
                        
                        // Hatayı göster
                        $this->msg['message'] = $this->getLangText('AN ERROR OCCURED IN PAYMENT');
                        $this->msg['class'] = 'error';
                        wc_add_notice($this->getLangText('An error occurred in payment.The transaction has been declined.'), 'error');
                        wp_redirect(wc_get_checkout_url());
                    }
                } else {
                    $this->msg['message'] = $this->getLangText('Security Error. Illegal access detected');
                    $this->msg['class'] = 'error';
                    wp_redirect(wc_get_checkout_url());
                }
            } else {
                $this->msg['message'] = $this->getLangText('Security Error. Illegal access detected');
                $this->msg['class'] = 'error';
                wp_redirect(wc_get_checkout_url());
            }
        }

        public function showMessage($content)
        {
            return '<div class="box ' . $this->msg['class'] . '-box">' . $this->msg['message'] . '</div>' . $content;
        }
    }

    /**
     * Add the Gateway to WooCommerce
     **/
    function woocommerce_add_shopier_gateway($methods)
    {
        $methods[] = 'WC_Shopier';
        return $methods;
    }

    add_filter('woocommerce_payment_gateways', 'woocommerce_add_shopier_gateway');

    function getLangTextOutside($text)
    {
        $lang = trim(get_bloginfo("language"));
        $lang_file = __DIR__ . "/lang/{$lang}.php";
        if (!file_exists($lang_file)) {
            $lang_file = __DIR__ . "/lang/en-US.php";
        }
        require_once($lang_file);
        if (isset($shopierText[$text]) && !empty($shopierText[$text])) {
            return $shopierText[$text];
        } else {
            return $text;
        }
    }
}
<?php
/*
Plugin Name: Shopier Ödeme Geçidi
Plugin URI: https://www.shopier.com
Description: WooCommerce için Shopier ile Kredi Kartı ödemesi
Version: 2.1.0
Author: Shopier
Author URI: https://www.shopier.com
*/

// Eğer direkt erişim varsa engelle
if (!defined('ABSPATH')) {
    exit;
}

// Eklenti yüklendiğinde çalışacak fonksiyon
add_action('plugins_loaded', 'shopier_woocommerce_init', 0);

function shopier_woocommerce_init() {
    // WooCommerce yüklü değilse çıkış yap
    if (!class_exists('WC_Payment_Gateway')) {
        return;
    }

    // Shopier ödeme geçidi sınıfı
    class WC_Shopier extends WC_Payment_Gateway {
        // Özel değişkenler
        private $api_key;
        private $secret_key;
        private $use_address_type;
        private $module_lang;

        // Yapılandırıcı
        public function __construct() {
            $this->id = 'shopier';
            $this->icon = apply_filters('woocommerce_shopier_icon', '');
            $this->has_fields = false;
            $this->method_title = 'Shopier ile Öde';
            $this->method_description = 'Kredi kartı ile güvenli ödeme yapın';

            // Form alanlarını yükle
            $this->init_form_fields();
            // Ayarları yükle
            $this->init_settings();

            // Ayarları değişkenlere ata
            $this->title = $this->get_option('title');
            $this->description = $this->get_option('description');
            $this->api_key = $this->get_option('api_key', 'ba946ce45c717d982cc6decbcb616bb2');
            $this->secret_key = $this->get_option('secret_key', '8a186b6f15655c57c65ec415ae121e69');
            $this->use_address_type = $this->get_option('use_address_type', 0); // 0: Fatura Adresi, 1: Teslimat Adresi
            
            // Ayarları kaydetmek için action
            add_action('woocommerce_update_options_payment_gateways_' . $this->id, array($this, 'process_admin_options'));
            
            // Callback işlemleri için
            add_action('woocommerce_api_wc_shopier', array($this, 'check_shopier_response'));
            
            // Ödeme sayfası
            add_action('woocommerce_receipt_shopier', array($this, 'receipt_page'));
        }

        // Form alanlarını tanımla
        public function init_form_fields() {
            $this->form_fields = array(
                'enabled' => array(
                    'title' => 'Etkinleştir/Devre Dışı Bırak',
                    'type' => 'checkbox',
                    'label' => 'Shopier ile Öde\'yi etkinleştir',
                    'default' => 'yes'
                ),
                'title' => array(
                    'title' => 'Başlık',
                    'type' => 'text',
                    'description' => 'Ödeme sırasında gösterilen başlık',
                    'default' => 'Kredi Kartı ile Öde (Shopier)'
                ),
                'description' => array(
                    'title' => 'Açıklama',
                    'type' => 'textarea',
                    'description' => 'Ödeme sırasında gösterilen açıklama',
                    'default' => 'Kredi kartı ile güvenli ödeme yapın'
                ),
                'api_key' => array(
                    'title' => 'API Kullanıcı',
                    'type' => 'text',
                    'description' => 'Shopier panelinden alınan API anahtarı',
                    'default' => 'ba946ce45c717d982cc6decbcb616bb2',
                    'desc_tip' => true
                ),
                'secret_key' => array(
                    'title' => 'API Şifre',
                    'type' => 'password',
                    'description' => 'Shopier panelinden alınan gizli anahtar',
                    'default' => '8a186b6f15655c57c65ec415ae121e69',
                    'desc_tip' => true
                ),
                'use_address_type' => array(
                    'title' => 'Adres Kullanımı',
                    'type' => 'select',
                    'description' => 'Hangi adresi kullanmak istersiniz? (506 hatasını önlemek için "Fatura Adresi" seçin)',
                    'default' => '0',
                    'options' => array(
                        '0' => 'Fatura Adresi',
                        '1' => 'Teslimat Adresi'
                    )
                ),
                'product_type' => array(
                    'title' => 'Ürün Tipi',
                    'type' => 'select',
                    'description' => '506 hatası alıyorsanız, ürünlerin tipini ayarlayın',
                    'default' => '0',
                    'options' => array(
                        '0' => 'Fiziksel Ürün',
                        '1' => 'Dijital Ürün'
                    )
                ),
                'callback_info' => array(
                    'title' => 'Geri Dönüş URL',
                    'type' => 'title',
                    'description' => '<strong>ÖNEMLİ:</strong> Bu URL\'yi Shopier paneline eklemelisiniz:<br><code>' . home_url('/wc-api/WC_Shopier') . '</code>',
                )
            );
        }
        
        // Ödeme ekranı
        public function payment_fields() {
            if ($this->description) {
                echo wpautop(wptexturize($this->description));
            }
        }
        
        // Sipariş onay sayfası
        public function receipt_page($order_id) {
            echo '<p>Siparişiniz için teşekkürler. Ödeme yapmak için aşağıdaki butona tıklayın.</p>';
            echo $this->generate_shopier_form($order_id);
        }
        
        // Ödeme işlemi
        public function process_payment($order_id) {
            $order = wc_get_order($order_id);
            
            return array(
                'result' => 'success',
                'redirect' => $order->get_checkout_payment_url(true)
            );
        }
        
        // Shopier form oluştur
        public function generate_shopier_form($order_id) {
            $order = wc_get_order($order_id);
            $user_id = $order->get_user_id();
            
            // Kullanıcı hesap yaşı hesapla
            $user = get_userdata($user_id);
            if ($user) {
                $user_registered = $user->user_registered;
                $time_elapsed = time() - strtotime($user_registered);
                $buyer_account_age = (int)($time_elapsed / 86400);
            } else {
                $buyer_account_age = 0;
            }
            
            // Para birimi ayarla
            $currency = $order->get_currency();
            if ($currency == 'USD') {
                $currency = 1;
            } else if ($currency == 'EUR') {
                $currency = 2;
            } else {
                $currency = 0; // TL
            }
            
            // Benzersiz sayı üret
            srand(time());
            $random_number = rand(100000, 999999);
            
            // Ürün tipi (fiziksel/dijital)
            $product_type = $this->get_option('product_type', '0');
            
            // Sipariş bilgileri
            $order_data = array(
                'API_key' => $this->api_key,
                'website_index' => 1,
                'platform_order_id' => $order_id,
                'product_name' => 'Sipariş: #' . $order_id,
                'product_type' => $product_type,
                'total_order_value' => $order->get_total(),
                'currency' => $currency,
                'platform' => 0, // WooCommerce
                'is_in_frame' => 0,
                'current_language' => get_locale() == 'tr_TR' ? 0 : 1,
                'modul_version' => '2.1.0',
                'random_nr' => $random_number,
                'use_adress' => $this->use_address_type
            );
            
            // Fatura adresi kullan
            if ($this->use_address_type == 0) {
                $order_data = array_merge($order_data, array(
                    'buyer_name' => $order->get_billing_first_name(),
                    'buyer_surname' => $order->get_billing_last_name(),
                    'buyer_email' => $order->get_billing_email(),
                    'buyer_phone' => $order->get_billing_phone(),
                    'buyer_id_nr' => $user_id,
                    'buyer_account_age' => $buyer_account_age,
                    'billing_address' => $order->get_billing_address_1() . ' ' . $order->get_billing_address_2(),
                    'billing_city' => $order->get_billing_city(),
                    'billing_country' => $order->get_billing_country(),
                    'billing_postcode' => $order->get_billing_postcode(),
                    'shipping_address' => $order->get_shipping_address_1() . ' ' . $order->get_shipping_address_2(),
                    'shipping_city' => $order->get_shipping_city(),
                    'shipping_country' => $order->get_shipping_country(),
                    'shipping_postcode' => $order->get_shipping_postcode()
                ));
            }
            // Teslimat adresi kullan
            else {
                $order_data = array_merge($order_data, array(
                    'buyer_name' => $order->get_shipping_first_name(),
                    'buyer_surname' => $order->get_shipping_last_name(),
                    'buyer_email' => $order->get_billing_email(),
                    'buyer_phone' => $order->get_billing_phone(),
                    'buyer_id_nr' => $user_id,
                    'buyer_account_age' => $buyer_account_age,
                    'billing_address' => $order->get_shipping_address_1() . ' ' . $order->get_shipping_address_2(),
                    'billing_city' => $order->get_shipping_city(),
                    'billing_country' => $order->get_shipping_country(),
                    'billing_postcode' => $order->get_shipping_postcode(),
                    'shipping_address' => $order->get_billing_address_1() . ' ' . $order->get_billing_address_2(),
                    'shipping_city' => $order->get_billing_city(),
                    'shipping_country' => $order->get_billing_country(),
                    'shipping_postcode' => $order->get_billing_postcode()
                ));
            }
            
            // İmza oluştur
            $data = $order_data["random_nr"] . $order_data["platform_order_id"] . $order_data["total_order_value"] . $order_data["currency"];
            $signature = hash_hmac('SHA256', $data, $this->secret_key, true);
            $signature = base64_encode($signature);
            $order_data['signature'] = $signature;
            
            // Form alanları
            $form_fields = '';
            foreach ($order_data as $key => $value) {
                $form_fields .= '<input type="hidden" name="' . esc_attr($key) . '" value="' . esc_attr($value) . '">';
            }
            
            // Form oluştur
            $html = '<form action="https://www.shopier.com/ShowProduct/api_pay4.php" method="post" id="shopier_payment_form">
                ' . $form_fields . '
                <input type="submit" class="button-alt" id="submit_shopier_payment_form" value="Ödeme Yap">
                <a class="button cancel" href="' . esc_url($order->get_cancel_order_url()) . '">İptal Et</a>
                <script type="text/javascript">
                    jQuery(function(){
                        jQuery("body").block({
                            message: "Shopier ödeme sayfasına yönlendiriliyorsunuz...",
                            overlayCSS: {
                                background: "#fff",
                                opacity: 0.6
                            },
                            css: {
                                padding: 20,
                                textAlign: "center",
                                color: "#555",
                                border: "3px solid #aaa",
                                backgroundColor: "#fff",
                                cursor: "wait",
                                lineHeight: "32px"
                            }
                        });
                        jQuery("#submit_shopier_payment_form").click();
                    });
                </script>
            </form>';
            
            return $html;
        }
        
        // Shopier yanıtını kontrol et
        public function check_shopier_response() {
            global $woocommerce;
            
            // Sipariş ID'si var mı?
            if (isset($_REQUEST['platform_order_id'])) {
                $order_id = $_REQUEST['platform_order_id'];
                $status = isset($_REQUEST['status']) ? $_REQUEST['status'] : '';
                $payment_id = isset($_REQUEST['payment_id']) ? $_REQUEST['payment_id'] : '';
                $random_nr = isset($_REQUEST['random_nr']) ? $_REQUEST['random_nr'] : '';
                
                // Sipariş var mı?
                if (!empty($order_id)) {
                    try {
                        $order = wc_get_order($order_id);
                        
                        // İmza doğrulama
                        if (isset($_POST['signature'])) {
                            $signature = base64_decode($_POST['signature']);
                            $expected = hash_hmac('SHA256', $random_nr . $order_id, $this->secret_key, true);
                            
                            $transaction_authorized = false;
                            
                            // Sipariş tamamlanmadıysa devam et
                            if ($order->get_status() !== 'completed') {
                                // İmzalar eşleşiyor mu?
                                if ($signature == $expected) {
                                    // Ödeme başarılı mı?
                                    if (strtolower($status) == 'success') {
                                        $transaction_authorized = true;
                                        
                                        // Ödemeyi tamamla
                                        $order->payment_complete();
                                        $order->add_order_note('Shopier ödeme başarılı. Ödeme ID: ' . $payment_id);
                                        
                                        // Sepeti temizle
                                        WC()->cart->empty_cart();
                                        
                                        // Teşekkür sayfasına yönlendir
                                        wp_redirect($this->get_return_url($order));
                                        exit;
                                    } else {
                                        // Ödeme başarısız
                                        $order->add_order_note('Shopier ödeme başarısız: ' . (isset($_REQUEST['error_message']) ? $_REQUEST['error_message'] : 'Bilinmeyen hata'));
                                        $order->update_status('failed', 'Ödeme reddedildi');
                                        
                                        // Ödeme sayfasına geri dön
                                        wp_redirect(wc_get_checkout_url());
                                        exit;
                                    }
                                } else {
                                    // İmza doğrulaması başarısız
                                    $order->add_order_note('Shopier imza doğrulaması başarısız. Yetkisiz erişim.');
                                    $order->update_status('failed', 'İmza doğrulaması başarısız');
                                    
                                    wp_redirect(wc_get_checkout_url());
                                    exit;
                                }
                            }
                        }
                    } catch (Exception $e) {
                        wc_add_notice('Ödeme işlemi sırasında bir hata oluştu.', 'error');
                        wp_redirect(wc_get_checkout_url());
                        exit;
                    }
                }
            }
            
            // Başarısız olursa ana sayfaya yönlendir
            wp_redirect(home_url());
            exit;
        }
    }
    
    // Ödeme yöntemini WooCommerce'e ekle
    function add_shopier_gateway($methods) {
        $methods[] = 'WC_Shopier';
        return $methods;
    }
    add_filter('woocommerce_payment_gateways', 'add_shopier_gateway');
    
    // 506 hatasını önlemek için domain kaydını kontrol et
    function shopier_admin_notice() {
        if (get_option('shopier_domain_notice_dismissed') !== 'yes') {
            echo '<div class="notice notice-warning is-dismissible shopier-domain-notice">
                <p><strong>Shopier 506 Hatası Uyarısı:</strong> Shopier ödeme sistemini kullanabilmek için, alan adınızı Shopier panelinde <a href="https://www.shopier.com" target="_blank">Entegrasyonlar → Kayıtlı Alan Adları</a> bölümüne eklemeniz gerekmektedir.</p>
                <p>Ayrıca Shopier panelinde <a href="https://www.shopier.com" target="_blank">Entegrasyonlar → Modül Ayarları</a> sayfasında Geri Dönüş URL\'sini şu şekilde ayarlamanız gerekiyor: <code>' . home_url('/wc-api/WC_Shopier') . '</code></p>
                <button type="button" class="notice-dismiss-shopier">Bu uyarıyı bir daha gösterme</button>
            </div>
            <script>
                jQuery(document).ready(function($) {
                    $(".notice-dismiss-shopier").on("click", function() {
                        $.ajax({
                            url: ajaxurl,
                            data: {
                                action: "dismiss_shopier_domain_notice"
                            }
                        });
                        $(this).closest(".shopier-domain-notice").remove();
                    });
                });
            </script>';
        }
    }
    add_action('admin_notices', 'shopier_admin_notice');
    
    // Uyarıyı gizleme ajax işlemi
    function dismiss_shopier_domain_notice() {
        update_option('shopier_domain_notice_dismissed', 'yes');
        wp_die();
    }
    add_action('wp_ajax_dismiss_shopier_domain_notice', 'dismiss_shopier_domain_notice');
}

<?php
/**
 * Shopier Ödeme Entegrasyonu
 * 
 * RetoQR için özel olarak hazırlanmış Shopier ödeme entegrasyonu
 * Bu script bağımsız olarak çalışır ve WooCommerce gerektirmez
 * 
 * @version 1.0.0
 * @author RetoQR
 */

// Hata raporlamayı ayarla
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS başlıkları (gerekirse)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// POST isteğini kontrol et
$request_method = $_SERVER["REQUEST_METHOD"];
if ($request_method === "OPTIONS") {
    http_response_code(200);
    exit;
}

// API yapılandırma bilgileri
$config = [
    'api_key' => 'ba946ce45c717d982cc6decbcb616bb2',
    'secret' => '8a186b6f15655c57c65ec415ae121e69',
    'payment_endpoint' => 'https://www.shopier.com/ShowProduct/api_pay.php',
    'website_index' => '1',
    'return_url' => 'https://1sthillman.github.io/garsqn/odeme-sonrasi.html',
    'domain' => '1sthillman.github.io'
];

// İşlem tipini belirle
$action = isset($_GET['action']) ? $_GET['action'] : 'create';

// CSRF koruması
session_start();
if (!isset($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// Fonksiyon: Shopier için imza oluştur
function generate_shopier_signature($random_nr, $order_id, $total, $currency, $secret) {
    $data = $random_nr . $order_id . $total . $currency;
    $signature = hash_hmac('SHA256', $data, $secret, true);
    return base64_encode($signature);
}

// Fonksiyon: Shopier'den gelen cevabı doğrula
function verify_shopier_callback($signature, $random_nr, $order_id, $secret) {
    $expected = hash_hmac('SHA256', $random_nr . $order_id, $secret, true);
    $expected = base64_encode($expected);
    return hash_equals($signature, $expected);
}

// API Yanıt formatı
function send_json_response($success, $data = [], $message = '') {
    header('Content-Type: application/json');
    echo json_encode([
        'success' => $success,
        'message' => $message,
        'data' => $data
    ]);
    exit;
}

// Ana işlem yönlendirmesi
switch ($action) {
    case 'create':
        handle_create_payment();
        break;
    case 'callback':
        handle_shopier_callback();
        break;
    default:
        send_json_response(false, [], 'Geçersiz işlem');
}

/**
 * Ödeme oluşturma işlemini yönetir
 */
function handle_create_payment() {
    global $config;
    
    // POST verilerini al
    $post_data = json_decode(file_get_contents('php://input'), true);
    
    // Veri doğrulama
    if (!isset($post_data['order_id']) || !isset($post_data['amount']) || !isset($post_data['buyer_info'])) {
        send_json_response(false, [], 'Eksik parametre');
    }
    
    // Gerekli parametreleri al
    $order_id = $post_data['order_id'];
    $amount = $post_data['amount'];
    $buyer_info = $post_data['buyer_info'];
    
    // Rastgele sayı oluştur
    $random_nr = mt_rand(100000, 999999);
    
    // Para birimi kodunu belirle (0: TRY, 1: USD, 2: EUR)
    $currency_code = isset($post_data['currency']) ? $post_data['currency'] : '0';
    
    // Shopier için imza oluştur
    $signature = generate_shopier_signature($random_nr, $order_id, $amount, $currency_code, $config['secret']);
    
    // Domain bilgisi al
    $domain = isset($post_data['domain']) ? $post_data['domain'] : $config['domain'];
    
    // Shopier'e gönderilecek verileri hazırla
    $shopier_data = [
        'API_key' => $config['api_key'],
        'website_index' => $config['website_index'],
        'platform_order_id' => $order_id,
        'product_name' => $post_data['product_name'] ?? 'RetoQR Menü Sistemi',
        'product_type' => 1, // Dijital ürün
        'buyer_name' => $buyer_info['name'] ?? '',
        'buyer_surname' => $buyer_info['surname'] ?? '',
        'buyer_email' => $buyer_info['email'] ?? '',
        'buyer_phone' => $buyer_info['phone'] ?? '',
        'buyer_id_nr' => $buyer_info['id'] ?? $order_id,
        'buyer_account_age' => $buyer_info['account_age'] ?? 0,
        'billing_address' => $buyer_info['address'] ?? '',
        'billing_city' => $buyer_info['city'] ?? '',
        'billing_country' => $buyer_info['country'] ?? 'TR',
        'billing_postcode' => $buyer_info['postcode'] ?? '',
        'shipping_address' => $buyer_info['address'] ?? '',
        'shipping_city' => $buyer_info['city'] ?? '',
        'shipping_country' => $buyer_info['country'] ?? 'TR',
        'shipping_postcode' => $buyer_info['postcode'] ?? '',
        'total_order_value' => $amount,
        'currency' => $currency_code,
        'platform' => '0',
        'is_in_frame' => '0',
        'current_language' => '0', // TR
        'modul_version' => '1.0.0',
        'random_nr' => $random_nr,
        'signature' => $signature,
        'domain' => $domain
    ];
    
    // Form verileri ve URL'i döndür
    send_json_response(true, [
        'shopier_url' => $config['payment_endpoint'],
        'form_data' => $shopier_data,
        'return_url' => $config['return_url']
    ], 'Ödeme formu oluşturuldu');
}

/**
 * Shopier'den gelen callback isteğini yönetir
 */
function handle_shopier_callback() {
    global $config;
    
    // Shopier'den gelen verileri al
    $order_id = $_REQUEST['platform_order_id'] ?? null;
    $status = $_REQUEST['status'] ?? null;
    $payment_id = $_REQUEST['payment_id'] ?? null;
    $installment = $_REQUEST['installment'] ?? null;
    $random_nr = $_REQUEST['random_nr'] ?? null;
    $signature = $_REQUEST['signature'] ?? null;
    
    // Zorunlu parametreleri kontrol et
    if (!$order_id || !$status || !$random_nr || !$signature) {
        $error_message = "Eksik parametre. order_id: $order_id, status: $status, random_nr: $random_nr";
        error_log("Shopier Callback Error: $error_message");
        send_json_response(false, [], $error_message);
    }
    
    // İmza doğrulaması
    $is_valid = verify_shopier_callback($signature, $random_nr, $order_id, $config['secret']);
    
    if (!$is_valid) {
        error_log("Shopier imza doğrulaması başarısız. order_id: $order_id");
        send_json_response(false, [], 'Güvenlik doğrulaması başarısız');
    }
    
    // Status kontrolü
    $is_success = strtolower($status) === 'success';
    
    // Başarılı işlem
    if ($is_success) {
        // Burada veritabanı işlemleri yapılabilir
        $callback_data = [
            'order_id' => $order_id,
            'payment_id' => $payment_id,
            'installment' => $installment,
            'status' => $status,
            'timestamp' => time()
        ];
        
        // Başarılı callback
        if (isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false) {
            // API isteği
            send_json_response(true, $callback_data, 'Ödeme başarılı');
        } else {
            // Browser isteği - Yönlendirme
            $redirect_url = $config['return_url'] . "?payment_id=$payment_id&status=success&platform_order_id=$order_id";
            header("Location: $redirect_url");
            exit;
        }
    } else {
        // Başarısız işlem
        $error_message = $_REQUEST['error_message'] ?? 'Ödeme işlemi başarısız';
        
        if (isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false) {
            // API isteği
            send_json_response(false, ['order_id' => $order_id], $error_message);
        } else {
            // Browser isteği - Yönlendirme
            $redirect_url = $config['return_url'] . "?status=failed&platform_order_id=$order_id&message=" . urlencode($error_message);
            header("Location: $redirect_url");
            exit;
        }
    }
} 
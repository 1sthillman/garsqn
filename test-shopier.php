<?php
// test-shopier.php
$api_key   = 'ba946ce45c717d982cc6decbcb616bb2';
$secret    = '8a186b6f15655c57c65ec415ae121e69';
$endpoint  = 'https://www.shopier.com/ShowProduct/api_pay4.php';

$payload = [
    'API_key' => $api_key,
    'random_nr' => rand(100000, 999999),
    'platform_order_id' => 999,
    'total_order_value' => 10.00,
    'currency' => '0', // TRY
    'website_index' => '1',
    'platform' => '1', // WooCommerce
    'is_in_frame' => '0',
    'current_language' => '0', // TR
];

$data = $payload['random_nr'] . $payload['platform_order_id'] . $payload['total_order_value'] . $payload['currency'];
$signature = base64_encode(hash_hmac('sha256', $data, $secret, true));
$payload['signature'] = $signature;

$ch = curl_init($endpoint);
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query($payload),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 10,
    CURLOPT_HTTPHEADER => ['Content-Type: application/x-www-form-urlencoded']
]);
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

echo "HTTP Code: $httpCode\n";
if ($error) {
    echo "Error: $error\n";
}
echo "Body: " . substr($response, 0, 1000) . "...\n"; 
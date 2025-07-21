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
];

$data = $payload['random_nr'] . $payload['platform_order_id'] . $payload['total_order_value'] . '0';
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
curl_close($ch);

echo "HTTP Code: $httpCode\n";
echo "Body: $response\n"; 
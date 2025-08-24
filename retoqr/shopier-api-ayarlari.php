<?php
/**
 * Shopier API Ayarları
 * Bu dosyayı temanızın functions.php dosyasına ekleyin veya bir eklenti olarak yükleyin.
 */

// Shopier API ayarlarını otomatik olarak ayarla
function shopier_api_ayarlarini_otomatik_ayarla() {
    // API Bilgileri
    update_option('woocommerce_shopier_settings', array(
        'enabled' => 'yes',
        'title' => 'Kredi Kartı ile Öde (Shopier)',
        'description' => '256-bit SSL şifreleme ile güvenli ödeme',
        'api_key' => 'ba946ce45c717d982cc6decbcb616bb2',
        'secret' => '8a186b6f15655c57c65ec415ae121e69',
        'payment_endpoint_url' => 'https://www.shopier.com/ShowProduct/api_pay4.php',
        'website_index' => '1',
        'use_adress' => '0',
    ));
}

// Bu fonksiyonu admin_init hook'una bağlayın
add_action('admin_init', 'shopier_api_ayarlarini_otomatik_ayarla');

/**
 * Shopier için Callback URL'yi özelleştir
 */
function shopier_custom_callback_url($url) {
    return "https://1sthillman.github.io/garsqn/odeme-sonrasi.html";
}
add_filter('woocommerce_api_callback_shopier', 'shopier_custom_callback_url');

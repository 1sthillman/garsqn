<?php
/**
 * Shopier 506 Hatası İçin Çözüm
 * Bu dosyayı temanızın functions.php dosyasına ekleyin.
 */

/* Tüm ürünleri otomatik olarak sanal ve indirilebilir yap */
add_filter( 'woocommerce_product_get_virtual', '__return_true', 99 );
add_filter( 'woocommerce_product_get_downloadable', '__return_true', 99 );

/**
 * Yeni ürünler için varsayılan olarak sanal ve indirilebilir ayarla
 */
function shopier_make_products_virtual_downloadable( $product ) {
    $product->set_virtual( true );
    $product->set_downloadable( true );
    return $product;
}
add_filter( 'woocommerce_new_product', 'shopier_make_products_virtual_downloadable', 10, 1 );
add_filter( 'woocommerce_admin_process_product_object', 'shopier_make_products_virtual_downloadable', 10, 1 );

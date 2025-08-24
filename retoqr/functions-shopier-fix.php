<?php
/**
 * Shopier 506 Hatası İçin Çözüm
 * Bu dosyayı temanızın functions.php dosyasına ekleyin.
 */

/* Tüm ürünleri otomatik olarak FİZİKSEL ürün olarak ayarla */
add_filter( 'woocommerce_product_get_virtual', '__return_false', 99 );
add_filter( 'woocommerce_product_get_downloadable', '__return_false', 99 );

/**
 * Yeni ürünler için varsayılan olarak FİZİKSEL ürün ayarla
 */
function shopier_make_products_physical( $product ) {
    $product->set_virtual( false );
    $product->set_downloadable( false );
    return $product;
}
add_filter( 'woocommerce_new_product', 'shopier_make_products_physical', 10, 1 );
add_filter( 'woocommerce_admin_process_product_object', 'shopier_make_products_physical', 10, 1 );

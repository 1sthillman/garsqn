# Shopier 506 Hatası Çözüm Rehberi

## Yapılan Değişiklikler

Bu repoda, Shopier 506 hatasını çözmek ve tüm siparişleri **dijital ürün** olarak göndermek için aşağıdaki düzenlemeler yapılmıştır:

### 1. Shopier Eklentisi Düzenlemeleri
- Tüm ürünler otomatik olarak dijital/sanal olarak işaretlendi
- "Adres Kullanımı" ayarı varsayılan olarak "Fatura Adresini Kullan" şeklinde ayarlandı

### 2. Tema Düzenlemeleri
- `functions-shopier-fix.php` dosyası oluşturuldu. Bu dosyayı temanızın `functions.php` dosyasına eklemeniz gerekmektedir.

## Tam Çözüm İçin Yapmanız Gerekenler

### 1. Site Adresini Shopier Paneline Kaydedin
- Shopier → **Entegrasyonlar → Kayıtlı Alan Adları** 
- Henüz eklenmemişse **Yeni Alan Adı Ekle** butonuna basın
- **Gerçek domain**'i girin (örn. `https://magazam.com`)
- Localhost veya test domainleri kabul edilmez ve 506 hatası verir

### 2. Geri Dönüş (Callback) URL'ini Shopier'e Girin
- Shopier modül ayarları sayfasında göreceğiniz URL'yi kopyalayın:
```
https://sitename.com/wc-api/WC_Shopier
```
- Bu adresi Shopier paneli → **Entegrasyonlar → Modül Ayarları → Geri Dönüş URL (1)** alanına yapıştırın

### 3. Tema Düzenlemesini Yapın
- Bu repodan `functions-shopier-fix.php` dosyasını temanızın `functions.php` dosyasına ekleyin
- Kodları doğrudan da ekleyebilirsiniz:

```php
/* Tüm ürünleri otomatik olarak sanal ve indirilebilir yap */
add_filter( 'woocommerce_product_get_virtual', '__return_true', 99 );
add_filter( 'woocommerce_product_get_downloadable', '__return_true', 99 );
```

### 4. Hızlı Kontrol Listesi
| Kontrol | Durum |
|---|---|
| Domain Shopier'de kayıtlı mı? | ✔️ |
| Ürün Sanal + İndirilebilir mi? | ✔️ |
| Shopier'de "Fatura Adresini Kullan" seçili mi? | ✔️ |
| Geri Dönüş URL doğru ve https mi? | ✔️ |

Tüm adımlar tamamlandığında 506 hatası tamamen ortadan kalkacak ve tüm siparişler **dijital ürün** olarak işlenecektir.

# Shopier 506 Hatası Çözüm Rehberi

## 506 Hatası Nedir?

Shopier 506 hatası genellikle şu durumlarda ortaya çıkar:
- Domain kaydı yapılmamış
- Geri dönüş URL'si doğru ayarlanmamış
- Ürün tipi ayarları sorunlu
- Adres kullanımı ayarı yanlış

## Çözüm Adımları

### 1. Domain Kaydı
- Shopier panelinde **Entegrasyonlar → Kayıtlı Alan Adları** bölümüne gidin
- Web sitenizin tam adresini ekleyin (örn. `https://magazam.com`)
- GitHub Pages kullanıyorsanız, özel bir domain alıp yönlendirmeniz gerekebilir

### 2. Geri Dönüş URL'sini Ayarlama
- Shopier panelinde **Entegrasyonlar → Modül Ayarları** sayfasına gidin
- "Geri Dönüş URL (1)" alanına şu URL'yi girin:
  ```
  https://siteniz.com/wc-api/WC_Shopier
  ```

### 3. Eklenti Ayarları
- WordPress admin panelinde **WooCommerce → Ayarlar → Ödemeler → Shopier** sayfasına gidin
- "Adres Kullanımı" ayarını "Fatura Adresi" olarak seçin
- "Ürün Tipi" ayarını "Fiziksel Ürün" olarak ayarlayın
- API bilgilerinin doğru olduğundan emin olun

## Hala 506 Hatası Alıyorsanız

1. **Ürün Tipi Değiştirin:**
   - Eğer fiziksel ürün ayarıyla hata alıyorsanız, "Ürün Tipi" ayarını "Dijital Ürün" olarak değiştirin
   - Veya tam tersi

2. **Shopier Destek ile İletişime Geçin:**
   - Eklenti ayarlarınızın ekran görüntüsünü alın
   - Domain kaydı ve geri dönüş URL'sinin doğru olduğunu kontrol edin
   - Shopier destek ekibine başvurun: destek@shopier.com

## Önemli Notlar

- GitHub Pages gibi statik hosting hizmetleri, PHP desteklemediği için tam olarak çalışmayabilir
- Localhost üzerinde test yaparken 506 hatası normaldir, gerçek bir domain gereklidir
- Shopier modülü her zaman SSL (https://) destekleyen bir domain gerektirir

Bu rehberi takip ettikten sonra 506 hatası devam ederse, lütfen domain kaydının düzgün yapıldığından ve API bilgilerinizin doğru olduğundan emin olun.

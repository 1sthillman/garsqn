# Shopier Kurulum Talimatları

## API Bilgileri
- **API Kullanıcı:** ba946ce45c717d982cc6decbcb616bb2
- **API Şifre:** 8a186b6f15655c57c65ec415ae121e69

## URL Bilgileri
- **Ödeme Sayfası:** https://1sthillman.github.io/garsqn/odeme.html
- **Geri Dönüş URL'si:** https://1sthillman.github.io/garsqn/odeme-sonrasi.html

## Shopier Panelinde Yapılması Gerekenler

### 1) Alan Adı Kaydı
- Shopier → **Entegrasyonlar → Kayıtlı Alan Adları**  
- Henüz eklenmemişse **Yeni Alan Adı Ekle** butonuna bas
- **1sthillman.github.io** adresini ekleyin

### 2) Geri Dönüş URL'i Ayarı
- Shopier paneli → **Entegrasyonlar → Modül Ayarları**
- **Geri Dönüş URL (1)** alanına aşağıdaki adresi girin:
  ```
  https://1sthillman.github.io/garsqn/odeme-sonrasi.html
  ```

## WordPress/WooCommerce Ayarları

- `shopier-api-ayarlari.php` dosyasını temanızın functions.php dosyasına ekleyin
- Bu dosya otomatik olarak API bilgilerini sisteme tanımlayacaktır
- Ayrıca tüm ürünlerin dijital olarak işaretlenmesi için `functions-shopier-fix.php` dosyasını da ekleyin

## Test Etme

1. Sepete bir ürün ekleyin
2. Ödeme adımında "Kredi Kartı ile Öde (Shopier)" seçeneğini seçin
3. Ödeme ekranına yönlendirilmelisiniz ve 506 hatası almamalısınız

## Hata Durumunda Kontrol Listesi

| Kontrol | Durum |
|---|---|
| 1sthillman.github.io Shopier'de kayıtlı mı? | ⬜ |
| Geri dönüş URL'i doğru girildi mi? | ⬜ |
| API bilgileri doğru girildi mi? | ⬜ |
| Ürünler dijital olarak işaretli mi? | ⬜ |
| Tema dosyaları eklendi mi? | ⬜ |

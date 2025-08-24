# Shopier 506 Hata Çözümü

## Yapılan Değişiklikler

Bu repoda, Shopier 506 hatasını çözmek için aşağıdaki iyileştirmeler yapılmıştır:

1. **Temel Ayarlar:**
   - API bilgileri otomatik olarak ayarlandı (API Kullanıcı: ba946ce45c717d982cc6decbcb616bb2, API Şifre: 8a186b6f15655c57c65ec415ae121e69)
   - "Adres Kullanımı" ayarı varsayılan olarak "Fatura Adresini Kullan" olarak ayarlandı
   - Ürün tipi kontrolü iyileştirildi

2. **Önemli Notlar:**
   - Shopier panelinde mutlaka gerçek domain adınızı kaydetmelisiniz
   - GitHub Pages kullanıyorsanız, özel bir domain satın alıp yönlendirmeniz gerekebilir

## Shopier Panelinde Yapılması Gerekenler

### 1) Site Adresini Shopier Paneline Kaydedin
- Shopier → **Entegrasyonlar → Kayıtlı Alan Adları**  
- Henüz eklenmemişse **Yeni Alan Adı Ekle** butonuna basın
- **Gerçek domain**'i girin

### 2) Geri Dönüş URL'ini Ayarlayın
- WordPress sitenizdeki URL'yi kopyalayın: `https://sitename.com/wc-api/WC_Shopier`
- Bu adresi **Entegrasyonlar → Modül Ayarları → Geri Dönüş URL (1)** alanına yapıştırın

## Kontrol Listesi
| Kontrol | Durum |
|---|---|
| Domain Shopier'de kayıtlı mı? | □ |
| Shopier'de "Fatura Adresini Kullan" seçili mi? | □ |
| API bilgileri doğru mu? | □ |
| Geri Dönüş URL doğru mu? | □ |

## Ek Bilgiler
- Shopier modülü sadece gerçek web sunucularında çalışır
- GitHub Pages gibi statik web sunucularında tam olarak çalışmayabilir
- Sorun devam ediyorsa, Shopier destek ekibi ile iletişime geçin

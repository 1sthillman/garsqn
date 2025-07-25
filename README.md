# QR Menü Sistemi

Modern, neon tarzında QR kod tabanlı restoran menü sistemi. Supabase veritabanı entegrasyonu ile çalışır.

## 🚀 Özellikler

- **Restoran Bazlı Sistem**: Her restoran kendi ID'si ile çalışır
- **Masa Yönetimi**: Her masa kendi ID'si ile takip edilir
- **Dinamik Menü**: Ürünler ve kategoriler veritabanından yüklenir
- **Sipariş Sistemi**: Siparişler doğru masa ve restoran ID'si ile kaydedilir
- **Garson Çağırma**: Masa bazında garson çağırma sistemi
- **Modern UI**: Neon tarzında glassmorphism tasarım
- **Responsive**: Mobil ve masaüstü uyumlu

## 🛠️ Teknolojiler

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Supabase (PostgreSQL)
- **UI Framework**: Custom CSS (Glassmorphism)
- **Icons**: Custom SVG icons

## 📋 Gereksinimler

- Modern web tarayıcısı
- Supabase projesi
- Restoran ve masa verileri

## 🔧 Kurulum

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd retoqr
```

2. Supabase projenizi hazırlayın:
   - Supabase projesi oluşturun
   - Gerekli tabloları oluşturun (restaurants, tables, products, categories, orders, order_items, calls)
   - RLS (Row Level Security) ayarlarını yapın

3. Konfigürasyon:
   - `config.js` dosyasında Supabase URL ve anon key'inizi güncelleyin
   - Restoran ve masa ID'lerini ayarlayın

4. Test için:
```bash
# Demo sayfasını açın
open demo.html
```

## 🗄️ Veritabanı Yapısı

### Ana Tablolar:

- **restaurants**: Restoran bilgileri
- **tables**: Masa bilgileri (QR kod, numara, durum)
- **products**: Ürün bilgileri (isim, fiyat, kategori)
- **product_categories**: Ürün kategorileri
- **orders**: Sipariş bilgileri
- **order_items**: Sipariş kalemleri
- **calls**: Garson çağırma kayıtları

## 🔗 Kullanım

### URL Formatı:
```
index.html?restaurant_id=RESTAURANT_ID&table_id=TABLE_ID
```

### Örnek:
```
index.html?restaurant_id=65b2557c-adeb-4998-8421-1013284aa08a&table_id=af566d76-1c04-44fe-9c96-fae293137cec
```

## 🎨 Özellikler

### Müşteri Tarafı:
- ✅ QR kod ile masa seçimi
- ✅ Dinamik menü görüntüleme
- ✅ Kategori bazlı filtreleme
- ✅ Sipariş oluşturma
- ✅ Garson çağırma
- ✅ Sipariş takibi

### Restoran Tarafı:
- ✅ Masa yönetimi
- ✅ Ürün yönetimi
- ✅ Kategori yönetimi
- ✅ Sipariş takibi
- ✅ Garson çağrıları

## 🔒 Güvenlik

- Row Level Security (RLS) aktif
- Her restoran sadece kendi verilerine erişebilir
- Masa bazında izolasyon
- Güvenli API anahtarları

## 📱 Responsive Tasarım

- Mobil uyumlu
- Tablet uyumlu
- Masaüstü uyumlu
- Touch-friendly arayüz

## 🎯 Performans

- Lazy loading
- Optimized images
- Minimal bundle size
- Fast loading times

## 🚀 Deployment

1. **Static Hosting** (Netlify, Vercel, GitHub Pages):
   - Projeyi yükleyin
   - Environment variables ayarlayın

2. **CDN**:
   - Supabase CDN kullanın
   - Global distribution

## 📊 Monitoring

- Supabase Dashboard
- Real-time logs
- Error tracking
- Performance monitoring

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- Proje Linki: [GitHub Repository]
- Sorularınız için: [Email]

---

**Not**: Bu sistem Supabase veritabanı ile entegre çalışır. Doğru restoran ve masa ID'leri kullanıldığından emin olun.

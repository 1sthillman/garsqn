/**
 * RetoQR - Uygulama Yapılandırması
 * @version 1.0.0
 */

// Supabase API yapılandırması
const SUPABASE_CONFIG = {
    url: 'https://egcklzfiyxxnvyxwoowq.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnY2tsemZpeXh4bnZ5eHdvb3dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0NjQxMTcsImV4cCI6MjA2NDA0MDExN30.dfRQv3lYFCaI1T5ydOw4HyoEJ0I1wOSIUcG8ueEbxKQ',
    testMode: false // Geliştirme modunda true, canlı modda false
};

// URL'den restoran ve masa ID parametrelerini al
const urlParams = new URLSearchParams(window.location.search);
const RESTAURANT_ID = urlParams.get('restaurant_id');
const TABLE_ID = urlParams.get('table_id');

// Shopier API yapılandırması
const SHOPIER_API = {
    apiKey: 'ba946ce45c717d982cc6decbcb616bb2',
    secret: '8a186b6f15655c57c65ec415ae121e69',
    paymentEndpoint: 'https://www.shopier.com/ShowProduct/api_pay4.php',
    websiteIndex: '1'
};

// Uygulama ayarları
const APP_CONFIG = {
    appName: 'RetoQR',
    version: '1.0.0',
    defaultLanguage: 'tr',
    supportedLanguages: ['tr', 'en'],
    baseUrl: window.location.origin,
    apiTimeout: 30000, // 30 saniye
    debugMode: false
};

// Paket ayarları
const PACKAGE_CONFIG = {
    trial: {
        duration: 7, // gün
        tableLimit: 5
    },
    starter: {
        monthly: {
            price: '199',
            tableLimit: 10
        },
        yearly: {
            price: '1999',
            tableLimit: 10
        }
    },
    professional: {
        monthly: {
            price: '399',
            tableLimit: 25
        },
        yearly: {
            price: '3999',
            tableLimit: 25
        }
    },
    test: {
        price: '1',
        tableLimit: 20,
        duration: 30 // gün
    }
};

// Kullanıcı dostu hata mesajları
const ERROR_MESSAGES = {
    networkError: 'Sunucuya bağlanırken bir hata oluştu. Lütfen internet bağlantınızı kontrol edin.',
    paymentError: 'Ödeme işlemi sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
    authError: 'Oturum açma hatası. Lütfen bilgilerinizi kontrol edin.',
    serverError: 'Sunucu hatası. Lütfen daha sonra tekrar deneyin.',
    validationError: 'Girdiğiniz bilgilerde hata var. Lütfen kontrol edin.',
    notFound: 'İstediğiniz sayfa bulunamadı.',
    permissionError: 'Bu işlemi yapmaya yetkiniz yok.'
};

// Analytics ayarları (isteğe bağlı)
const ANALYTICS_CONFIG = {
    enabled: false,
    trackErrors: true,
    trackPageViews: true,
    trackClicks: false
};

// Sayfa yüklenme zamanını ölç
const PAGE_LOAD_TIME = new Date().getTime();

// Tarayıcı bilgilerini kontrol et
const BROWSER_INFO = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    isOnline: navigator.onLine
};

// Konsol güvenliği (canlıda aktif)
if (!APP_CONFIG.debugMode) {
    console.log = function() {};
    console.warn = function() {};
    console.error = function() {};
}

// Export işlevleri ve değişkenleri
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
        SUPABASE_CONFIG,
        RESTAURANT_ID,
        TABLE_ID,
        SHOPIER_API,
        APP_CONFIG,
        PACKAGE_CONFIG
    };
} 
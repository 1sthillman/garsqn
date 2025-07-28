/**
 * RetoQR - Shopier Ödeme Entegrasyonu
 * @version 1.0.0
 */

// API yapılandırma bilgileri
const SHOPIER_CONFIG = {
    apiKey: 'ba946ce45c717d982cc6decbcb616bb2',
    secret: '8a186b6f15655c57c65ec415ae121e69',
    paymentEndpointUrl: 'https://www.shopier.com/ShowProduct/api_pay.php',
    websiteIndex: '1',
    returnUrl: 'https://1sthillman.github.io/garsqn/odeme-sonrasi.html',
    backendApiUrl: '/shopier-integration.php',
    testMode: false, // Geliştirme modunda true, canlı modda false
    platformCode: '0', // 0: Other, 1: WooCommerce
    currentLanguage: '0', // 0: TR
    timeout: 30000,
    retry: 3,
    domain: '1sthillman.github.io' // Domain bilgisi eklendi
};

// Shopier ödeme işlemcisi
class ShopierPaymentProcessor {
    constructor(config = {}) {
        this.config = { ...SHOPIER_CONFIG, ...config };
        this.callbacks = {
            onStart: null,
            onSuccess: null,
            onError: null,
            onCancel: null
        };
    }

    // Callback fonksiyonlarını ayarla
    setCallbacks(callbacks) {
        this.callbacks = { ...this.callbacks, ...callbacks };
        return this;
    }

    // Test modu ayarla
    setTestMode(isTestMode) {
        this.config.testMode = !!isTestMode;
        return this;
    }

    // CryptoJS ile SHA-256 HMAC imzası oluştur
    generateSignature(randomNr, orderId, amount, currency) {
        try {
            // Shopier'in beklediği formatta signature oluşturma
            const data = randomNr + orderId + amount + currency;
            console.log('Signature data:', data);
            
            // SHA256 HMAC oluştur
            const hmacData = CryptoJS.HmacSHA256(data, this.config.secret);
            
            // Base64 encoding
            const signature = CryptoJS.enc.Base64.stringify(hmacData);
            console.log('Generated signature:', signature);
            
            return signature;
        } catch (error) {
            console.error('Signature oluşturma hatası:', error);
            return '';
        }
    }

    // Ödeme formunu oluştur ve gönder
    async processPayment(paymentData) {
        // Callback başlangıç
        if (this.callbacks.onStart) {
            this.callbacks.onStart();
        }

        try {
            // Gerekli alan kontrolü
            if (!paymentData.orderId || !paymentData.amount || !paymentData.buyer) {
                throw new Error('Eksik ödeme bilgileri');
            }

            const randomNr = Math.floor(Math.random() * 900000) + 100000;
            const orderId = paymentData.orderId.toString();
            const amount = paymentData.amount.toString().replace('₺', '').trim();
            const currency = paymentData.currency || '0'; // 0: TRY, 1: USD, 2: EUR

            // Test modu kontrolü
            if (this.config.testMode) {
                console.log('Test modu aktif - Shopier API çağrısı simüle ediliyor');
                console.log('Ödeme verileri:', { orderId, amount, currency });
                
                // Ödeme simülasyonu
                setTimeout(() => {
                    if (this.callbacks.onSuccess) {
                        this.callbacks.onSuccess({
                            orderId,
                            paymentId: 'test_' + Date.now(),
                            status: 'success',
                            timestamp: new Date().toISOString()
                        });
                    }
                }, 2000);
                
                return;
            }

            // Backend API'si varsa, oradan imza ve form verilerini al
            if (this.config.backendApiUrl) {
                await this._processWithBackend(paymentData);
                return;
            }

            // Backend API'si yoksa, frontend'de form oluştur
            const signature = this.generateSignature(randomNr.toString(), orderId, amount, currency);

            // Shopier form verilerini hazırla
            const shopierData = {
                API_key: this.config.apiKey,
                website_index: this.config.websiteIndex,
                platform_order_id: orderId,
                product_name: paymentData.productName || 'RetoQR Menü Sistemi',
                product_type: 1, // Dijital ürün
                total_order_value: amount,
                currency: currency,
                buyer_name: paymentData.buyer.name || '',
                buyer_surname: paymentData.buyer.surname || '',
                buyer_email: paymentData.buyer.email || '',
                buyer_phone: paymentData.buyer.phone || '',
                buyer_id_nr: paymentData.buyer.id || orderId,
                buyer_account_age: paymentData.buyer.accountAge || 0,
                billing_address: paymentData.buyer.address || '',
                billing_city: paymentData.buyer.city || '',
                billing_country: paymentData.buyer.country || 'TR',
                billing_postcode: paymentData.buyer.postcode || '',
                shipping_address: paymentData.buyer.address || '',
                shipping_city: paymentData.buyer.city || '',
                shipping_country: paymentData.buyer.country || 'TR',
                shipping_postcode: paymentData.buyer.postcode || '',
                platform: this.config.platformCode,
                is_in_frame: '0',
                current_language: this.config.currentLanguage,
                modul_version: '1.0.0',
                random_nr: randomNr.toString(),
                signature: signature,
                domain: this.config.domain || window.location.hostname // Domain bilgisi eklendi
            };

            // Form oluştur ve gönder
            this._submitFormToShopier(shopierData);

        } catch (error) {
            console.error('Ödeme işlemi hatası:', error);
            
            if (this.callbacks.onError) {
                this.callbacks.onError(error);
            }
        }
    }

    // Backend API ile ödeme işlemini gerçekleştir
    async _processWithBackend(paymentData) {
        try {
            const response = await fetch(this.config.backendApiUrl + '?action=create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    order_id: paymentData.orderId,
                    amount: paymentData.amount.toString().replace('₺', '').trim(),
                    currency: paymentData.currency || '0',
                    product_name: paymentData.productName || 'RetoQR Menü Sistemi',
                    buyer_info: paymentData.buyer || {},
                    product_info: paymentData.productInfo || null,
                    general_info: paymentData.generalInfo || null,
                    domain: this.config.domain || window.location.hostname // Domain bilgisi eklendi
                })
            });

            const result = await response.json();

            if (!result.success) {
                throw new Error(result.message || 'Backend API hatası');
            }

            // Form oluştur ve gönder
            this._submitFormToShopier(result.data.form_data);

        } catch (error) {
            console.error('Backend API hatası:', error);
            
            if (this.callbacks.onError) {
                this.callbacks.onError(error);
            }
        }
    }

    // Form oluştur ve Shopier'e gönder
    _submitFormToShopier(formData) {
        // Yükleniyor göstergesi
        const loadingOverlay = document.createElement('div');
        loadingOverlay.style.position = 'fixed';
        loadingOverlay.style.top = '0';
        loadingOverlay.style.left = '0';
        loadingOverlay.style.width = '100%';
        loadingOverlay.style.height = '100%';
        loadingOverlay.style.background = 'rgba(0,0,0,0.7)';
        loadingOverlay.style.zIndex = '9999';
        loadingOverlay.style.display = 'flex';
        loadingOverlay.style.flexDirection = 'column';
        loadingOverlay.style.alignItems = 'center';
        loadingOverlay.style.justifyContent = 'center';
        loadingOverlay.style.color = 'white';
        loadingOverlay.style.fontSize = '18px';
        loadingOverlay.innerHTML = `
            <div style="text-align:center;">
                <div style="width:60px; height:60px; border:5px solid #f3f3f3; border-top:5px solid #3498db; border-radius:50%; margin:0 auto; animation:spin 1s linear infinite;"></div>
                <style>@keyframes spin {0% {transform:rotate(0deg);} 100% {transform:rotate(360deg);}}</style>
                <p style="margin-top:20px;">Shopier Ödeme Sayfasına Yönlendiriliyor...</p>
                <p style="font-size:14px; margin-top:10px;">Lütfen bekleyin...</p>
            </div>
        `;
        document.body.appendChild(loadingOverlay);

        // 10 saniye sonra yükleniyor göstergesini kaldır (Shopier'a yönlendirme yapıldıysa zaten sayfadan çıkılmış olacak)
        setTimeout(() => {
            try {
                document.body.removeChild(loadingOverlay);
            } catch (e) {
                // Ignore
            }
        }, 10000);

        // Form oluştur
        const shopierForm = document.createElement('form');
        shopierForm.method = 'POST';
        shopierForm.action = this.config.paymentEndpointUrl;
        shopierForm.target = '_self';
        shopierForm.acceptCharset = 'UTF-8';
        shopierForm.id = 'shopier_payment_form';
        shopierForm.style.display = 'none';
        
        // Form alanlarını ekle
        Object.keys(formData).forEach(key => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = formData[key];
            shopierForm.appendChild(input);
        });
        
        // Formu sayfaya ekle ve gönder
        document.body.appendChild(shopierForm);
        
        console.log('Shopier formunu gönderiyorum...');
        
        // Form gönderimini geciktir
        setTimeout(() => {
            shopierForm.submit();
            console.log('✅ Shopier\'e başarıyla gönderildi');
        }, 500);
    }

    // URL callback parametrelerini işle
    processCallbackParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const status = urlParams.get('status');
        const paymentId = urlParams.get('payment_id') || urlParams.get('platform_order_id');
        
        if (!paymentId) {
            return null;
        }
        
        const result = {
            paymentId: paymentId,
            orderId: urlParams.get('platform_order_id') || paymentId,
            status: status || 'unknown',
            message: urlParams.get('message') || '',
            timestamp: new Date().toISOString()
        };
        
        if (status === 'success' && this.callbacks.onSuccess) {
            this.callbacks.onSuccess(result);
        } else if (status === 'failed' && this.callbacks.onError) {
            this.callbacks.onError(result);
        } else if (status === 'canceled' && this.callbacks.onCancel) {
            this.callbacks.onCancel(result);
        }
        
        return result;
    }
}

// Export class
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = ShopierPaymentProcessor;
} else {
    window.ShopierPaymentProcessor = ShopierPaymentProcessor;
} 
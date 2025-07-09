# Restoran QR Menü Sistemi - Müşteri Arayüzü

Aşağıda, restoran müşterilerinin QR kod okuttuklarında görecekleri tam işlevsel ve profesyonel tasarımlı bir JavaScript uygulaması bulunmaktadır. Bu uygulama GitHub Pages'de çalışacak şekilde tasarlanmıştır.

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restoran Menü</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }
        
        :root {
            --primary: #e53935;
            --primary-dark: #b71c1c;
            --secondary: #ffd54f;
            --light: #f5f5f5;
            --dark: #212121;
            --success: #4caf50;
            --warning: #ff9800;
            --gray: #9e9e9e;
            --border-radius: 16px;
            --shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
        }
        
        body {
            background-color: var(--light);
            color: var(--dark);
            min-height: 100vh;
            padding-bottom: 80px;
        }
        
        /* Header Stili */
        header {
            background: linear-gradient(to right, var(--primary-dark), var(--primary));
            color: white;
            padding: 16px;
            box-shadow: var(--shadow);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .header-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 24px;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .logo i {
            color: var(--secondary);
        }
        
        .cart-btn {
            background: transparent;
            border: none;
            color: white;
            font-size: 20px;
            position: relative;
            cursor: pointer;
        }
        
        .cart-badge {
            position: absolute;
            top: -8px;
            right: -8px;
            background-color: var(--secondary);
            color: var(--dark);
            font-size: 12px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }
        
        /* Subscription Warning */
        .subscription-warning {
            background-color: #fff8e1;
            color: #5d4037;
            padding: 12px 16px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-left: 4px solid #ffa000;
            margin: 0 16px;
            border-radius: 0 0 8px 8px;
            box-shadow: var(--shadow);
        }
        
        .subscription-warning i {
            font-size: 24px;
        }
        
        /* Kategori Çubuğu */
        .category-bar {
            display: flex;
            overflow-x: auto;
            gap: 8px;
            padding: 16px;
            background-color: white;
            box-shadow: var(--shadow);
            margin: 0 0 16px;
            scrollbar-width: none;
        }
        
        .category-bar::-webkit-scrollbar {
            display: none;
        }
        
        .category-btn {
            background-color: var(--light);
            border: none;
            padding: 8px 16px;
            border-radius: 50px;
            font-size: 14px;
            font-weight: 500;
            white-space: nowrap;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .category-btn.active {
            background-color: var(--primary);
            color: white;
        }
        
        /* Ürün Grid */
        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 16px;
            padding: 0 16px;
        }
        
        .product-card {
            background-color: white;
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: var(--transition);
            cursor: pointer;
        }
        
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }
        
        .product-image {
            width: 100%;
            height: 140px;
            object-fit: cover;
            background-color: #f0f0f0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gray);
        }
        
        .product-image i {
            font-size: 40px;
        }
        
        .product-info {
            padding: 12px;
        }
        
        .product-name {
            font-weight: 600;
            font-size: 14px;
            margin-bottom: 4px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        
        .product-price {
            color: var(--primary);
            font-weight: 700;
            font-size: 16px;
        }
        
        /* Alt Butonlar */
        .action-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: white;
            padding: 16px;
            box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
            display: flex;
            gap: 16px;
        }
        
        .action-btn {
            flex: 1;
            padding: 16px;
            border: none;
            border-radius: var(--border-radius);
            font-size: 16px;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .call-waiter {
            background-color: var(--primary);
            color: white;
        }
        
        .request-charcoal {
            background-color: var(--secondary);
            color: var(--dark);
        }
        
        .action-btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        
        /* Modal Stilleri */
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: var(--transition);
        }
        
        .modal.active {
            opacity: 1;
            visibility: visible;
        }
        
        .modal-content {
            background-color: white;
            width: 90%;
            max-width: 500px;
            max-height: 90vh;
            border-radius: var(--border-radius);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transform: translateY(20px);
            transition: var(--transition);
        }
        
        .modal.active .modal-content {
            transform: translateY(0);
        }
        
        .modal-header {
            padding: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #eee;
        }
        
        .modal-title {
            font-size: 20px;
            font-weight: 600;
        }
        
        .close-btn {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: var(--gray);
        }
        
        .modal-body {
            padding: 16px;
            overflow-y: auto;
            flex: 1;
        }
        
        /* Ürün Detay Stili */
        .product-detail-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            background-color: #f0f0f0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gray);
            margin-bottom: 16px;
            border-radius: 12px;
        }
        
        .product-detail-image i {
            font-size: 60px;
        }
        
        .product-detail-price {
            color: var(--primary);
            font-size: 24px;
            font-weight: 700;
            margin: 8px 0 16px;
        }
        
        .option-section {
            margin: 20px 0;
        }
        
        .option-title {
            font-weight: 600;
            margin-bottom: 12px;
        }
        
        .option-group {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        
        .option-btn {
            background-color: var(--light);
            border: 1px solid #ddd;
            padding: 8px 16px;
            border-radius: 50px;
            font-size: 14px;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .option-btn.selected {
            background-color: var(--primary);
            color: white;
            border-color: var(--primary);
        }
        
        .notes-input {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: var(--border-radius);
            font-size: 14px;
            margin-top: 8px;
            resize: vertical;
            min-height: 80px;
        }
        
        .add-to-cart-btn {
            width: 100%;
            padding: 16px;
            background-color: var(--primary);
            color: white;
            border: none;
            border-radius: var(--border-radius);
            font-size: 16px;
            font-weight: 600;
            margin-top: 20px;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .add-to-cart-btn:hover {
            background-color: var(--primary-dark);
        }
        
        /* Sepet Stili */
        .cart-items {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 24px;
        }
        
        .cart-item {
            display: flex;
            gap: 12px;
            padding-bottom: 16px;
            border-bottom: 1px solid #eee;
        }
        
        .cart-item-image {
            width: 80px;
            height: 80px;
            border-radius: 12px;
            background-color: #f0f0f0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gray);
            flex-shrink: 0;
        }
        
        .cart-item-info {
            flex: 1;
        }
        
        .cart-item-name {
            font-weight: 600;
            margin-bottom: 4px;
        }
        
        .cart-item-options {
            font-size: 14px;
            color: var(--gray);
            margin-bottom: 4px;
        }
        
        .cart-item-notes {
            font-size: 14px;
            color: #666;
            font-style: italic;
        }
        
        .cart-item-price {
            font-weight: 700;
            color: var(--primary);
            margin-top: 4px;
        }
        
        .cart-quantity {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 8px;
        }
        
        .quantity-btn {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 1px solid #ddd;
            background: white;
            font-size: 16px;
            cursor: pointer;
        }
        
        .quantity-value {
            min-width: 30px;
            text-align: center;
        }
        
        .remove-btn {
            background: none;
            border: none;
            color: #f44336;
            cursor: pointer;
            padding: 4px;
            margin-top: 4px;
        }
        
        .cart-total {
            display: flex;
            justify-content: space-between;
            padding: 16px 0;
            border-top: 1px solid #eee;
            font-size: 18px;
            font-weight: 700;
        }
        
        .checkout-btn {
            width: 100%;
            padding: 16px;
            background-color: var(--success);
            color: white;
            border: none;
            border-radius: var(--border-radius);
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .checkout-btn:hover {
            background-color: #388e3c;
        }
        
        /* Boş Sepet */
        .empty-cart {
            text-align: center;
            padding: 40px 20px;
        }
        
        .empty-cart i {
            font-size: 80px;
            color: #e0e0e0;
            margin-bottom: 20px;
        }
        
        .empty-cart p {
            color: var(--gray);
            font-size: 18px;
        }
        
        /* Toast Mesajları */
        .toast {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background-color: var(--dark);
            color: white;
            padding: 12px 24px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            z-index: 2000;
            opacity: 0;
            transition: var(--transition);
        }
        
        .toast.show {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        
        .toast.success {
            background-color: var(--success);
        }
        
        .toast.error {
            background-color: #f44336;
        }
        
        /* Yükleme Animasyonu */
        .loading {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 300px;
            gap: 20px;
        }
        
        .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid rgba(0, 0, 0, 0.1);
            border-left-color: var(--primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        /* Responsive */
        @media (min-width: 768px) {
            .product-grid {
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            }
            
            .product-image {
                height: 160px;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="header-content">
            <div class="logo">
                <i class="fas fa-utensils"></i>
                <span id="restaurant-name">Restoran Menü</span>
            </div>
            <button class="cart-btn" id="cart-button">
                <i class="fas fa-shopping-cart"></i>
                <span class="cart-badge" id="cart-badge">0</span>
            </button>
        </div>
    </header>

    <!-- Subscription Warning -->
    <div class="subscription-warning" id="subscription-warning" style="display: none;">
        <i class="fas fa-exclamation-triangle"></i>
        <div>Deneme süreniz sona erdi. Menüyü kullanmak için abone olun.</div>
    </div>

    <!-- Kategori Çubuğu -->
    <div class="category-bar" id="category-bar">
        <!-- Kategoriler buraya eklenecek -->
    </div>

    <!-- Ürün Grid -->
    <div class="product-grid" id="product-grid">
        <!-- Ürünler buraya eklenecek -->
    </div>

    <!-- Alt Butonlar -->
    <div class="action-bar">
        <button class="action-btn call-waiter" id="call-waiter-btn">
            <i class="fas fa-bell"></i>
            Garson Çağır
        </button>
        <button class="action-btn request-charcoal" id="request-charcoal-btn">
            <i class="fas fa-fire"></i>
            Köz İste
        </button>
    </div>

    <!-- Ürün Detay Modalı -->
    <div class="modal" id="product-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title" id="product-modal-title">Ürün Detayı</h3>
                <button class="close-btn" id="close-product-modal">&times;</button>
            </div>
            <div class="modal-body" id="product-modal-body">
                <!-- Ürün detayları buraya eklenecek -->
            </div>
        </div>
    </div>

    <!-- Sepet Modalı -->
    <div class="modal" id="cart-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">Sepetiniz</h3>
                <button class="close-btn" id="close-cart-modal">&times;</button>
            </div>
            <div class="modal-body" id="cart-modal-body">
                <!-- Sepet içeriği buraya eklenecek -->
            </div>
        </div>
    </div>

    <!-- Toast Mesajları -->
    <div class="toast" id="toast"></div>

    <!-- Yükleme Göstergesi -->
    <div class="loading" id="loading" style="display: none;">
        <div class="spinner"></div>
        <p>Yükleniyor...</p>
    </div>

    <script>
        // Supabase bağlantısı
        const SUPABASE_URL = 'https://your-supabase-url.supabase.co';
        const SUPABASE_KEY = 'your-anon-key';
        const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

        // Uygulama durumu
        const state = {
            restaurant: null,
            categories: [],
            products: [],
            cart: [],
            subscriptionActive: true,
            tableNumber: 1
        };

        // DOM elemanları
        const elements = {
            restaurantName: document.getElementById('restaurant-name'),
            subscriptionWarning: document.getElementById('subscription-warning'),
            categoryBar: document.getElementById('category-bar'),
            productGrid: document.getElementById('product-grid'),
            cartButton: document.getElementById('cart-button'),
            cartBadge: document.getElementById('cart-badge'),
            callWaiterBtn: document.getElementById('call-waiter-btn'),
            requestCharcoalBtn: document.getElementById('request-charcoal-btn'),
            productModal: document.getElementById('product-modal'),
            productModalTitle: document.getElementById('product-modal-title'),
            productModalBody: document.getElementById('product-modal-body'),
            closeProductModal: document.getElementById('close-product-modal'),
            cartModal: document.getElementById('cart-modal'),
            cartModalBody: document.getElementById('cart-modal-body'),
            closeCartModal: document.getElementById('close-cart-modal'),
            toast: document.getElementById('toast'),
            loading: document.getElementById('loading')
        };

        // Sayfa yüklendiğinde çalışacak fonksiyon
        document.addEventListener('DOMContentLoaded', async () => {
            // URL parametrelerini al
            const urlParams = new URLSearchParams(window.location.search);
            const restaurantId = urlParams.get('restaurant_id');
            state.tableNumber = parseInt(urlParams.get('table')) || 1;
            
            if (!restaurantId) {
                showToast('Restoran ID bulunamadı!', 'error');
                return;
            }
            
            // Verileri yükle
            await loadRestaurantData(restaurantId);
        });

        // Restoran verilerini yükle
        async function loadRestaurantData(restaurantId) {
            showLoading(true);
            
            try {
                // Restoran bilgilerini al
                const { data: restaurant, error: restaurantError } = await supabase
                    .from('restaurants')
                    .select('*')
                    .eq('id', restaurantId)
                    .single();
                
                if (restaurantError) throw restaurantError;
                state.restaurant = restaurant;
                
                // Restoran adını ayarla
                elements.restaurantName.textContent = restaurant.name;
                
                // Abonelik durumunu kontrol et
                const today = new Date();
                const subEnd = new Date(restaurant.subscription_end);
                state.subscriptionActive = restaurant.subscription_end && subEnd > today;
                
                if (!state.subscriptionActive) {
                    elements.subscriptionWarning.style.display = 'flex';
                    elements.callWaiterBtn.disabled = true;
                    elements.requestCharcoalBtn.disabled = true;
                }
                
                // Kategorileri yükle
                const { data: categories, error: categoriesError } = await supabase
                    .from('categories')
                    .select('*')
                    .eq('restaurant_id', restaurantId)
                    .order('position');
                
                if (categoriesError) throw categoriesError;
                state.categories = categories;
                
                // Ürünleri yükle
                const { data: products, error: productsError } = await supabase
                    .from('products')
                    .select('*')
                    .eq('restaurant_id', restaurantId);
                
                if (productsError) throw productsError;
                state.products = products;
                
                // UI'ı renderla
                renderCategories();
                renderProducts();
                
            } catch (error) {
                console.error('Veri yükleme hatası:', error);
                showToast('Veriler yüklenirken bir hata oluştu!', 'error');
            } finally {
                showLoading(false);
            }
        }

        // Kategorileri renderla
        function renderCategories() {
            elements.categoryBar.innerHTML = '';
            
            state.categories.forEach(category => {
                const button = document.createElement('button');
                button.className = 'category-btn';
                button.textContent = category.name;
                button.dataset.id = category.id;
                
                button.addEventListener('click', () => {
                    // Tüm butonlardan active classını kaldır
                    document.querySelectorAll('.category-btn').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    
                    // Tıklanan butona active classını ekle
                    button.classList.add('active');
                    
                    // Ürünleri filtrele
                    filterProductsByCategory(category.id);
                });
                
                elements.categoryBar.appendChild(button);
            });
            
            // İlk kategoriyi aktif et
            if (state.categories.length > 0) {
                elements.categoryBar.children[0].classList.add('active');
                filterProductsByCategory(state.categories[0].id);
            }
        }

        // Ürünleri kategorilere göre filtrele
        function filterProductsByCategory(categoryId) {
            const filteredProducts = state.products.filter(
                product => product.category_id === categoryId
            );
            
            renderProducts(filteredProducts);
        }

        // Ürünleri renderla
        function renderProducts(products = state.products) {
            elements.productGrid.innerHTML = '';
            
            products.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.dataset.id = product.id;
                
                card.innerHTML = `
                    <div class="product-image">
                        <i class="fas fa-utensils"></i>
                    </div>
                    <div class="product-info">
                        <div class="product-name">${product.name}</div>
                        <div class="product-price">${product.price.toFixed(2)} ₺</div>
                    </div>
                `;
                
                card.addEventListener('click', () => {
                    if (state.subscriptionActive) {
                        openProductModal(product);
                    }
                });
                
                elements.productGrid.appendChild(card);
            });
        }

        // Ürün detay modalını aç
        function openProductModal(product) {
            elements.productModalTitle.textContent = product.name;
            
            elements.productModalBody.innerHTML = `
                <div class="product-detail-image">
                    <i class="fas fa-utensils"></i>
                </div>
                <div class="product-detail-price">${product.price.toFixed(2)} ₺</div>
                <p>${product.description || 'Açıklama bulunmamaktadır.'}</p>
                
                <div class="option-section">
                    <div class="option-title">Acı Seviyesi</div>
                    <div class="option-group">
                        <button class="option-btn" data-value="acisiz">Acısız</button>
                        <button class="option-btn" data-value="az">Az Acılı</button>
                        <button class="option-btn" data-value="orta">Orta Acılı</button>
                        <button class="option-btn" data-value="cok">Çok Acılı</button>
                    </div>
                </div>
                
                <div class="option-section">
                    <div class="option-title">Özel Notlar</div>
                    <textarea class="notes-input" placeholder="Özel isteklerinizi buraya yazabilirsiniz..."></textarea>
                </div>
                
                <button class="add-to-cart-btn" id="add-to-cart-btn">
                    Sepete Ekle
                </button>
            `;
            
            // Seçenek butonlarına tıklama olayı ekle
            const optionButtons = elements.productModalBody.querySelectorAll('.option-btn');
            optionButtons.forEach(button => {
                button.addEventListener('click', () => {
                    optionButtons.forEach(btn => btn.classList.remove('selected'));
                    button.classList.add('selected');
                });
            });
            
            // Sepete ekle butonuna tıklama olayı ekle
            const addToCartBtn = elements.productModalBody.getElementById('add-to-cart-btn');
            addToCartBtn.addEventListener('click', () => {
                const selectedOption = elements.productModalBody.querySelector('.option-btn.selected')?.dataset.value || 'acisiz';
                const notes = elements.productModalBody.querySelector('.notes-input').value;
                
                addToCart(product, selectedOption, notes);
                closeModal(elements.productModal);
                showToast('Ürün sepete eklendi!', 'success');
            });
            
            openModal(elements.productModal);
        }

        // Sepete ürün ekle
        function addToCart(product, option, notes) {
            const existingItem = state.cart.find(item => 
                item.product.id === product.id && 
                item.option === option && 
                item.notes === notes
            );
            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cart.push({
                    product,
                    option,
                    notes,
                    quantity: 1
                });
            }
            
            updateCartBadge();
        }

        // Sepet badge'ini güncelle
        function updateCartBadge() {
            const totalItems = state.cart.reduce((total, item) => total + item.quantity, 0);
            elements.cartBadge.textContent = totalItems;
        }

        // Sepet modalını aç
        function openCartModal() {
            elements.cartModalBody.innerHTML = '';
            
            if (state.cart.length === 0) {
                elements.cartModalBody.innerHTML = `
                    <div class="empty-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <p>Sepetiniz boş</p>
                    </div>
                `;
            } else {
                const cartItemsContainer = document.createElement('div');
                cartItemsContainer.className = 'cart-items';
                
                state.cart.forEach((item, index) => {
                    const cartItem = document.createElement('div');
                    cartItem.className = 'cart-item';
                    
                    cartItem.innerHTML = `
                        <div class="cart-item-image">
                            <i class="fas fa-utensils"></i>
                        </div>
                        <div class="cart-item-info">
                            <div class="cart-item-name">${item.product.name}</div>
                            <div class="cart-item-options">Acı: ${formatOption(item.option)}</div>
                            ${item.notes ? `<div class="cart-item-notes">${item.notes}</div>` : ''}
                            <div class="cart-item-price">${(item.product.price * item.quantity).toFixed(2)} ₺</div>
                            
                            <div class="cart-quantity">
                                <button class="quantity-btn decrease-btn">-</button>
                                <span class="quantity-value">${item.quantity}</span>
                                <button class="quantity-btn increase-btn">+</button>
                            </div>
                            
                            <button class="remove-btn">
                                <i class="fas fa-trash"></i> Kaldır
                            </button>
                        </div>
                    `;
                    
                    // Miktar azaltma butonu
                    const decreaseBtn = cartItem.querySelector('.decrease-btn');
                    decreaseBtn.addEventListener('click', () => {
                        if (item.quantity > 1) {
                            item.quantity--;
                            cartItem.querySelector('.quantity-value').textContent = item.quantity;
                            cartItem.querySelector('.cart-item-price').textContent = 
                                `${(item.product.price * item.quantity).toFixed(2)} ₺`;
                        } else {
                            state.cart.splice(index, 1);
                            cartItem.remove();
                        }
                        
                        updateCartTotal();
                        updateCartBadge();
                    });
                    
                    // Miktar artırma butonu
                    const increaseBtn = cartItem.querySelector('.increase-btn');
                    increaseBtn.addEventListener('click', () => {
                        item.quantity++;
                        cartItem.querySelector('.quantity-value').textContent = item.quantity;
                        cartItem.querySelector('.cart-item-price').textContent = 
                            `${(item.product.price * item.quantity).toFixed(2)} ₺`;
                        
                        updateCartTotal();
                        updateCartBadge();
                    });
                    
                    // Kaldır butonu
                    const removeBtn = cartItem.querySelector('.remove-btn');
                    removeBtn.addEventListener('click', () => {
                        state.cart.splice(index, 1);
                        cartItem.remove();
                        updateCartTotal();
                        updateCartBadge();
                        
                        if (state.cart.length === 0) {
                            elements.cartModalBody.innerHTML = `
                                <div class="empty-cart">
                                    <i class="fas fa-shopping-cart"></i>
                                    <p>Sepetiniz boş</p>
                                </div>
                            `;
                        }
                    });
                    
                    cartItemsContainer.appendChild(cartItem);
                });
                
                elements.cartModalBody.appendChild(cartItemsContainer);
                
                // Toplam fiyat
                const cartTotal = document.createElement('div');
                cartTotal.className = 'cart-total';
                cartTotal.innerHTML = `
                    <span>Toplam:</span>
                    <span id="cart-total-price">${calculateCartTotal().toFixed(2)} ₺</span>
                `;
                elements.cartModalBody.appendChild(cartTotal);
                
                // Siparişi tamamla butonu
                const checkoutBtn = document.createElement('button');
                checkoutBtn.className = 'checkout-btn';
                checkoutBtn.textContent = 'Siparişi Tamamla';
                checkoutBtn.addEventListener('click', placeOrder);
                
                elements.cartModalBody.appendChild(checkoutBtn);
            }
            
            openModal(elements.cartModal);
        }

        // Sepet toplamını hesapla
        function calculateCartTotal() {
            return state.cart.reduce((total, item) => {
                return total + (item.product.price * item.quantity);
            }, 0);
        }

        // Sepet toplamını güncelle
        function updateCartTotal() {
            const totalElement = document.getElementById('cart-total-price');
            if (totalElement) {
                totalElement.textContent = `${calculateCartTotal().toFixed(2)} ₺`;
            }
        }

        // Siparişi tamamla
        async function placeOrder() {
            if (!state.subscriptionActive) {
                showToast('Aboneliğiniz aktif değil!', 'error');
                return;
            }
            
            if (state.cart.length === 0) {
                showToast('Sepetiniz boş!', 'error');
                return;
            }
            
            showLoading(true);
            
            try {
                // Sipariş oluştur
                const { data: order, error: orderError } = await supabase
                    .from('orders')
                    .insert([{
                        restaurant_id: state.restaurant.id,
                        table_number: state.tableNumber,
                        status: 'pending'
                    }])
                    .select()
                    .single();
                
                if (orderError) throw orderError;
                
                // Sipariş öğelerini oluştur
                const orderItems = state.cart.map(item => ({
                    order_id: order.id,
                    product_id: item.product.id,
                    quantity: item.quantity,
                    options: { spiciness: item.option },
                    notes: item.notes
                }));
                
                const { error: itemsError } = await supabase
                    .from('order_items')
                    .insert(orderItems);
                
                if (itemsError) throw itemsError;
                
                // Sepeti temizle
                state.cart = [];
                updateCartBadge();
                
                // Modalı kapat
                closeModal(elements.cartModal);
                
                showToast('Siparişiniz başarıyla alındı!', 'success');
                
            } catch (error) {
                console.error('Sipariş hatası:', error);
                showToast('Sipariş oluşturulurken bir hata oluştu!', 'error');
            } finally {
                showLoading(false);
            }
        }

        // Garson çağır
        async function callWaiter() {
            if (!state.subscriptionActive) {
                showToast('Aboneliğiniz aktif değil!', 'error');
                return;
            }
            
            try {
                const { error } = await supabase
                    .from('calls')
                    .insert([{
                        restaurant_id: state.restaurant.id,
                        table_number: state.tableNumber,
                        type: 'waiter',
                        status: 'pending'
                    }]);
                
                if (error) throw error;
                
                showToast('Garson çağrınız iletilmiştir!', 'success');
                
            } catch (error) {
                console.error('Garson çağırma hatası:', error);
                showToast('Garson çağrılırken bir hata oluştu!', 'error');
            }
        }

        // Köz iste
        async function requestCharcoal() {
            if (!state.subscriptionActive) {
                showToast('Aboneliğiniz aktif değil!', 'error');
                return;
            }
            
            try {
                const { error } = await supabase
                    .from('calls')
                    .insert([{
                        restaurant_id: state.restaurant.id,
                        table_number: state.tableNumber,
                        type: 'charcoal',
                        status: 'pending'
                    }]);
                
                if (error) throw error;
                
                showToast('Köz isteğiniz iletilmiştir!', 'success');
                
            } catch (error) {
                console.error('Köz isteme hatası:', error);
                showToast('Köz istenirken bir hata oluştu!', 'error');
            }
        }

        // Yardımcı fonksiyonlar
        function formatOption(option) {
            const optionsMap = {
                'acisiz': 'Acısız',
                'az': 'Az Acılı',
                'orta': 'Orta Acılı',
                'cok': 'Çok Acılı'
            };
            return optionsMap[option] || option;
        }

        function openModal(modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal(modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function showToast(message, type = '') {
            elements.toast.textContent = message;
            elements.toast.className = `toast ${type}`;
            elements.toast.classList.add('show');
            
            setTimeout(() => {
                elements.toast.classList.remove('show');
            }, 3000);
        }

        function showLoading(show) {
            elements.loading.style.display = show ? 'flex' : 'none';
        }

        // Event listener'lar
        elements.cartButton.addEventListener('click', openCartModal);
        elements.callWaiterBtn.addEventListener('click', callWaiter);
        elements.requestCharcoalBtn.addEventListener('click', requestCharcoal);
        elements.closeProductModal.addEventListener('click', () => closeModal(elements.productModal));
        elements.closeCartModal.addEventListener('click', () => closeModal(elements.cartModal));
        
        // Modal dışına tıklayarak kapatma
        [elements.productModal, elements.cartModal].forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal(modal);
                }
            });
        });
    </script>
</body>
</html>
```

## Özellikler ve İşlevsellik

Bu uygulama, restoran müşterilerinin QR kod okuttuklarında kullanacakları tüm işlevleri içerir:

1. **Restoran ve Masa Tanımlama**:
   - URL parametreleriyle restoran ID ve masa numarası alınır
   - Restoran adı başlıkta gösterilir

2. **Abonelik Kontrolü**:
   - Restoranın abonelik durumu kontrol edilir
   - Deneme süresi bitmişse uyarı gösterilir ve işlevler devre dışı bırakılır

3. **Menü Sistemi**:
   - Kategoriler ve ürünler Supabase'den yüklenir
   - Kategori seçimiyle ürünler filtrelenir
   - Ürünler grid görünümünde listelenir

4. **Ürün Detayları**:
   - Ürünlere tıklandığında detay modalı açılır
   - Acı seviyesi seçimi (Acısız, Az, Orta, Çok)
   - Özel not ekleme imkanı
   - Sepete ekleme butonu

5. **Sepet Yönetimi**:
   - Ürünleri sepete ekleme
   - Sepette ürün miktarını artırma/azaltma
   - Ürünleri sepetten kaldırma
   - Toplam fiyat hesaplama
   - Siparişi tamamlama

6. **Garson Çağırma**:
   - Tek tıkla garson çağırma
   - Supabase'e çağrı kaydı ekleme
   - Başarılı çağrı için bildirim

7. **Köz İsteme**:
   - Köz isteği gönderme
   - Supabase'e istek kaydı ekleme
   - Başarılı istek için bildirim

8. **Kullanıcı Deneyimi**:
   - Toast bildirimleri (başarı, hata, bilgi)
   - Yükleme göstergesi
   - Responsive tasarım (mobil ve masaüstü uyumlu)
   - Animasyonlu geçişler
   - Modern ve şık arayüz

## GitHub Pages'e Yayınlama

Bu uygulamayı GitHub Pages'de yayınlamak için:

1. Yukarıdaki kodu `index.html` adıyla kaydedin
2. GitHub'da yeni bir repository oluşturun
3. Dosyayı repository'e yükleyin
4. Repository settings > Pages bölümüne gidin
5. Source kısmından `main` branch'ını ve `/ (root)` klasörünü seçin
6. Kaydedin ve birkaç dakika bekleyin

Artık uygulamanız `https://kullaniciadiniz.github.io/repository-adi` adresinden erişilebilir.

## QR Kod Yapısı

Restoranlar için QR kodları aşağıdaki formatta oluşturulmalıdır:

```
https://kullaniciadiniz.github.io/repository-adi?restaurant_id=12345&table=5
```

Burada:
- `restaurant_id`: Supabase'deki restoran ID'si
- `table`: Masa numarası (1-10 arası)

Bu uygulama, restoran müşterilerine kapsamlı bir QR menü deneyimi sunarken, abonelik sistemiyle restoranların uzun süreli kullanımını destekler.
import { productIcons } from './icons.js';
import { 
  getRestaurantInfo, 
  getTableInfo, 
  getProducts, 
  getProductCategories,
  createOrder,
  addOrderItem,
  callWaiter,
  updateTableStatus
} from './supabase.js';
import { RESTAURANT_ID, TABLE_ID } from './config.js';

// Debug için ID'leri logla
console.log('🔍 Debug Bilgileri:');
console.log('Restaurant ID:', RESTAURANT_ID);
console.log('Table ID:', TABLE_ID);

// Global değişkenler
let restaurantInfo = null;
let tableInfo = null;
let products = [];
let categories = [];
let orders = [];
let currentOrder = null;

// DOM elementleri
const menuGrid = document.querySelector('.menu-grid');
const orderList = document.getElementById('order-list');
const toastContainer = document.getElementById('toast-container');
const tableIdElement = document.getElementById('table-id');
const logoElement = document.querySelector('.logo');

// Sayfa yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await initializeApp();
  } catch (error) {
    console.error('Uygulama başlatılamadı:', error);
    showToast('Uygulama yüklenirken hata oluştu', 'error');
  }
});

// Uygulamayı başlat
async function initializeApp() {
  console.log('🚀 Uygulama başlatılıyor...');
  
  // Restoran ve masa bilgilerini al
  restaurantInfo = await getRestaurantInfo();
  tableInfo = await getTableInfo();
  
  console.log('📋 Restoran Bilgileri:', restaurantInfo);
  console.log('🪑 Masa Bilgileri:', tableInfo);
  
  if (!restaurantInfo || !tableInfo) {
    showToast('Restoran veya masa bilgileri bulunamadı', 'error');
    return;
  }

  // Ürünler ve kategorileri al
  products = await getProducts();
  categories = await getProductCategories();
  
  console.log('🍽️ Ürünler:', products);
  console.log('📂 Kategoriler:', categories);

  // UI'yi güncelle
  updateUI();
  
  // Kategori barını oluştur
  createCategoryBar();
  
  // Menüyü render et
  renderMenu();
  
  // Siparişleri render et
  renderOrders();
}

// UI'yi güncelle
function updateUI() {
  // Logo ve restoran adı
  if (restaurantInfo) {
    logoElement.textContent = restaurantInfo.name || '🍽️ Neon Fusion';
  }
  
  // Masa numarası
  if (tableInfo) {
    tableIdElement.textContent = tableInfo.number || '--';
  }
}

// Kategori barını oluştur
function createCategoryBar() {
  const categoryBar = document.createElement('nav');
  categoryBar.className = 'category-bar glass';
  
  // Tümü kategorisi
  const allCategoriesBtn = `
    <button class="category-btn active" data-key="all">
      <span class="cat-icon">${productIcons.default}</span>
      <span class="cat-name">Tümü</span>
    </button>
  `;
  
  // Kategorileri oluştur
  const categoryButtons = categories.map(cat => `
    <button class="category-btn" data-key="${cat.id}">
      <span class="cat-icon">${productIcons.default}</span>
      <span class="cat-name">${cat.name}</span>
    </button>
  `).join('');
  
  categoryBar.innerHTML = allCategoriesBtn + categoryButtons;
  document.querySelector('.menu-section').prepend(categoryBar);
  
  // Kategori tıklama olayları
  categoryBar.addEventListener('click', e => {
    const btn = e.target.closest('.category-btn');
    if (!btn) return;
    
    const categoryId = btn.dataset.key;
    filterByCategory(categoryId);
    updateCategoryBar(categoryId);
  });
}

// Kategori barını güncelle
function updateCategoryBar(activeCategoryId = 'all') {
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.key === activeCategoryId);
  });
}

// Kategoriye göre filtrele
function filterByCategory(categoryId) {
  let filteredProducts = products;
  
  if (categoryId !== 'all') {
    filteredProducts = products.filter(product => product.category_id === categoryId);
  }
  
  renderMenu(filteredProducts);
}

// Ürün adına göre SVG döndüren fonksiyon
function getProductIcon(name) {
  if (!name) return productIcons.default;
  const key = name.toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/ü/g, 'u')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g');
  return productIcons[key] || productIcons.default;
}

// Menü kartlarını oluştur
function renderMenu(productsToRender = products) {
  menuGrid.innerHTML = '';
  
  if (productsToRender.length === 0) {
    menuGrid.innerHTML = '<div class="no-products">Bu kategoride ürün bulunamadı.</div>';
    return;
  }
  
  productsToRender.forEach(product => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = `
      <div class="menu-icon-svg">${getProductIcon(product.name)}</div>
      <div class="menu-info">
        <h3>${product.name}</h3>
        <p>${product.description || ''}</p>
        <div class="menu-bottom">
          <span class="menu-price">${product.price}${restaurantInfo?.currency || '₺'}</span>
          <button class="neon-btn" data-id="${product.id}" data-price="${product.price}">
            Sipariş Ver
          </button>
        </div>
      </div>
    `;
    menuGrid.appendChild(card);
  });
}

// Sipariş listesi
function renderOrders() {
  orderList.innerHTML = '';
  
  if (orders.length === 0) {
    orderList.innerHTML = '<li>Henüz sipariş yok.</li>';
    return;
  }
  
  // Ürünleri grupla ve miktarları hesapla
  const groupedOrders = {};
  orders.forEach(item => {
    if (groupedOrders[item.id]) {
      groupedOrders[item.id].quantity += 1;
    } else {
      groupedOrders[item.id] = { ...item, quantity: 1 };
    }
  });
  
  // Toplam fiyatı hesapla
  let totalPrice = 0;
  
  Object.values(groupedOrders).forEach(item => {
    const li = document.createElement('li');
    const itemTotal = parseFloat(item.price) * item.quantity;
    totalPrice += itemTotal;
    
    li.innerHTML = `
      <div class="order-item">
        <span class="item-name">${item.name}</span>
        <span class="item-quantity">x${item.quantity}</span>
        <span class="item-price">${itemTotal}${restaurantInfo?.currency || '₺'}</span>
      </div>
    `;
    orderList.appendChild(li);
  });
  
  // Toplam fiyatı göster
  if (totalPrice > 0) {
    const totalLi = document.createElement('li');
    totalLi.className = 'order-total';
    totalLi.innerHTML = `
      <div class="total-line">
        <span>Toplam:</span>
        <span class="total-price">${totalPrice}${restaurantInfo?.currency || '₺'}</span>
      </div>
    `;
    orderList.appendChild(totalLi);
  }
}

// Menüde sipariş butonları
menuGrid.addEventListener('click', e => {
  if (e.target.classList.contains('neon-btn')) {
    const productId = e.target.dataset.id;
    const product = products.find(p => p.id === productId);
    
    if (product) {
      addToOrder(product);
    }
  }
});

// Siparişe ürün ekle
function addToOrder(product) {
  orders.push(product);
  renderOrders();
  showToast(`${product.name} siparişe eklendi!`, 'success');
}

// Siparişi gönder
async function submitOrder() {
  if (orders.length === 0) {
    showToast('Sipariş listesi boş!', 'error');
    return;
  }
  
  try {
    // Toplam fiyatı hesapla
    const totalPrice = orders.reduce((sum, item) => sum + parseFloat(item.price), 0);
    
    // Sipariş oluştur
    const order = await createOrder({
      totalPrice: totalPrice,
      note: 'QR menüden sipariş'
    });
    
    // Sipariş kalemlerini ekle
    const groupedOrders = {};
    orders.forEach(item => {
      if (groupedOrders[item.id]) {
        groupedOrders[item.id].quantity += 1;
      } else {
        groupedOrders[item.id] = { ...item, quantity: 1 };
      }
    });
    
    for (const [productId, item] of Object.entries(groupedOrders)) {
      await addOrderItem(order.id, {
        productId: productId,
        quantity: item.quantity,
        unitPrice: parseFloat(item.price),
        note: null
      });
    }
    
    // Masa durumunu güncelle
    await updateTableStatus('active');
    
    // Sipariş listesini temizle
    orders = [];
    renderOrders();
    
    showToast('Siparişiniz başarıyla gönderildi!', 'success');
    
  } catch (error) {
    console.error('Sipariş gönderilemedi:', error);
    showToast('Sipariş gönderilirken hata oluştu', 'error');
  }
}

// Garson çağırma
const callWaiterBtn = document.querySelector('.call-waiter-btn');
callWaiterBtn.addEventListener('click', async () => {
  try {
    await callWaiter('waiter');
    showToast('Garson çağrıldı! Lütfen bekleyiniz.', 'info');
  } catch (error) {
    console.error('Garson çağrısı gönderilemedi:', error);
    showToast('Garson çağrısı gönderilemedi', 'error');
  }
});

// Sipariş gönder butonu ekle
const submitOrderBtn = document.createElement('button');
submitOrderBtn.className = 'submit-order-btn neon-btn';
submitOrderBtn.textContent = 'Siparişi Gönder';
submitOrderBtn.addEventListener('click', submitOrder);

// Sipariş bölümüne butonu ekle
const orderSection = document.querySelector('.order-section');
orderSection.insertBefore(submitOrderBtn, callWaiterBtn);

// Toast bildirim fonksiyonu
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 600);
  }, 2500);
} 
import { productIcons } from './icons.js';

// Kategori listesi ve ikonları
const categories = [
  { key: 'kebap', name: 'Kebaplar', icon: 'kebap' },
  { key: 'tatli', name: 'Tatlılar', icon: 'baklava' },
  { key: 'icecek', name: 'İçecekler', icon: 'ayran' },
  { key: 'salata', name: 'Salatalar', icon: 'salata' },
  { key: 'firin', name: 'Fırın', icon: 'pide' },
  { key: 'fastfood', name: 'Fast Food', icon: 'hamburger' },
  { key: 'tum', name: 'Tümü', icon: 'default' }
];

// Menü örnek verisi (kategori ile)
const menuData = [
  { id: 1, name: 'Füzyon Kebap', desc: 'Neon soslu, ızgara etli, özel ekmekte', price: '180₺', category: 'kebap' },
  { id: 2, name: 'Baklava', desc: 'Kat kat, fıstıklı, şerbetli', price: '75₺', category: 'tatli' },
  { id: 3, name: 'Ayran', desc: 'Köpüklü, buz gibi', price: '25₺', category: 'icecek' },
  { id: 4, name: 'Pide', desc: 'Kıymalı, kaşarlı, taş fırında', price: '120₺', category: 'firin' },
  { id: 5, name: 'Salata', desc: 'Taze yeşillikler, limon sos', price: '55₺', category: 'salata' },
  { id: 6, name: 'Hamburger', desc: 'Ev yapımı, özel soslu', price: '140₺', category: 'fastfood' },
  { id: 7, name: 'Döner', desc: 'Odun ateşinde, lavaşta', price: '110₺', category: 'kebap' },
  { id: 8, name: 'Sütlaç', desc: 'Fırınlanmış, tarçınlı', price: '60₺', category: 'tatli' },
  { id: 9, name: 'Kola', desc: 'Buzlu, kutu', price: '30₺', category: 'icecek' },
  { id: 10, name: 'Lahmacun', desc: 'Bol malzemeli, çıtır', price: '65₺', category: 'firin' },
];

const menuGrid = document.querySelector('.menu-grid');
const orderList = document.getElementById('order-list');
const toastContainer = document.getElementById('toast-container');
const tableId = document.getElementById('table-id');

// Kategori barı oluştur
const categoryBar = document.createElement('nav');
categoryBar.className = 'category-bar glass';
categoryBar.innerHTML = categories.map(cat => `
  <button class="category-btn" data-key="${cat.key}">
    <span class="cat-icon">${productIcons[cat.icon]}</span>
    <span class="cat-name">${cat.name}</span>
  </button>
`).join('');
document.querySelector('.menu-section').prepend(categoryBar);

let activeCategory = 'tum';

categoryBar.addEventListener('click', e => {
  const btn = e.target.closest('.category-btn');
  if (!btn) return;
  activeCategory = btn.dataset.key;
  updateCategoryBar();
  renderMenu();
});

function updateCategoryBar() {
  categoryBar.querySelectorAll('.category-btn').forEach(btn => {
    if (btn.dataset.key === activeCategory) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Ürün adına göre SVG döndüren fonksiyon
function getProductIcon(name) {
  if (!name) return productIcons.default;
  const key = name.toLowerCase().replace(/ı/g, 'i').replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g');
  return productIcons[key] || productIcons.default;
}

// Menü kartlarını oluştur (SVG ile, kategoriye göre)
function renderMenu() {
  menuGrid.innerHTML = '';
  let filtered = menuData;
  if (activeCategory !== 'tum') {
    filtered = menuData.filter(item => item.category === activeCategory);
  }
  if (filtered.length === 0) {
    menuGrid.innerHTML = '<div class="no-products">Bu kategoride ürün yok.</div>';
    return;
  }
  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-card glass';
    card.innerHTML = `
      <div class="menu-icon-svg">${getProductIcon(item.name)}</div>
      <div class="menu-info">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="menu-bottom">
          <span class="menu-price">${item.price}</span>
          <button class="neon-btn" data-id="${item.id}">Sipariş Ver</button>
        </div>
      </div>
    `;
    menuGrid.appendChild(card);
  });
}

// Sipariş listesi
let orders = [];
function addOrder(itemId) {
  const item = menuData.find(i => i.id == itemId);
  if (!item) return;
  orders.push(item);
  renderOrders();
  showToast(`${item.name} siparişe eklendi!`, 'success');
}
function renderOrders() {
  orderList.innerHTML = orders.length ? '' : '<li>Henüz sipariş yok.</li>';
  orders.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} – ${item.price}`;
    orderList.appendChild(li);
  });
}

// Menüde sipariş butonları
menuGrid.addEventListener('click', e => {
  if (e.target.classList.contains('neon-btn')) {
    addOrder(e.target.dataset.id);
  }
});

// Garson çağırma
const callWaiterBtn = document.querySelector('.call-waiter-btn');
callWaiterBtn.addEventListener('click', () => {
  showToast('Garson çağrıldı! Lütfen bekleyiniz.', 'info');
  // İleride: Supabase ile garson çağırma kaydı
});

// Toast bildirim fonksiyonu
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 600);
  }, 2500);
}

// Başlangıçta kategori barı ve menüyü güncelle
updateCategoryBar();
renderMenu();
renderOrders(); 
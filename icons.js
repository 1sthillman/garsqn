// Profesyonel SVG İkonlar - Restoran Menü Sistemi
const productIcons = {
  // TÜRK MUTFAĞI
  kebap: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#FEF3C7"/>
    <rect x="8" y="12" width="16" height="2" rx="1" fill="#92400E"/>
    <rect x="8" y="16" width="16" height="2" rx="1" fill="#DC2626"/>
    <rect x="8" y="20" width="16" height="2" rx="1" fill="#92400E"/>
    <circle cx="16" cy="16" r="4" fill="#DC2626"/>
  </svg>`,
  
  döner: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#FEF3C7"/>
    <circle cx="16" cy="16" r="8" fill="#DC2626"/>
    <circle cx="16" cy="16" r="5" fill="#7F1D1D"/>
    <rect x="10" y="14" width="12" height="4" rx="2" fill="#92400E"/>
  </svg>`,
  
  pide: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#FEF3C7"/>
    <ellipse cx="16" cy="16" rx="10" ry="5" fill="#F59E0B"/>
    <rect x="8" y="14" width="16" height="4" rx="2" fill="#92400E"/>
    <circle cx="12" cy="16" r="1.5" fill="#DC2626"/>
    <circle cx="20" cy="16" r="1.5" fill="#DC2626"/>
  </svg>`,
  
  hamburger: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#FEF3C7"/>
    <rect x="8" y="10" width="16" height="2" rx="1" fill="#92400E"/>
    <rect x="8" y="14" width="16" height="2" rx="1" fill="#DC2626"/>
    <rect x="8" y="18" width="16" height="2" rx="1" fill="#92400E"/>
    <circle cx="12" cy="11" r="0.5" fill="#FEF3C7"/>
    <circle cx="20" cy="11" r="0.5" fill="#FEF3C7"/>
  </svg>`,
  
  pizza: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#FEF3C7"/>
    <circle cx="16" cy="16" r="10" fill="#DC2626"/>
    <circle cx="16" cy="16" r="7" fill="#F59E0B"/>
    <circle cx="12" cy="12" r="1" fill="#DC2626"/>
    <circle cx="20" cy="12" r="1" fill="#DC2626"/>
    <circle cx="12" cy="20" r="1" fill="#DC2626"/>
    <circle cx="20" cy="20" r="1" fill="#DC2626"/>
  </svg>`,
  
  // İÇECEKLER
  çay: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#FEF3C7"/>
    <ellipse cx="16" cy="16" rx="8" ry="10" fill="#F59E0B"/>
    <rect x="10" y="10" width="12" height="10" rx="2" fill="#92400E"/>
    <rect x="12" y="12" width="8" height="6" rx="1" fill="#DC2626"/>
    <rect x="11" y="20" width="10" height="1" rx="0.5" fill="#92400E"/>
  </svg>`,
  
  kahve: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#FEF3C7"/>
    <ellipse cx="16" cy="16" rx="8" ry="10" fill="#92400E"/>
    <rect x="10" y="10" width="12" height="10" rx="2" fill="#7F1D1D"/>
    <rect x="12" y="12" width="8" height="6" rx="1" fill="#DC2626"/>
    <rect x="11" y="20" width="10" height="1" rx="0.5" fill="#7F1D1D"/>
  </svg>`,
  
  su: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#FEF3C7"/>
    <ellipse cx="16" cy="16" rx="8" ry="10" fill="#3B82F6"/>
    <rect x="10" y="10" width="12" height="10" rx="2" fill="#1E40AF"/>
    <rect x="12" y="12" width="8" height="6" rx="1" fill="#60A5FA"/>
    <rect x="11" y="20" width="10" height="1" rx="0.5" fill="#1E40AF"/>
  </svg>`,
  
  kola: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#FEF3C7"/>
    <ellipse cx="16" cy="16" rx="8" ry="10" fill="#DC2626"/>
    <rect x="10" y="10" width="12" height="10" rx="2" fill="#7F1D1D"/>
    <rect x="12" y="12" width="8" height="6" rx="1" fill="#FEF3C7"/>
    <rect x="11" y="20" width="10" height="1" rx="0.5" fill="#7F1D1D"/>
  </svg>`,
  
  // TATLILAR
  baklava: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#FEF3C7"/>
    <ellipse cx="16" cy="16" rx="10" ry="5" fill="#F59E0B"/>
    <rect x="8" y="14" width="16" height="4" rx="2" fill="#92400E"/>
    <rect x="10" y="15" width="12" height="2" rx="1" fill="#DC2626"/>
    <circle cx="12" cy="16" r="0.5" fill="#92400E"/>
    <circle cx="16" cy="16" r="0.5" fill="#92400E"/>
    <circle cx="20" cy="16" r="0.5" fill="#92400E"/>
  </svg>`,
  
  dondurma: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#FEF3C7"/>
    <ellipse cx="16" cy="16" rx="10" ry="5" fill="#FEF3C7"/>
    <rect x="8" y="14" width="16" height="4" rx="2" fill="#60A5FA"/>
    <rect x="10" y="15" width="12" height="2" rx="1" fill="#3B82F6"/>
    <circle cx="12" cy="16" r="0.5" fill="#1E40AF"/>
    <circle cx="16" cy="16" r="0.5" fill="#1E40AF"/>
    <circle cx="20" cy="16" r="0.5" fill="#1E40AF"/>
  </svg>`,
  
  // MEYVELER
  meyve: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#FEF3C7"/>
    <ellipse cx="16" cy="16" rx="10" ry="5" fill="#10B981"/>
    <rect x="8" y="14" width="16" height="4" rx="2" fill="#065F46"/>
    <circle cx="12" cy="16" r="1.5" fill="#10B981"/>
    <circle cx="16" cy="16" r="1.5" fill="#10B981"/>
    <circle cx="20" cy="16" r="1.5" fill="#10B981"/>
    <circle cx="12" cy="18" r="1.5" fill="#10B981"/>
    <circle cx="16" cy="18" r="1.5" fill="#10B981"/>
    <circle cx="20" cy="18" r="1.5" fill="#10B981"/>
  </svg>`,
  
  elma: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#FEF3C7"/>
    <ellipse cx="16" cy="16" rx="10" ry="5" fill="#DC2626"/>
    <rect x="8" y="14" width="16" height="4" rx="2" fill="#7F1D1D"/>
    <circle cx="12" cy="16" r="1.5" fill="#DC2626"/>
    <circle cx="16" cy="16" r="1.5" fill="#DC2626"/>
    <circle cx="20" cy="16" r="1.5" fill="#DC2626"/>
    <circle cx="12" cy="18" r="1.5" fill="#DC2626"/>
    <circle cx="16" cy="18" r="1.5" fill="#DC2626"/>
    <circle cx="20" cy="18" r="1.5" fill="#DC2626"/>
  </svg>`,
  
  // ULUSLARARASI
  sushi: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#FEF3C7"/>
    <ellipse cx="16" cy="16" rx="10" ry="5" fill="#3B82F6"/>
    <rect x="8" y="14" width="16" height="4" rx="2" fill="#1E40AF"/>
    <circle cx="12" cy="16" r="1.5" fill="#FEF3C7"/>
    <circle cx="16" cy="16" r="1.5" fill="#FEF3C7"/>
    <circle cx="20" cy="16" r="1.5" fill="#FEF3C7"/>
    <rect x="10" y="18" width="12" height="1" rx="0.5" fill="#1E40AF"/>
  </svg>`,
  
  // Varsayılan ikon
  default: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#FEF3C7"/>
    <ellipse cx="16" cy="16" rx="10" ry="5" fill="#F59E0B"/>
    <rect x="8" y="14" width="16" height="4" rx="2" fill="#92400E"/>
    <circle cx="12" cy="16" r="1.5" fill="#DC2626"/>
    <circle cx="16" cy="16" r="1.5" fill="#DC2626"/>
    <circle cx="20" cy="16" r="1.5" fill="#DC2626"/>
    <rect x="10" y="18" width="12" height="1" rx="0.5" fill="#92400E"/>
  </svg>`
};

// Global erişim için
window.productIcons = productIcons;
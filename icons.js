// Profesyonel SVG İkonlar - Restoran Menü Sistemi
// Her ürün için mükemmel, birebir uyumlu SVG ikonlar
const productIcons = {
  // TÜRK MUTFAĞI - ANA YEMEKLER
  
  kebap: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <path d="M12 16h24v2H12zM12 20h24v2H12zM12 24h24v2H12z" fill="#92400E"/>
    <circle cx="24" cy="20" r="8" fill="#DC2626"/>
    <path d="M20 18h8v4H20z" fill="#7F1D1D"/>
  </svg>`,
  
  döner: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <circle cx="24" cy="24" r="12" fill="#DC2626"/>
    <circle cx="24" cy="24" r="8" fill="#7F1D1D"/>
    <path d="M16 20h16v8H16z" fill="#92400E"/>
    <path d="M20 16h8v16H20z" fill="#DC2626"/>
  </svg>`,
  
  pide: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <circle cx="20" cy="24" r="2" fill="#DC2626"/>
    <circle cx="28" cy="24" r="2" fill="#DC2626"/>
  </svg>`,
  
  hamburger: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <rect x="12" y="16" width="24" height="4" rx="2" fill="#92400E"/>
    <rect x="12" y="22" width="24" height="4" rx="2" fill="#DC2626"/>
    <rect x="12" y="28" width="24" height="4" rx="2" fill="#92400E"/>
    <circle cx="16" cy="20" r="1" fill="#FEF3C7"/>
    <circle cx="32" cy="20" r="1" fill="#FEF3C7"/>
  </svg>`,
  
  pizza: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <circle cx="24" cy="24" r="16" fill="#DC2626"/>
    <circle cx="24" cy="24" r="12" fill="#F59E0B"/>
    <circle cx="18" cy="18" r="2" fill="#DC2626"/>
    <circle cx="30" cy="18" r="2" fill="#DC2626"/>
    <circle cx="18" cy="30" r="2" fill="#DC2626"/>
    <circle cx="30" cy="30" r="2" fill="#DC2626"/>
    <circle cx="24" cy="24" r="2" fill="#DC2626"/>
  </svg>`,
  
  lahmacun: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#DC2626"/>
    <circle cx="18" cy="24" r="1.5" fill="#92400E"/>
    <circle cx="24" cy="24" r="1.5" fill="#92400E"/>
    <circle cx="30" cy="24" r="1.5" fill="#92400E"/>
  </svg>`,
  
  makarna: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <path d="M12 20h24v2H12zM12 24h24v2H12zM12 28h24v2H12z" fill="#F59E0B"/>
    <path d="M16 18h16v2H16zM16 22h16v2H16zM16 26h16v2H16z" fill="#92400E"/>
    <circle cx="20" cy="20" r="1" fill="#DC2626"/>
    <circle cx="28" cy="20" r="1" fill="#DC2626"/>
    <circle cx="20" cy="24" r="1" fill="#DC2626"/>
    <circle cx="28" cy="24" r="1" fill="#DC2626"/>
    <circle cx="20" cy="28" r="1" fill="#DC2626"/>
    <circle cx="28" cy="28" r="1" fill="#DC2626"/>
  </svg>`,
  
  pilav: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <circle cx="18" cy="24" r="1" fill="#DC2626"/>
    <circle cx="24" cy="24" r="1" fill="#DC2626"/>
    <circle cx="30" cy="24" r="1" fill="#DC2626"/>
    <circle cx="18" cy="28" r="1" fill="#DC2626"/>
    <circle cx="24" cy="28" r="1" fill="#DC2626"/>
    <circle cx="30" cy="28" r="1" fill="#DC2626"/>
  </svg>`,
  
  çorba: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#DC2626"/>
    <circle cx="18" cy="24" r="1" fill="#92400E"/>
    <circle cx="24" cy="24" r="1" fill="#92400E"/>
    <circle cx="30" cy="24" r="1" fill="#92400E"/>
    <path d="M16 26h16v2H16z" fill="#92400E"/>
  </svg>`,
  
  balık: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#3B82F6"/>
    <path d="M12 20h24v8H12z" fill="#1E40AF"/>
    <circle cx="18" cy="24" r="2" fill="#FEF3C7"/>
    <circle cx="30" cy="24" r="2" fill="#FEF3C7"/>
    <path d="M16 28h16v2H16z" fill="#1E40AF"/>
  </svg>`,
  
  tavuk: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <circle cx="18" cy="24" r="2" fill="#DC2626"/>
    <circle cx="30" cy="24" r="2" fill="#DC2626"/>
    <path d="M20 28h8v2H20z" fill="#92400E"/>
  </svg>`,
  
  et: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#DC2626"/>
    <path d="M12 20h24v8H12z" fill="#7F1D1D"/>
    <circle cx="18" cy="24" r="2" fill="#92400E"/>
    <circle cx="24" cy="24" r="2" fill="#92400E"/>
    <circle cx="30" cy="24" r="2" fill="#92400E"/>
    <path d="M16 28h16v2H16z" fill="#7F1D1D"/>
  </svg>`,
  
  börek: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <path d="M16 22h16v4H16z" fill="#DC2626"/>
    <circle cx="20" cy="24" r="1" fill="#92400E"/>
    <circle cx="28" cy="24" r="1" fill="#92400E"/>
  </svg>`,
  
  salata: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#10B981"/>
    <path d="M12 20h24v8H12z" fill="#065F46"/>
    <circle cx="18" cy="24" r="2" fill="#10B981"/>
    <circle cx="24" cy="24" r="2" fill="#10B981"/>
    <circle cx="30" cy="24" r="2" fill="#10B981"/>
    <circle cx="18" cy="28" r="2" fill="#10B981"/>
    <circle cx="24" cy="28" r="2" fill="#10B981"/>
    <circle cx="30" cy="28" r="2" fill="#10B981"/>
  </svg>`,
  
  mantı: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <circle cx="18" cy="24" r="1.5" fill="#DC2626"/>
    <circle cx="24" cy="24" r="1.5" fill="#DC2626"/>
    <circle cx="30" cy="24" r="1.5" fill="#DC2626"/>
    <circle cx="18" cy="28" r="1.5" fill="#DC2626"/>
    <circle cx="24" cy="28" r="1.5" fill="#DC2626"/>
    <circle cx="30" cy="28" r="1.5" fill="#DC2626"/>
  </svg>`,
  
  köfte: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#DC2626"/>
    <path d="M12 20h24v8H12z" fill="#7F1D1D"/>
    <circle cx="18" cy="24" r="2" fill="#92400E"/>
    <circle cx="24" cy="24" r="2" fill="#92400E"/>
    <circle cx="30" cy="24" r="2" fill="#92400E"/>
    <path d="M16 28h16v2H16z" fill="#7F1D1D"/>
  </svg>`,
  
  iskender: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <circle cx="18" cy="24" r="2" fill="#DC2626"/>
    <circle cx="24" cy="24" r="2" fill="#DC2626"/>
    <circle cx="30" cy="24" r="2" fill="#DC2626"/>
    <path d="M16 28h16v2H16z" fill="#92400E"/>
  </svg>`,
  
  adana: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#DC2626"/>
    <path d="M12 20h24v8H12z" fill="#7F1D1D"/>
    <circle cx="18" cy="24" r="2" fill="#92400E"/>
    <circle cx="24" cy="24" r="2" fill="#92400E"/>
    <circle cx="30" cy="24" r="2" fill="#92400E"/>
    <path d="M16 28h16v2H16z" fill="#7F1D1D"/>
  </svg>`,
  
  urfa: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#DC2626"/>
    <path d="M12 20h24v8H12z" fill="#7F1D1D"/>
    <circle cx="18" cy="24" r="2" fill="#92400E"/>
    <circle cx="24" cy="24" r="2" fill="#92400E"/>
    <circle cx="30" cy="24" r="2" fill="#92400E"/>
    <path d="M16 28h16v2H16z" fill="#7F1D1D"/>
  </svg>`,
  
  menemen: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <circle cx="18" cy="24" r="2" fill="#DC2626"/>
    <circle cx="24" cy="24" r="2" fill="#DC2626"/>
    <circle cx="30" cy="24" r="2" fill="#DC2626"/>
    <path d="M16 28h16v2H16z" fill="#92400E"/>
  </svg>`,
  
  imambayıldı: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#10B981"/>
    <path d="M12 20h24v8H12z" fill="#065F46"/>
    <circle cx="18" cy="24" r="2" fill="#10B981"/>
    <circle cx="24" cy="24" r="2" fill="#10B981"/>
    <circle cx="30" cy="24" r="2" fill="#10B981"/>
    <path d="M16 28h16v2H16z" fill="#065F46"/>
  </svg>`,
  
  hünkarbeğendi: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <circle cx="18" cy="24" r="2" fill="#DC2626"/>
    <circle cx="24" cy="24" r="2" fill="#DC2626"/>
    <circle cx="30" cy="24" r="2" fill="#DC2626"/>
    <path d="M16 28h16v2H16z" fill="#92400E"/>
  </svg>`,
  
  çiğköfte: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#DC2626"/>
    <path d="M12 20h24v8H12z" fill="#7F1D1D"/>
    <circle cx="18" cy="24" r="2" fill="#92400E"/>
    <circle cx="24" cy="24" r="2" fill="#92400E"/>
    <circle cx="30" cy="24" r="2" fill="#92400E"/>
    <path d="M16 28h16v2H16z" fill="#7F1D1D"/>
  </svg>`,
  
  mercimek: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <circle cx="18" cy="24" r="2" fill="#DC2626"/>
    <circle cx="24" cy="24" r="2" fill="#DC2626"/>
    <circle cx="30" cy="24" r="2" fill="#DC2626"/>
    <path d="M16 28h16v2H16z" fill="#92400E"/>
  </svg>`,
  
  ezogelin: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <circle cx="18" cy="24" r="2" fill="#DC2626"/>
    <circle cx="24" cy="24" r="2" fill="#DC2626"/>
    <circle cx="30" cy="24" r="2" fill="#DC2626"/>
    <path d="M16 28h16v2H16z" fill="#92400E"/>
  </svg>`,
  
  karnıyarık: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#10B981"/>
    <path d="M12 20h24v8H12z" fill="#065F46"/>
    <circle cx="18" cy="24" r="2" fill="#10B981"/>
    <circle cx="24" cy="24" r="2" fill="#10B981"/>
    <circle cx="30" cy="24" r="2" fill="#10B981"/>
    <path d="M16 28h16v2H16z" fill="#065F46"/>
  </svg>`,
  
  dolma: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#10B981"/>
    <path d="M12 20h24v8H12z" fill="#065F46"/>
    <circle cx="18" cy="24" r="2" fill="#10B981"/>
    <circle cx="24" cy="24" r="2" fill="#10B981"/>
    <circle cx="30" cy="24" r="2" fill="#10B981"/>
    <path d="M16 28h16v2H16z" fill="#065F46"/>
  </svg>`,
  
  sarma: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#10B981"/>
    <path d="M12 20h24v8H12z" fill="#065F46"/>
    <circle cx="18" cy="24" r="2" fill="#10B981"/>
    <circle cx="24" cy="24" r="2" fill="#10B981"/>
    <circle cx="30" cy="24" r="2" fill="#10B981"/>
    <path d="M16 28h16v2H16z" fill="#065F46"/>
  </svg>`,
  
  // İÇECEKLER
  
  çay: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="12" ry="16" fill="#F59E0B"/>
    <path d="M16 16h16v16H16z" fill="#92400E"/>
    <path d="M20 20h8v8H20z" fill="#DC2626"/>
    <path d="M18 32h12v2H18z" fill="#92400E"/>
  </svg>`,
  
  kahve: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="12" ry="16" fill="#92400E"/>
    <path d="M16 16h16v16H16z" fill="#7F1D1D"/>
    <path d="M20 20h8v8H20z" fill="#DC2626"/>
    <path d="M18 32h12v2H18z" fill="#7F1D1D"/>
  </svg>`,
  
  türk: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="12" ry="16" fill="#F59E0B"/>
    <path d="M16 16h16v16H16z" fill="#92400E"/>
    <path d="M20 20h8v8H20z" fill="#DC2626"/>
    <path d="M18 32h12v2H18z" fill="#92400E"/>
  </svg>`,
  
  nescafe: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="12" ry="16" fill="#92400E"/>
    <path d="M16 16h16v16H16z" fill="#7F1D1D"/>
    <path d="M20 20h8v8H20z" fill="#DC2626"/>
    <path d="M18 32h12v2H18z" fill="#7F1D1D"/>
  </svg>`,
  
  su: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="12" ry="16" fill="#3B82F6"/>
    <path d="M16 16h16v16H16z" fill="#1E40AF"/>
    <path d="M20 20h8v8H20z" fill="#60A5FA"/>
    <path d="M18 32h12v2H18z" fill="#1E40AF"/>
  </svg>`,
  
  kola: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="12" ry="16" fill="#DC2626"/>
    <path d="M16 16h16v16H16z" fill="#7F1D1D"/>
    <path d="M20 20h8v8H20z" fill="#FEF3C7"/>
    <path d="M18 32h12v2H18z" fill="#7F1D1D"/>
  </svg>`,
  
  fanta: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="12" ry="16" fill="#F59E0B"/>
    <path d="M16 16h16v16H16z" fill="#92400E"/>
    <path d="M20 20h8v8H20z" fill="#FEF3C7"/>
    <path d="M18 32h12v2H18z" fill="#92400E"/>
  </svg>`,
  
  sprite: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="12" ry="16" fill="#10B981"/>
    <path d="M16 16h16v16H16z" fill="#065F46"/>
    <path d="M20 20h8v8H20z" fill="#FEF3C7"/>
    <path d="M18 32h12v2H18z" fill="#065F46"/>
  </svg>`,
  
  ayran: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="12" ry="16" fill="#FEF3C7"/>
    <path d="M16 16h16v16H16z" fill="#F59E0B"/>
    <path d="M20 20h8v8H20z" fill="#92400E"/>
    <path d="M18 32h12v2H18z" fill="#F59E0B"/>
  </svg>`,
  
  şalgam: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="12" ry="16" fill="#DC2626"/>
    <path d="M16 16h16v16H16z" fill="#7F1D1D"/>
    <path d="M20 20h8v8H20z" fill="#FEF3C7"/>
    <path d="M18 32h12v2H18z" fill="#7F1D1D"/>
  </svg>`,
  
  boza: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="12" ry="16" fill="#F59E0B"/>
    <path d="M16 16h16v16H16z" fill="#92400E"/>
    <path d="M20 20h8v8H20z" fill="#DC2626"/>
    <path d="M18 32h12v2H18z" fill="#92400E"/>
  </svg>`,
  
  salep: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="12" ry="16" fill="#F59E0B"/>
    <path d="M16 16h16v16H16z" fill="#92400E"/>
    <path d="M20 20h8v8H20z" fill="#DC2626"/>
    <path d="M18 32h12v2H18z" fill="#92400E"/>
  </svg>`,
  
  wine: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="12" ry="16" fill="#DC2626"/>
    <path d="M16 16h16v16H16z" fill="#7F1D1D"/>
    <path d="M20 20h8v8H20z" fill="#FEF3C7"/>
    <path d="M18 32h12v2H18z" fill="#7F1D1D"/>
  </svg>`,
  
  beer: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="12" ry="16" fill="#F59E0B"/>
    <path d="M16 16h16v16H16z" fill="#92400E"/>
    <path d="M20 20h8v8H20z" fill="#FEF3C7"/>
    <path d="M18 32h12v2H18z" fill="#92400E"/>
  </svg>`,
  
  cocktail: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="12" ry="16" fill="#8B5CF6"/>
    <path d="M16 16h16v16H16z" fill="#5B21B6"/>
    <path d="M20 20h8v8H20z" fill="#FEF3C7"/>
    <path d="M18 32h12v2H18z" fill="#5B21B6"/>
  </svg>`,
  
  smoothie: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="12" ry="16" fill="#10B981"/>
    <path d="M16 16h16v16H16z" fill="#065F46"/>
    <path d="M20 20h8v8H20z" fill="#FEF3C7"/>
    <path d="M18 32h12v2H18z" fill="#065F46"/>
  </svg>`,
  
  // TATLILAR
  
  baklava: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <path d="M16 22h16v4H16z" fill="#DC2626"/>
    <circle cx="20" cy="24" r="1" fill="#92400E"/>
    <circle cx="24" cy="24" r="1" fill="#92400E"/>
    <circle cx="28" cy="24" r="1" fill="#92400E"/>
  </svg>`,
  
  sütlaç: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#FEF3C7"/>
    <path d="M12 20h24v8H12z" fill="#F59E0B"/>
    <path d="M16 22h16v4H16z" fill="#92400E"/>
    <circle cx="20" cy="24" r="1" fill="#DC2626"/>
    <circle cx="24" cy="24" r="1" fill="#DC2626"/>
    <circle cx="28" cy="24" r="1" fill="#DC2626"/>
  </svg>`,
  
  dondurma: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#FEF3C7"/>
    <path d="M12 20h24v8H12z" fill="#60A5FA"/>
    <path d="M16 22h16v4H16z" fill="#3B82F6"/>
    <circle cx="20" cy="24" r="1" fill="#1E40AF"/>
    <circle cx="24" cy="24" r="1" fill="#1E40AF"/>
    <circle cx="28" cy="24" r="1" fill="#1E40AF"/>
  </svg>`,
  
  künefe: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <path d="M16 22h16v4H16z" fill="#DC2626"/>
    <circle cx="20" cy="24" r="1" fill="#92400E"/>
    <circle cx="24" cy="24" r="1" fill="#92400E"/>
    <circle cx="28" cy="24" r="1" fill="#92400E"/>
  </svg>`,
  
  kadayıf: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <path d="M16 22h16v4H16z" fill="#DC2626"/>
    <circle cx="20" cy="24" r="1" fill="#92400E"/>
    <circle cx="24" cy="24" r="1" fill="#92400E"/>
    <circle cx="28" cy="24" r="1" fill="#92400E"/>
  </svg>`,
  
  revani: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <path d="M16 22h16v4H16z" fill="#DC2626"/>
    <circle cx="20" cy="24" r="1" fill="#92400E"/>
    <circle cx="24" cy="24" r="1" fill="#92400E"/>
    <circle cx="28" cy="24" r="1" fill="#92400E"/>
  </svg>`,
  
  şekerpare: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <path d="M16 22h16v4H16z" fill="#DC2626"/>
    <circle cx="20" cy="24" r="1" fill="#92400E"/>
    <circle cx="24" cy="24" r="1" fill="#92400E"/>
    <circle cx="28" cy="24" r="1" fill="#92400E"/>
  </svg>`,
  
  lokum: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <path d="M16 22h16v4H16z" fill="#DC2626"/>
    <circle cx="20" cy="24" r="1" fill="#92400E"/>
    <circle cx="24" cy="24" r="1" fill="#92400E"/>
    <circle cx="28" cy="24" r="1" fill="#92400E"/>
  </svg>`,
  
  profiterol: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#92400E"/>
    <path d="M12 20h24v8H12z" fill="#7F1D1D"/>
    <path d="M16 22h16v4H16z" fill="#DC2626"/>
    <circle cx="20" cy="24" r="1" fill="#FEF3C7"/>
    <circle cx="24" cy="24" r="1" fill="#FEF3C7"/>
    <circle cx="28" cy="24" r="1" fill="#FEF3C7"/>
  </svg>`,
  
  cheesecake: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#FEF3C7"/>
    <path d="M12 20h24v8H12z" fill="#F59E0B"/>
    <path d="M16 22h16v4H16z" fill="#92400E"/>
    <circle cx="20" cy="24" r="1" fill="#DC2626"/>
    <circle cx="24" cy="24" r="1" fill="#DC2626"/>
    <circle cx="28" cy="24" r="1" fill="#DC2626"/>
  </svg>`,
  
  tiramisu: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#92400E"/>
    <path d="M12 20h24v8H12z" fill="#7F1D1D"/>
    <path d="M16 22h16v4H16z" fill="#DC2626"/>
    <circle cx="20" cy="24" r="1" fill="#FEF3C7"/>
    <circle cx="24" cy="24" r="1" fill="#FEF3C7"/>
    <circle cx="28" cy="24" r="1" fill="#FEF3C7"/>
  </svg>`,
  
  // MEYVELER VE ATIŞTIRMALIKLAR
  
  meyve: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#10B981"/>
    <path d="M12 20h24v8H12z" fill="#065F46"/>
    <circle cx="18" cy="24" r="2" fill="#10B981"/>
    <circle cx="24" cy="24" r="2" fill="#10B981"/>
    <circle cx="30" cy="24" r="2" fill="#10B981"/>
    <circle cx="18" cy="28" r="2" fill="#10B981"/>
    <circle cx="24" cy="28" r="2" fill="#10B981"/>
    <circle cx="30" cy="28" r="2" fill="#10B981"/>
  </svg>`,
  
  elma: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#DC2626"/>
    <path d="M12 20h24v8H12z" fill="#7F1D1D"/>
    <circle cx="18" cy="24" r="2" fill="#DC2626"/>
    <circle cx="24" cy="24" r="2" fill="#DC2626"/>
    <circle cx="30" cy="24" r="2" fill="#DC2626"/>
    <circle cx="18" cy="28" r="2" fill="#DC2626"/>
    <circle cx="24" cy="28" r="2" fill="#DC2626"/>
    <circle cx="30" cy="28" r="2" fill="#DC2626"/>
  </svg>`,
  
  portakal: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <circle cx="18" cy="24" r="2" fill="#F59E0B"/>
    <circle cx="24" cy="24" r="2" fill="#F59E0B"/>
    <circle cx="30" cy="24" r="2" fill="#F59E0B"/>
    <circle cx="18" cy="28" r="2" fill="#F59E0B"/>
    <circle cx="24" cy="28" r="2" fill="#F59E0B"/>
    <circle cx="30" cy="28" r="2" fill="#F59E0B"/>
  </svg>`,
  
  muz: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <circle cx="18" cy="24" r="2" fill="#F59E0B"/>
    <circle cx="24" cy="24" r="2" fill="#F59E0B"/>
    <circle cx="30" cy="24" r="2" fill="#F59E0B"/>
    <circle cx="18" cy="28" r="2" fill="#F59E0B"/>
    <circle cx="24" cy="28" r="2" fill="#F59E0B"/>
    <circle cx="30" cy="28" r="2" fill="#F59E0B"/>
  </svg>`,
  
  çilek: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#DC2626"/>
    <path d="M12 20h24v8H12z" fill="#7F1D1D"/>
    <circle cx="18" cy="24" r="2" fill="#DC2626"/>
    <circle cx="24" cy="24" r="2" fill="#DC2626"/>
    <circle cx="30" cy="24" r="2" fill="#DC2626"/>
    <circle cx="18" cy="28" r="2" fill="#DC2626"/>
    <circle cx="24" cy="28" r="2" fill="#DC2626"/>
    <circle cx="30" cy="28" r="2" fill="#DC2626"/>
  </svg>`,
  
  kuruyemiş: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#92400E"/>
    <path d="M12 20h24v8H12z" fill="#7F1D1D"/>
    <circle cx="18" cy="24" r="2" fill="#92400E"/>
    <circle cx="24" cy="24" r="2" fill="#92400E"/>
    <circle cx="30" cy="24" r="2" fill="#92400E"/>
    <circle cx="18" cy="28" r="2" fill="#92400E"/>
    <circle cx="24" cy="28" r="2" fill="#92400E"/>
    <circle cx="30" cy="28" r="2" fill="#92400E"/>
  </svg>`,
  
  fındık: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#92400E"/>
    <path d="M12 20h24v8H12z" fill="#7F1D1D"/>
    <circle cx="18" cy="24" r="2" fill="#92400E"/>
    <circle cx="24" cy="24" r="2" fill="#92400E"/>
    <circle cx="30" cy="24" r="2" fill="#92400E"/>
    <circle cx="18" cy="28" r="2" fill="#92400E"/>
    <circle cx="24" cy="28" r="2" fill="#92400E"/>
    <circle cx="30" cy="28" r="2" fill="#92400E"/>
  </svg>`,
  
  // ULUSLARARASI YEMEKLER
  
  sushi: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#3B82F6"/>
    <path d="M12 20h24v8H12z" fill="#1E40AF"/>
    <circle cx="18" cy="24" r="2" fill="#FEF3C7"/>
    <circle cx="24" cy="24" r="2" fill="#FEF3C7"/>
    <circle cx="30" cy="24" r="2" fill="#FEF3C7"/>
    <path d="M16 28h16v2H16z" fill="#1E40AF"/>
  </svg>`,
  
  pasta: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <path d="M16 22h16v4H16z" fill="#DC2626"/>
    <circle cx="18" cy="24" r="1" fill="#92400E"/>
    <circle cx="24" cy="24" r="1" fill="#92400E"/>
    <circle cx="30" cy="24" r="1" fill="#92400E"/>
  </svg>`,
  
  steak: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#DC2626"/>
    <path d="M12 20h24v8H12z" fill="#7F1D1D"/>
    <circle cx="18" cy="24" r="2" fill="#92400E"/>
    <circle cx="24" cy="24" r="2" fill="#92400E"/>
    <circle cx="30" cy="24" r="2" fill="#92400E"/>
    <path d="M16 28h16v2H16z" fill="#7F1D1D"/>
  </svg>`,
  
  lasagna: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <path d="M16 22h16v4H16z" fill="#DC2626"/>
    <circle cx="18" cy="24" r="1" fill="#92400E"/>
    <circle cx="24" cy="24" r="1" fill="#92400E"/>
    <circle cx="30" cy="24" r="1" fill="#92400E"/>
  </svg>`,
  
  risotto: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <circle cx="18" cy="24" r="2" fill="#DC2626"/>
    <circle cx="24" cy="24" r="2" fill="#DC2626"/>
    <circle cx="30" cy="24" r="2" fill="#DC2626"/>
    <circle cx="18" cy="28" r="2" fill="#DC2626"/>
    <circle cx="24" cy="28" r="2" fill="#DC2626"/>
    <circle cx="30" cy="28" r="2" fill="#DC2626"/>
  </svg>`,
  
  paella: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <circle cx="18" cy="24" r="2" fill="#DC2626"/>
    <circle cx="24" cy="24" r="2" fill="#DC2626"/>
    <circle cx="30" cy="24" r="2" fill="#DC2626"/>
    <circle cx="18" cy="28" r="2" fill="#DC2626"/>
    <circle cx="24" cy="28" r="2" fill="#DC2626"/>
    <circle cx="30" cy="28" r="2" fill="#DC2626"/>
  </svg>`,
  
  ramen: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <path d="M16 22h16v4H16z" fill="#DC2626"/>
    <circle cx="18" cy="24" r="1" fill="#92400E"/>
    <circle cx="24" cy="24" r="1" fill="#92400E"/>
    <circle cx="30" cy="24" r="1" fill="#92400E"/>
  </svg>`,
  
  curry: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <circle cx="18" cy="24" r="2" fill="#DC2626"/>
    <circle cx="24" cy="24" r="2" fill="#DC2626"/>
    <circle cx="30" cy="24" r="2" fill="#DC2626"/>
    <path d="M16 28h16v2H16z" fill="#92400E"/>
  </svg>`,
  
  padthai: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <path d="M16 22h16v4H16z" fill="#DC2626"/>
    <circle cx="18" cy="24" r="1" fill="#92400E"/>
    <circle cx="24" cy="24" r="1" fill="#92400E"/>
    <circle cx="30" cy="24" r="1" fill="#92400E"/>
  </svg>`,
  
  hummus: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <circle cx="18" cy="24" r="2" fill="#DC2626"/>
    <circle cx="24" cy="24" r="2" fill="#DC2626"/>
    <circle cx="30" cy="24" r="2" fill="#DC2626"/>
    <path d="M16 28h16v2H16z" fill="#92400E"/>
  </svg>`,
  
  falafel: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#10B981"/>
    <path d="M12 20h24v8H12z" fill="#065F46"/>
    <circle cx="18" cy="24" r="2" fill="#10B981"/>
    <circle cx="24" cy="24" r="2" fill="#10B981"/>
    <circle cx="30" cy="24" r="2" fill="#10B981"/>
    <path d="M16 28h16v2H16z" fill="#065F46"/>
  </svg>`,
  
  shawarma: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <circle cx="18" cy="24" r="2" fill="#DC2626"/>
    <circle cx="24" cy="24" r="2" fill="#DC2626"/>
    <circle cx="30" cy="24" r="2" fill="#DC2626"/>
    <path d="M16 28h16v2H16z" fill="#92400E"/>
  </svg>`,
  
  taco: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <path d="M16 22h16v4H16z" fill="#DC2626"/>
    <circle cx="18" cy="24" r="1" fill="#92400E"/>
    <circle cx="24" cy="24" r="1" fill="#92400E"/>
    <circle cx="30" cy="24" r="1" fill="#92400E"/>
  </svg>`,
  
  burrito: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <path d="M16 22h16v4H16z" fill="#DC2626"/>
    <circle cx="18" cy="24" r="1" fill="#92400E"/>
    <circle cx="24" cy="24" r="1" fill="#92400E"/>
    <circle cx="30" cy="24" r="1" fill="#92400E"/>
  </svg>`,
  
  schnitzel: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <circle cx="18" cy="24" r="2" fill="#DC2626"/>
    <circle cx="24" cy="24" r="2" fill="#DC2626"/>
    <circle cx="30" cy="24" r="2" fill="#DC2626"/>
    <path d="M16 28h16v2H16z" fill="#92400E"/>
  </svg>`,
  
  goulash: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <circle cx="18" cy="24" r="2" fill="#DC2626"/>
    <circle cx="24" cy="24" r="2" fill="#DC2626"/>
    <circle cx="30" cy="24" r="2" fill="#DC2626"/>
    <path d="M16 28h16v2H16z" fill="#92400E"/>
  </svg>`,
  
  dumpling: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <path d="M16 22h16v4H16z" fill="#DC2626"/>
    <circle cx="18" cy="24" r="1" fill="#92400E"/>
    <circle cx="24" cy="24" r="1" fill="#92400E"/>
    <circle cx="30" cy="24" r="1" fill="#92400E"/>
  </svg>`,
  
  gnocchi: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <path d="M16 22h16v4H16z" fill="#DC2626"/>
    <circle cx="18" cy="24" r="1" fill="#92400E"/>
    <circle cx="24" cy="24" r="1" fill="#92400E"/>
    <circle cx="30" cy="24" r="1" fill="#92400E"/>
  </svg>`,
  
  ratatouille: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#10B981"/>
    <path d="M12 20h24v8H12z" fill="#065F46"/>
    <circle cx="18" cy="24" r="2" fill="#10B981"/>
    <circle cx="24" cy="24" r="2" fill="#10B981"/>
    <circle cx="30" cy="24" r="2" fill="#10B981"/>
    <path d="M16 28h16v2H16z" fill="#065F46"/>
  </svg>`,
  
  // Varsayılan ikon
  default: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FEF3C7"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F59E0B"/>
    <path d="M12 20h24v8H12z" fill="#92400E"/>
    <circle cx="18" cy="24" r="2" fill="#DC2626"/>
    <circle cx="24" cy="24" r="2" fill="#DC2626"/>
    <circle cx="30" cy="24" r="2" fill="#DC2626"/>
    <path d="M16 28h16v2H16z" fill="#92400E"/>
  </svg>`
};

// Debug: productIcons yüklendiğini kontrol et
console.log('productIcons loaded:', Object.keys(productIcons).length, 'icons available');

// İkon sayısını ve kategorileri göster
const iconCategories = {
  'Türk Mutfağı': ['kebap', 'döner', 'pide', 'hamburger', 'pizza', 'lahmacun', 'makarna', 'pilav', 'çorba', 'balık', 'tavuk', 'et', 'börek', 'salata', 'mantı', 'köfte', 'iskender', 'adana', 'urfa', 'menemen', 'imambayıldı', 'hünkarbeğendi', 'çiğköfte', 'mercimek', 'ezogelin', 'karnıyarık', 'dolma', 'sarma'],
  'İçecekler': ['çay', 'kahve', 'türk', 'nescafe', 'su', 'kola', 'fanta', 'sprite', 'ayran', 'şalgam', 'boza', 'salep', 'wine', 'beer', 'cocktail', 'smoothie'],
  'Tatlılar': ['baklava', 'sütlaç', 'dondurma', 'künefe', 'kadayıf', 'revani', 'şekerpare', 'lokum', 'profiterol', 'cheesecake', 'tiramisu'],
  'Meyveler': ['meyve', 'elma', 'portakal', 'muz', 'çilek'],
  'Kuruyemişler': ['kuruyemiş', 'fındık'],
  'Uluslararası': ['sushi', 'pasta', 'steak', 'lasagna', 'risotto', 'paella', 'ramen', 'curry', 'padthai', 'hummus', 'falafel', 'shawarma', 'taco', 'burrito', 'schnitzel', 'goulash', 'dumpling', 'gnocchi', 'ratatouille']
};

console.log('Icon categories:', iconCategories);

// Global erişim için
window.productIcons = productIcons;
// Türk mutfağı ve restoran ürünleri için kapsamlı SVG ikon seti
const productIcons = {
  // YEMEKLER - ANA YEMEKLER
  kebap: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="20" width="32" height="8" rx="4" fill="#8B4513" stroke="#654321" stroke-width="2"/>
    <rect x="12" y="22" width="24" height="4" rx="2" fill="#D2691E"/>
    <circle cx="16" cy="24" r="2" fill="#FFD700"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700"/>
    <circle cx="32" cy="24" r="2" fill="#FFD700"/>
  </svg>`,
  
  döner: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="6" width="16" height="36" rx="8" fill="#8B4513" stroke="#654321" stroke-width="2"/>
    <rect x="18" y="10" width="12" height="28" rx="6" fill="#D2691E"/>
    <ellipse cx="24" cy="24" rx="6" ry="12" fill="#FFD700"/>
    <circle cx="24" cy="18" r="2" fill="#FF6347"/>
    <circle cx="24" cy="30" r="2" fill="#FF6347"/>
  </svg>`,
  
  pide: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="24" rx="20" ry="10" fill="#F4A460" stroke="#8B4513" stroke-width="2"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#DEB887"/>
    <ellipse cx="24" cy="24" rx="12" ry="6" fill="#D2B48C"/>
    <circle cx="18" cy="20" r="2" fill="#FF6347"/>
    <circle cx="30" cy="20" r="2" fill="#FF6347"/>
    <circle cx="24" cy="28" r="2" fill="#FF6347"/>
  </svg>`,
  
  lahmacun: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="18" fill="#F4A460" stroke="#8B4513" stroke-width="2"/>
    <circle cx="24" cy="24" r="14" fill="#DEB887"/>
    <circle cx="24" cy="24" r="10" fill="#CD853F"/>
    <circle cx="18" cy="18" r="2" fill="#FF6347"/>
    <circle cx="30" cy="18" r="2" fill="#FF6347"/>
    <circle cx="24" cy="30" r="2" fill="#FF6347"/>
  </svg>`,
  
  hamburger: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="20" rx="16" ry="6" fill="#F4A460" stroke="#8B4513" stroke-width="2"/>
    <ellipse cx="24" cy="28" rx="16" ry="6" fill="#F4A460" stroke="#8B4513" stroke-width="2"/>
    <rect x="12" y="24" width="24" height="4" rx="2" fill="#8B4513"/>
    <circle cx="18" cy="26" r="1" fill="#FF6347"/>
    <circle cx="30" cy="26" r="1" fill="#FF6347"/>
  </svg>`,
  
  pizza: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="18" fill="#F4A460" stroke="#8B4513" stroke-width="2"/>
    <circle cx="24" cy="24" r="14" fill="#DEB887"/>
    <circle cx="18" cy="18" r="3" fill="#FF6347"/>
    <circle cx="30" cy="18" r="3" fill="#FF6347"/>
    <circle cx="24" cy="30" r="3" fill="#FF6347"/>
    <circle cx="12" cy="24" r="2" fill="#32CD32"/>
    <circle cx="36" cy="24" r="2" fill="#32CD32"/>
  </svg>`,
  
  makarna: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="#F5DEB3" stroke="#8B4513" stroke-width="2"/>
    <ellipse cx="24" cy="32" rx="10" ry="4" fill="#DEB887"/>
    <path d="M12 20 Q24 16 36 20" stroke="#8B4513" stroke-width="2" fill="none"/>
    <path d="M12 24 Q24 20 36 24" stroke="#8B4513" stroke-width="2" fill="none"/>
    <path d="M12 28 Q24 24 36 28" stroke="#8B4513" stroke-width="2" fill="none"/>
  </svg>`,
  
  pilav: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="#F5DEB3" stroke="#8B4513" stroke-width="2"/>
    <ellipse cx="24" cy="32" rx="10" ry="4" fill="#DEB887"/>
    <circle cx="18" cy="30" r="1" fill="#FFD700"/>
    <circle cx="24" cy="30" r="1" fill="#FFD700"/>
    <circle cx="30" cy="30" r="1" fill="#FFD700"/>
    <circle cx="21" cy="34" r="1" fill="#FFD700"/>
    <circle cx="27" cy="34" r="1" fill="#FFD700"/>
  </svg>`,
  
  çorba: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="30" rx="16" ry="8" fill="#F5DEB3" stroke="#8B4513" stroke-width="2"/>
    <ellipse cx="24" cy="30" rx="12" ry="5" fill="#DEB887"/>
    <rect x="12" y="30" width="24" height="6" rx="3" fill="#CD853F"/>
    <circle cx="18" cy="32" r="1" fill="#FF6347"/>
    <circle cx="24" cy="32" r="1" fill="#FF6347"/>
    <circle cx="30" cy="32" r="1" fill="#FF6347"/>
  </svg>`,
  
  balık: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#87CEEB" stroke="#4682B4" stroke-width="2"/>
    <polygon points="40,24 48,20 48,28" fill="#4682B4"/>
    <circle cx="20" cy="20" r="2" fill="#000"/>
    <circle cx="28" cy="20" r="2" fill="#000"/>
    <circle cx="24" cy="28" r="1" fill="#FF6347"/>
  </svg>`,
  
  tavuk: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="28" rx="14" ry="6" fill="#F4A460" stroke="#8B4513" stroke-width="2"/>
    <ellipse cx="24" cy="28" rx="10" ry="4" fill="#DEB887"/>
    <circle cx="20" cy="26" r="2" fill="#FFD700"/>
    <circle cx="28" cy="26" r="2" fill="#FFD700"/>
    <circle cx="24" cy="32" r="1" fill="#FF6347"/>
  </svg>`,
  
  et: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#8B4513" stroke="#654321" stroke-width="2"/>
    <ellipse cx="24" cy="24" rx="10" ry="4" fill="#CD853F"/>
    <circle cx="20" cy="22" r="1" fill="#FFD700"/>
    <circle cx="28" cy="22" r="1" fill="#FFD700"/>
    <circle cx="24" cy="26" r="1" fill="#FFD700"/>
  </svg>`,
  
  börek: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="20" width="24" height="8" rx="4" fill="#F4A460" stroke="#8B4513" stroke-width="2"/>
    <rect x="16" y="24" width="16" height="4" rx="2" fill="#DEB887"/>
    <circle cx="20" cy="26" r="1" fill="#FF6347"/>
    <circle cx="28" cy="26" r="1" fill="#FF6347"/>
  </svg>`,
  
  salata: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="#90EE90" stroke="#32CD32" stroke-width="2"/>
    <ellipse cx="24" cy="32" rx="10" ry="3" fill="#98FB98"/>
    <circle cx="18" cy="30" r="2" fill="#FF6347"/>
    <circle cx="30" cy="30" r="2" fill="#FF6347"/>
    <circle cx="24" cy="34" r="2" fill="#FF6347"/>
    <circle cx="21" cy="28" r="1" fill="#FFD700"/>
    <circle cx="27" cy="28" r="1" fill="#FFD700"/>
  </svg>`,
  
  mantı: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="#F5DEB3" stroke="#8B4513" stroke-width="2"/>
    <ellipse cx="24" cy="32" rx="10" ry="4" fill="#DEB887"/>
    <circle cx="18" cy="30" r="2" fill="#FF6347"/>
    <circle cx="24" cy="30" r="2" fill="#FF6347"/>
    <circle cx="30" cy="30" r="2" fill="#FF6347"/>
    <circle cx="21" cy="34" r="2" fill="#FF6347"/>
    <circle cx="27" cy="34" r="2" fill="#FF6347"/>
  </svg>`,
  
  köfte: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="24" rx="12" ry="6" fill="#8B4513" stroke="#654321" stroke-width="2"/>
    <ellipse cx="24" cy="24" rx="8" ry="4" fill="#CD853F"/>
    <circle cx="20" cy="22" r="1" fill="#FFD700"/>
    <circle cx="28" cy="22" r="1" fill="#FFD700"/>
    <circle cx="24" cy="26" r="1" fill="#FFD700"/>
  </svg>`,
  
  iskender: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="20" width="32" height="8" rx="4" fill="#8B4513" stroke="#654321" stroke-width="2"/>
    <rect x="12" y="22" width="24" height="4" rx="2" fill="#D2691E"/>
    <circle cx="16" cy="24" r="2" fill="#FFD700"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700"/>
    <circle cx="32" cy="24" r="2" fill="#FFD700"/>
    <ellipse cx="24" cy="36" rx="16" ry="4" fill="#F4A460"/>
  </svg>`,
  
  adana: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="20" width="28" height="8" rx="4" fill="#8B4513" stroke="#654321" stroke-width="2"/>
    <rect x="14" y="22" width="20" height="4" rx="2" fill="#D2691E"/>
    <circle cx="18" cy="24" r="2" fill="#FFD700"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700"/>
    <circle cx="30" cy="24" r="2" fill="#FFD700"/>
  </svg>`,
  
  urfa: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="20" width="28" height="8" rx="4" fill="#8B4513" stroke="#654321" stroke-width="2"/>
    <rect x="14" y="22" width="20" height="4" rx="2" fill="#D2691E"/>
    <circle cx="18" cy="24" r="2" fill="#FFD700"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700"/>
    <circle cx="30" cy="24" r="2" fill="#FFD700"/>
    <circle cx="21" cy="26" r="1" fill="#FF6347"/>
    <circle cx="27" cy="26" r="1" fill="#FF6347"/>
  </svg>`,
  
  // İÇECEKLER
  çay: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="20" width="16" height="12" rx="6" fill="#8B4513" stroke="#654321" stroke-width="2"/>
    <ellipse cx="24" cy="20" rx="8" ry="4" fill="#F5DEB3"/>
    <rect x="20" y="32" width="8" height="8" rx="4" fill="#8B4513"/>
    <circle cx="24" cy="26" r="2" fill="#FFD700"/>
  </svg>`,
  
  kahve: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="20" width="16" height="12" rx="6" fill="#654321" stroke="#4B2E05" stroke-width="2"/>
    <ellipse cx="24" cy="20" rx="8" ry="4" fill="#8B4513"/>
    <rect x="20" y="32" width="8" height="8" rx="4" fill="#654321"/>
    <circle cx="24" cy="26" r="2" fill="#FFD700"/>
  </svg>`,
  
  türk: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="20" width="16" height="12" rx="6" fill="#654321" stroke="#4B2E05" stroke-width="2"/>
    <ellipse cx="24" cy="20" rx="8" ry="4" fill="#8B4513"/>
    <rect x="20" y="32" width="8" height="8" rx="4" fill="#654321"/>
    <circle cx="24" cy="26" r="2" fill="#FFD700"/>
    <circle cx="20" cy="28" r="1" fill="#FFD700"/>
    <circle cx="28" cy="28" r="1" fill="#FFD700"/>
  </svg>`,
  
  nescafe: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="20" width="16" height="12" rx="6" fill="#654321" stroke="#4B2E05" stroke-width="2"/>
    <ellipse cx="24" cy="20" rx="8" ry="4" fill="#8B4513"/>
    <rect x="20" y="32" width="8" height="8" rx="4" fill="#654321"/>
    <circle cx="24" cy="26" r="2" fill="#FFD700"/>
    <circle cx="22" cy="28" r="1" fill="#FFD700"/>
    <circle cx="26" cy="28" r="1" fill="#FFD700"/>
  </svg>`,
  
  su: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="12" width="12" height="24" rx="6" fill="#87CEEB" stroke="#4682B4" stroke-width="2"/>
    <circle cx="24" cy="18" r="2" fill="#4682B4"/>
    <circle cx="24" cy="24" r="2" fill="#4682B4"/>
    <circle cx="24" cy="30" r="2" fill="#4682B4"/>
  </svg>`,
  
  kola: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="12" width="12" height="24" rx="6" fill="#B22222" stroke="#8B0000" stroke-width="2"/>
    <circle cx="24" cy="18" r="2" fill="#FFD700"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700"/>
    <circle cx="24" cy="30" r="2" fill="#FFD700"/>
  </svg>`,
  
  fanta: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="12" width="12" height="24" rx="6" fill="#FFA500" stroke="#FF8C00" stroke-width="2"/>
    <circle cx="24" cy="18" r="2" fill="#FFD700"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700"/>
    <circle cx="24" cy="30" r="2" fill="#FFD700"/>
  </svg>`,
  
  sprite: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="12" width="12" height="24" rx="6" fill="#90EE90" stroke="#32CD32" stroke-width="2"/>
    <circle cx="24" cy="18" r="2" fill="#FFD700"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700"/>
    <circle cx="24" cy="30" r="2" fill="#FFD700"/>
  </svg>`,
  
  ayran: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="12" width="12" height="24" rx="6" fill="#F5F5F5" stroke="#C0C0C0" stroke-width="2"/>
    <circle cx="24" cy="18" r="2" fill="#4682B4"/>
    <circle cx="24" cy="24" r="2" fill="#4682B4"/>
    <circle cx="24" cy="30" r="2" fill="#4682B4"/>
  </svg>`,
  
  şalgam: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="12" width="12" height="24" rx="6" fill="#DC143C" stroke="#B22222" stroke-width="2"/>
    <circle cx="24" cy="18" r="2" fill="#FFD700"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700"/>
    <circle cx="24" cy="30" r="2" fill="#FFD700"/>
  </svg>`,
  
  boza: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="12" width="12" height="24" rx="6" fill="#DEB887" stroke="#8B4513" stroke-width="2"/>
    <circle cx="24" cy="18" r="2" fill="#FFD700"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700"/>
    <circle cx="24" cy="30" r="2" fill="#FFD700"/>
  </svg>`,
  
  salep: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="12" width="12" height="24" rx="6" fill="#F5DEB3" stroke="#DEB887" stroke-width="2"/>
    <circle cx="24" cy="18" r="2" fill="#FFD700"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700"/>
    <circle cx="24" cy="30" r="2" fill="#FFD700"/>
  </svg>`,
  
  // TATLILAR
  baklava: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="20" width="24" height="8" rx="4" fill="#F4A460" stroke="#8B4513" stroke-width="2"/>
    <rect x="16" y="24" width="16" height="4" rx="2" fill="#DEB887"/>
    <circle cx="20" cy="26" r="1" fill="#FFD700"/>
    <circle cx="24" cy="26" r="1" fill="#FFD700"/>
    <circle cx="28" cy="26" r="1" fill="#FFD700"/>
    <circle cx="22" cy="28" r="1" fill="#FFD700"/>
    <circle cx="26" cy="28" r="1" fill="#FFD700"/>
  </svg>`,
  
  sütlaç: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="#F5DEB3" stroke="#8B4513" stroke-width="2"/>
    <ellipse cx="24" cy="32" rx="10" ry="3" fill="#F0F8FF"/>
    <ellipse cx="24" cy="32" rx="6" ry="2" fill="#DEB887"/>
    <circle cx="20" cy="30" r="2" fill="#FFD700"/>
    <circle cx="28" cy="30" r="2" fill="#FFD700"/>
    <circle cx="24" cy="34" r="2" fill="#FFD700"/>
  </svg>`,
  
  dondurma: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="20" rx="10" ry="6" fill="#F4A460"/>
    <ellipse cx="24" cy="20" rx="7" ry="4" fill="#F0F8FF"/>
    <rect x="20" y="20" width="8" height="16" rx="4" fill="#8B4513"/>
    <circle cx="22" cy="18" r="1" fill="#FF6347"/>
    <circle cx="26" cy="18" r="1" fill="#FF6347"/>
    <circle cx="24" cy="22" r="1" fill="#FF6347"/>
  </svg>`,
  
  künefe: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="20" width="24" height="8" rx="4" fill="#F4A460" stroke="#8B4513" stroke-width="2"/>
    <rect x="16" y="24" width="16" height="4" rx="2" fill="#DEB887"/>
    <circle cx="20" cy="26" r="1" fill="#FFD700"/>
    <circle cx="24" cy="26" r="1" fill="#FFD700"/>
    <circle cx="28" cy="26" r="1" fill="#FFD700"/>
    <circle cx="22" cy="28" r="1" fill="#FFD700"/>
    <circle cx="26" cy="28" r="1" fill="#FFD700"/>
  </svg>`,
  
  kadayıf: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="20" width="24" height="8" rx="4" fill="#F4A460" stroke="#8B4513" stroke-width="2"/>
    <rect x="16" y="24" width="16" height="4" rx="2" fill="#DEB887"/>
    <path d="M16 26 Q20 24 24 26 Q28 24 32 26" stroke="#8B4513" stroke-width="1"/>
    <path d="M16 28 Q20 26 24 28 Q28 26 32 28" stroke="#8B4513" stroke-width="1"/>
  </svg>`,
  
  revani: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="20" width="24" height="8" rx="4" fill="#F4A460" stroke="#8B4513" stroke-width="2"/>
    <rect x="16" y="24" width="16" height="4" rx="2" fill="#DEB887"/>
    <circle cx="20" cy="26" r="1" fill="#FFD700"/>
    <circle cx="24" cy="26" r="1" fill="#FFD700"/>
    <circle cx="28" cy="26" r="1" fill="#FFD700"/>
    <circle cx="22" cy="28" r="1" fill="#FFD700"/>
    <circle cx="26" cy="28" r="1" fill="#FFD700"/>
  </svg>`,
  
  şekerpare: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="12" fill="#F4A460" stroke="#8B4513" stroke-width="2"/>
    <circle cx="24" cy="24" r="8" fill="#DEB887"/>
    <circle cx="20" cy="20" r="2" fill="#FFD700"/>
    <circle cx="28" cy="20" r="2" fill="#FFD700"/>
    <circle cx="24" cy="28" r="2" fill="#FFD700"/>
  </svg>`,
  
  lokum: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="20" width="24" height="8" rx="4" fill="#F4A460" stroke="#8B4513" stroke-width="2"/>
    <rect x="16" y="24" width="16" height="4" rx="2" fill="#DEB887"/>
    <circle cx="20" cy="26" r="1" fill="#FFD700"/>
    <circle cx="24" cy="26" r="1" fill="#FFD700"/>
    <circle cx="28" cy="26" r="1" fill="#FFD700"/>
    <circle cx="22" cy="28" r="1" fill="#FFD700"/>
    <circle cx="26" cy="28" r="1" fill="#FFD700"/>
  </svg>`,
  
  // MEYVELER VE ATIŞTIRMALIKLAR
  meyve: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="12" fill="#90EE90" stroke="#32CD32" stroke-width="2"/>
    <ellipse cx="24" cy="24" rx="6" ry="3" fill="#98FB98"/>
    <circle cx="20" cy="20" r="2" fill="#FF6347"/>
    <circle cx="28" cy="20" r="2" fill="#FF6347"/>
    <circle cx="24" cy="28" r="2" fill="#FF6347"/>
  </svg>`,
  
  elma: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="10" fill="#FF6347" stroke="#DC143C" stroke-width="2"/>
    <ellipse cx="24" cy="24" rx="5" ry="2" fill="#FFB6C1"/>
    <rect x="22" y="14" width="4" height="6" rx="2" fill="#32CD32"/>
  </svg>`,
  
  portakal: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="10" fill="#FFA500" stroke="#FF8C00" stroke-width="2"/>
    <ellipse cx="24" cy="24" rx="5" ry="2" fill="#FFD700"/>
    <rect x="22" y="14" width="4" height="6" rx="2" fill="#32CD32"/>
  </svg>`,
  
  muz: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="24" rx="8" ry="12" fill="#FFD700" stroke="#FFA500" stroke-width="2"/>
    <ellipse cx="24" cy="24" rx="4" ry="6" fill="#FFE4B5"/>
  </svg>`,
  
  çilek: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="24" rx="10" ry="8" fill="#FF6347" stroke="#DC143C" stroke-width="2"/>
    <ellipse cx="24" cy="24" rx="5" ry="3" fill="#FFB6C1"/>
    <circle cx="20" cy="20" r="1" fill="#32CD32"/>
    <circle cx="28" cy="20" r="1" fill="#32CD32"/>
    <circle cx="24" cy="28" r="1" fill="#32CD32"/>
  </svg>`,
  
  kuruyemiş: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="24" rx="14" ry="8" fill="#8B4513" stroke="#654321" stroke-width="2"/>
    <ellipse cx="24" cy="24" rx="10" ry="5" fill="#CD853F"/>
    <circle cx="18" cy="20" r="2" fill="#FFD700"/>
    <circle cx="30" cy="20" r="2" fill="#FFD700"/>
    <circle cx="24" cy="28" r="2" fill="#FFD700"/>
    <circle cx="21" cy="24" r="1" fill="#FFD700"/>
    <circle cx="27" cy="24" r="1" fill="#FFD700"/>
  </svg>`,
  
  fındık: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="24" rx="8" ry="6" fill="#8B4513" stroke="#654321" stroke-width="2"/>
    <ellipse cx="24" cy="24" rx="5" ry="3" fill="#CD853F"/>
    <circle cx="22" cy="22" r="1" fill="#FFD700"/>
    <circle cx="26" cy="22" r="1" fill="#FFD700"/>
    <circle cx="24" cy="26" r="1" fill="#FFD700"/>
  </svg>`,
  
  // Varsayılan ikon
  default: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#F4A460" stroke="#8B4513" stroke-width="2"/>
    <ellipse cx="24" cy="24" rx="10" ry="4" fill="#DEB887"/>
    <circle cx="20" cy="22" r="2" fill="#FFD700"/>
    <circle cx="28" cy="22" r="2" fill="#FFD700"/>
    <circle cx="24" cy="26" r="2" fill="#FFD700"/>
  </svg>`
}; 
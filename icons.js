// Modern ve Profesyonel SVG İkon Seti
// Gerçek ürünlere uygun, şık ve modern tasarım
const productIcons = {
  // TÜRK MUTFAĞI - ANA YEMEKLER
  
  kebap: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="kebapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:0.9" />
        <stop offset="50%" style="stop-color:#A0522D;stop-opacity:0.8" />
        <stop offset="100%" style="stop-color:#654321;stop-opacity:0.9" />
      </linearGradient>
      <linearGradient id="kebapHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.6" />
        <stop offset="100%" style="stop-color:#FFA500;stop-opacity:0.4" />
      </linearGradient>
      <filter id="glassShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="0" dy="4" result="offset"/>
        <feComposite in2="offset" operator="over"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
      </filter>
      <filter id="glassEffect">
        <feGaussianBlur stdDeviation="1"/>
        <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.1 0"/>
      </filter>
    </defs>
    <!-- Ana kebap şekli -->
    <rect x="6" y="18" width="36" height="12" rx="6" fill="url(#kebapGradient)" filter="url(#glassShadow)"/>
    <!-- İç katman -->
    <rect x="10" y="20" width="28" height="8" rx="4" fill="url(#kebapHighlight)" opacity="0.7"/>
    <!-- Et parçaları -->
    <ellipse cx="14" cy="24" rx="3" ry="2" fill="#8B4513" opacity="0.8"/>
    <ellipse cx="22" cy="24" rx="3" ry="2" fill="#8B4513" opacity="0.8"/>
    <ellipse cx="30" cy="24" rx="3" ry="2" fill="#8B4513" opacity="0.8"/>
    <!-- Baharatlar -->
    <circle cx="18" cy="22" r="1" fill="#FF6347" opacity="0.9"/>
    <circle cx="26" cy="22" r="1" fill="#FF6347" opacity="0.9"/>
    <circle cx="34" cy="22" r="1" fill="#FF6347" opacity="0.9"/>
    <!-- Glassmorphism efekti -->
    <rect x="6" y="18" width="36" height="12" rx="6" fill="url(#kebapHighlight)" opacity="0.2" filter="url(#glassEffect)"/>
  </svg>`,
  
  döner: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="donerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:0.9" />
        <stop offset="50%" style="stop-color:#A0522D;stop-opacity:0.8" />
        <stop offset="100%" style="stop-color:#654321;stop-opacity:0.9" />
      </linearGradient>
      <linearGradient id="donerHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.6" />
        <stop offset="100%" style="stop-color:#FFA500;stop-opacity:0.4" />
      </linearGradient>
      <filter id="glassShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="0" dy="4" result="offset"/>
        <feComposite in2="offset" operator="over"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
      </filter>
      <filter id="glassEffect">
        <feGaussianBlur stdDeviation="1"/>
        <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.1 0"/>
      </filter>
    </defs>
    <!-- Ana döner şekli -->
    <rect x="14" y="4" width="20" height="40" rx="10" fill="url(#donerGradient)" filter="url(#glassShadow)"/>
    <!-- İç katman -->
    <rect x="16" y="8" width="16" height="32" rx="8" fill="url(#donerHighlight)" opacity="0.7"/>
    <!-- Et katmanları -->
    <ellipse cx="24" cy="20" rx="8" ry="14" fill="#8B4513" opacity="0.8"/>
    <ellipse cx="24" cy="28" rx="6" ry="10" fill="#A0522D" opacity="0.7"/>
    <ellipse cx="24" cy="36" rx="4" ry="6" fill="#CD853F" opacity="0.6"/>
    <!-- Baharatlar ve soslar -->
    <circle cx="20" cy="16" r="1.5" fill="#FF6347" opacity="0.9"/>
    <circle cx="28" cy="16" r="1.5" fill="#FF6347" opacity="0.9"/>
    <circle cx="24" cy="24" r="1.5" fill="#FFD700" opacity="0.8"/>
    <circle cx="20" cy="32" r="1.5" fill="#32CD32" opacity="0.8"/>
    <circle cx="28" cy="32" r="1.5" fill="#32CD32" opacity="0.8"/>
    <!-- Glassmorphism efekti -->
    <rect x="14" y="4" width="20" height="40" rx="10" fill="url(#donerHighlight)" opacity="0.2" filter="url(#glassEffect)"/>
  </svg>`,
  
  pide: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pideGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:0.9" />
        <stop offset="50%" style="stop-color:#DEB887;stop-opacity:0.8" />
        <stop offset="100%" style="stop-color:#D2B48C;stop-opacity:0.9" />
      </linearGradient>
      <linearGradient id="pideHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.6" />
        <stop offset="100%" style="stop-color:#FFA500;stop-opacity:0.4" />
      </linearGradient>
      <filter id="glassShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="0" dy="4" result="offset"/>
        <feComposite in2="offset" operator="over"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
      </filter>
      <filter id="glassEffect">
        <feGaussianBlur stdDeviation="1"/>
        <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.1 0"/>
      </filter>
    </defs>
    <!-- Ana pide şekli -->
    <ellipse cx="24" cy="24" rx="22" ry="12" fill="url(#pideGradient)" filter="url(#glassShadow)"/>
    <!-- İç katman -->
    <ellipse cx="24" cy="24" rx="18" ry="10" fill="url(#pideHighlight)" opacity="0.7"/>
    <!-- Hamur katmanı -->
    <ellipse cx="24" cy="24" rx="14" ry="8" fill="#DEB887" opacity="0.8"/>
    <!-- İç malzemeler -->
    <ellipse cx="18" cy="20" rx="4" ry="2" fill="#8B4513" opacity="0.9"/>
    <ellipse cx="30" cy="20" rx="4" ry="2" fill="#8B4513" opacity="0.9"/>
    <ellipse cx="24" cy="28" rx="4" ry="2" fill="#8B4513" opacity="0.9"/>
    <!-- Peynir -->
    <circle cx="16" cy="18" r="2" fill="#FFD700" opacity="0.9"/>
    <circle cx="32" cy="18" r="2" fill="#FFD700" opacity="0.9"/>
    <circle cx="24" cy="26" r="2" fill="#FFD700" opacity="0.9"/>
    <!-- Et parçaları -->
    <ellipse cx="20" cy="22" rx="3" ry="1.5" fill="#A0522D" opacity="0.8"/>
    <ellipse cx="28" cy="22" rx="3" ry="1.5" fill="#A0522D" opacity="0.8"/>
    <!-- Glassmorphism efekti -->
    <ellipse cx="24" cy="24" rx="22" ry="12" fill="url(#pideHighlight)" opacity="0.2" filter="url(#glassEffect)"/>
  </svg>`,
  
  hamburger: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="burgerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:0.9" />
        <stop offset="50%" style="stop-color:#DEB887;stop-opacity:0.8" />
        <stop offset="100%" style="stop-color:#D2B48C;stop-opacity:0.9" />
      </linearGradient>
      <linearGradient id="burgerHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.6" />
        <stop offset="100%" style="stop-color:#FFA500;stop-opacity:0.4" />
      </linearGradient>
      <linearGradient id="meatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:0.9" />
        <stop offset="50%" style="stop-color:#A0522D;stop-opacity:0.8" />
        <stop offset="100%" style="stop-color:#654321;stop-opacity:0.9" />
      </linearGradient>
      <filter id="glassShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="0" dy="4" result="offset"/>
        <feComposite in2="offset" operator="over"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
      </filter>
      <filter id="glassEffect">
        <feGaussianBlur stdDeviation="1"/>
        <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.1 0"/>
      </filter>
    </defs>
    <!-- Üst ekmek -->
    <ellipse cx="24" cy="18" rx="18" ry="8" fill="url(#burgerGradient)" filter="url(#glassShadow)"/>
    <!-- Alt ekmek -->
    <ellipse cx="24" cy="30" rx="18" ry="8" fill="url(#burgerGradient)" filter="url(#glassShadow)"/>
    <!-- Et -->
    <rect x="10" y="24" width="28" height="6" rx="3" fill="url(#meatGradient)" opacity="0.9"/>
    <!-- Marul -->
    <ellipse cx="24" cy="22" rx="16" ry="3" fill="#32CD32" opacity="0.8"/>
    <ellipse cx="24" cy="26" rx="16" ry="3" fill="#32CD32" opacity="0.8"/>
    <!-- Peynir -->
    <ellipse cx="24" cy="24" rx="14" ry="2" fill="#FFD700" opacity="0.9"/>
    <!-- Domates -->
    <circle cx="16" cy="24" r="2" fill="#FF6347" opacity="0.9"/>
    <circle cx="32" cy="24" r="2" fill="#FF6347" opacity="0.9"/>
    <!-- Soğan -->
    <circle cx="24" cy="22" r="1.5" fill="#F5F5DC" opacity="0.8"/>
    <circle cx="20" cy="26" r="1.5" fill="#F5F5DC" opacity="0.8"/>
    <circle cx="28" cy="26" r="1.5" fill="#F5F5DC" opacity="0.8"/>
    <!-- Glassmorphism efekti -->
    <ellipse cx="24" cy="18" rx="18" ry="8" fill="url(#burgerHighlight)" opacity="0.2" filter="url(#glassEffect)"/>
    <ellipse cx="24" cy="30" rx="18" ry="8" fill="url(#burgerHighlight)" opacity="0.2" filter="url(#glassEffect)"/>
  </svg>`,
  
  pizza: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pizzaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:0.9" />
        <stop offset="50%" style="stop-color:#DEB887;stop-opacity:0.8" />
        <stop offset="100%" style="stop-color:#D2B48C;stop-opacity:0.9" />
      </linearGradient>
      <linearGradient id="pizzaHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.6" />
        <stop offset="100%" style="stop-color:#FFA500;stop-opacity:0.4" />
      </linearGradient>
      <linearGradient id="sauceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FF6347;stop-opacity:0.9" />
        <stop offset="50%" style="stop-color:#DC143C;stop-opacity:0.8" />
        <stop offset="100%" style="stop-color:#B22222;stop-opacity:0.9" />
      </linearGradient>
      <filter id="glassShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="0" dy="4" result="offset"/>
        <feComposite in2="offset" operator="over"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
      </filter>
      <filter id="glassEffect">
        <feGaussianBlur stdDeviation="1"/>
        <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.1 0"/>
      </filter>
    </defs>
    <!-- Ana pizza hamuru -->
    <circle cx="24" cy="24" r="20" fill="url(#pizzaGradient)" filter="url(#glassShadow)"/>
    <!-- İç katman -->
    <circle cx="24" cy="24" r="16" fill="url(#pizzaHighlight)" opacity="0.7"/>
    <!-- Hamur katmanı -->
    <circle cx="24" cy="24" r="14" fill="#DEB887" opacity="0.8"/>
    <!-- Domates sosu -->
    <circle cx="24" cy="24" r="12" fill="url(#sauceGradient)" opacity="0.9"/>
    <!-- Peynir -->
    <circle cx="24" cy="24" r="10" fill="#FFD700" opacity="0.9"/>
    <!-- Sucuk -->
    <ellipse cx="16" cy="16" rx="3" ry="2" fill="#8B4513" opacity="0.9"/>
    <ellipse cx="32" cy="16" rx="3" ry="2" fill="#8B4513" opacity="0.9"/>
    <ellipse cx="24" cy="32" rx="3" ry="2" fill="#8B4513" opacity="0.9"/>
    <!-- Mantar -->
    <ellipse cx="12" cy="24" rx="2" ry="3" fill="#8B4513" opacity="0.8"/>
    <ellipse cx="36" cy="24" rx="2" ry="3" fill="#8B4513" opacity="0.8"/>
    <!-- Zeytin -->
    <circle cx="20" cy="20" r="1.5" fill="#000" opacity="0.9"/>
    <circle cx="28" cy="20" r="1.5" fill="#000" opacity="0.9"/>
    <circle cx="24" cy="28" r="1.5" fill="#000" opacity="0.9"/>
    <!-- Fesleğen -->
    <circle cx="18" cy="12" r="1" fill="#32CD32" opacity="0.9"/>
    <circle cx="30" cy="12" r="1" fill="#32CD32" opacity="0.9"/>
    <circle cx="24" cy="36" r="1" fill="#32CD32" opacity="0.9"/>
    <!-- Glassmorphism efekti -->
    <circle cx="24" cy="24" r="20" fill="url(#pizzaHighlight)" opacity="0.2" filter="url(#glassEffect)"/>
  </svg>`,
  
  // İÇECEKLER
  
  çay: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="çayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:0.9" />
        <stop offset="50%" style="stop-color:#A0522D;stop-opacity:0.8" />
        <stop offset="100%" style="stop-color:#654321;stop-opacity:0.9" />
      </linearGradient>
      <linearGradient id="çayHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.6" />
        <stop offset="100%" style="stop-color:#FFA500;stop-opacity:0.4" />
      </linearGradient>
      <linearGradient id="teaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#D2691E;stop-opacity:0.9" />
        <stop offset="50%" style="stop-color:#CD853F;stop-opacity:0.8" />
        <stop offset="100%" style="stop-color:#8B4513;stop-opacity:0.9" />
      </linearGradient>
      <filter id="glassShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="0" dy="4" result="offset"/>
        <feComposite in2="offset" operator="over"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
      </filter>
      <filter id="glassEffect">
        <feGaussianBlur stdDeviation="1"/>
        <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.1 0"/>
      </filter>
    </defs>
    <!-- Ana çay bardağı -->
    <rect x="14" y="18" width="20" height="16" rx="8" fill="url(#çayGradient)" filter="url(#glassShadow)"/>
    <!-- İç katman -->
    <rect x="16" y="20" width="16" height="12" rx="6" fill="url(#çayHighlight)" opacity="0.7"/>
    <!-- Çay sıvısı -->
    <rect x="16" y="20" width="16" height="12" rx="6" fill="url(#teaGradient)" opacity="0.8"/>
    <!-- Bardağın üst kısmı -->
    <ellipse cx="24" cy="18" rx="10" ry="5" fill="url(#çayGradient)" opacity="0.9"/>
    <!-- Çay yaprakları -->
    <ellipse cx="20" cy="24" rx="2" ry="3" fill="#228B22" opacity="0.7"/>
    <ellipse cx="28" cy="24" rx="2" ry="3" fill="#228B22" opacity="0.7"/>
    <ellipse cx="24" cy="28" rx="2" ry="3" fill="#228B22" opacity="0.7"/>
    <!-- Buhar -->
    <path d="M22 14 Q24 12 26 14" stroke="#F5F5F5" stroke-width="1" opacity="0.6" fill="none"/>
    <path d="M24 12 Q26 10 28 12" stroke="#F5F5F5" stroke-width="1" opacity="0.4" fill="none"/>
    <!-- Glassmorphism efekti -->
    <rect x="14" y="18" width="20" height="16" rx="8" fill="url(#çayHighlight)" opacity="0.2" filter="url(#glassEffect)"/>
  </svg>`,
  
  kahve: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="kahveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#654321;stop-opacity:0.9" />
        <stop offset="50%" style="stop-color:#8B4513;stop-opacity:0.8" />
        <stop offset="100%" style="stop-color:#4B2E05;stop-opacity:0.9" />
      </linearGradient>
      <linearGradient id="kahveHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.6" />
        <stop offset="100%" style="stop-color:#FFA500;stop-opacity:0.4" />
      </linearGradient>
      <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:0.9" />
        <stop offset="50%" style="stop-color:#A0522D;stop-opacity:0.8" />
        <stop offset="100%" style="stop-color:#654321;stop-opacity:0.9" />
      </linearGradient>
      <filter id="glassShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="0" dy="4" result="offset"/>
        <feComposite in2="offset" operator="over"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
      </filter>
      <filter id="glassEffect">
        <feGaussianBlur stdDeviation="1"/>
        <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.1 0"/>
      </filter>
    </defs>
    <!-- Ana kahve fincanı -->
    <rect x="14" y="18" width="20" height="16" rx="8" fill="url(#kahveGradient)" filter="url(#glassShadow)"/>
    <!-- İç katman -->
    <rect x="16" y="20" width="16" height="12" rx="6" fill="url(#kahveHighlight)" opacity="0.7"/>
    <!-- Kahve sıvısı -->
    <rect x="16" y="20" width="16" height="12" rx="6" fill="url(#coffeeGradient)" opacity="0.8"/>
    <!-- Fincanın üst kısmı -->
    <ellipse cx="24" cy="18" rx="10" ry="5" fill="url(#kahveGradient)" opacity="0.9"/>
    <!-- Kahve köpüğü -->
    <ellipse cx="22" cy="22" rx="3" ry="2" fill="#F5DEB3" opacity="0.9"/>
    <ellipse cx="26" cy="22" rx="3" ry="2" fill="#F5DEB3" opacity="0.9"/>
    <ellipse cx="24" cy="24" rx="2" ry="1" fill="#F5DEB3" opacity="0.8"/>
    <!-- Kahve çekirdekleri -->
    <ellipse cx="20" cy="26" rx="1" ry="2" fill="#4B2E05" opacity="0.7"/>
    <ellipse cx="28" cy="26" rx="1" ry="2" fill="#4B2E05" opacity="0.7"/>
    <ellipse cx="24" cy="28" rx="1" ry="2" fill="#4B2E05" opacity="0.7"/>
    <!-- Buhar -->
    <path d="M22 14 Q24 12 26 14" stroke="#F5F5F5" stroke-width="1" opacity="0.6" fill="none"/>
    <path d="M24 12 Q26 10 28 12" stroke="#F5F5F5" stroke-width="1" opacity="0.4" fill="none"/>
    <path d="M26 14 Q28 12 30 14" stroke="#F5F5F5" stroke-width="1" opacity="0.3" fill="none"/>
    <!-- Glassmorphism efekti -->
    <rect x="14" y="18" width="20" height="16" rx="8" fill="url(#kahveHighlight)" opacity="0.2" filter="url(#glassEffect)"/>
  </svg>`,
  
  // TATLILAR
  
  baklava: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="baklavaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:0.9" />
        <stop offset="50%" style="stop-color:#DEB887;stop-opacity:0.8" />
        <stop offset="100%" style="stop-color:#8B4513;stop-opacity:0.9" />
      </linearGradient>
      <linearGradient id="baklavaHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.8" />
        <stop offset="50%" style="stop-color:#FFA500;stop-opacity:0.6" />
        <stop offset="100%" style="stop-color:#FF8C00;stop-opacity:0.8" />
      </linearGradient>
      <linearGradient id="filloGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F5DEB3;stop-opacity:0.9" />
        <stop offset="50%" style="stop-color:#DEB887;stop-opacity:0.8" />
        <stop offset="100%" style="stop-color:#D2B48C;stop-opacity:0.9" />
      </linearGradient>
      <filter id="glassShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="0" dy="4" result="offset"/>
        <feComposite in2="offset" operator="over"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
      </filter>
      <filter id="glassEffect">
        <feGaussianBlur stdDeviation="1"/>
        <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.1 0"/>
      </filter>
    </defs>
    <!-- Ana baklava şekli -->
    <rect x="10" y="18" width="28" height="12" rx="6" fill="url(#baklavaGradient)" filter="url(#glassShadow)"/>
    <!-- İç katman -->
    <rect x="12" y="20" width="24" height="8" rx="4" fill="url(#baklavaHighlight)" opacity="0.7"/>
    <!-- Yufka katmanları -->
    <rect x="14" y="22" width="20" height="4" rx="2" fill="url(#filloGradient)" opacity="0.9"/>
    <!-- Ceviz içi -->
    <ellipse cx="18" cy="24" rx="2" ry="1" fill="#8B4513" opacity="0.8"/>
    <ellipse cx="22" cy="24" rx="2" ry="1" fill="#8B4513" opacity="0.8"/>
    <ellipse cx="26" cy="24" rx="2" ry="1" fill="#8B4513" opacity="0.8"/>
    <ellipse cx="30" cy="24" rx="2" ry="1" fill="#8B4513" opacity="0.8"/>
    <!-- Şerbet damlaları -->
    <circle cx="16" cy="26" r="1" fill="#FFD700" opacity="0.9"/>
    <circle cx="20" cy="26" r="1" fill="#FFD700" opacity="0.9"/>
    <circle cx="24" cy="26" r="1" fill="#FFD700" opacity="0.9"/>
    <circle cx="28" cy="26" r="1" fill="#FFD700" opacity="0.9"/>
    <circle cx="32" cy="26" r="1" fill="#FFD700" opacity="0.9"/>
    <!-- Üst süsleme -->
    <ellipse cx="18" cy="20" rx="1" ry="2" fill="#FFD700" opacity="0.8"/>
    <ellipse cx="22" cy="20" rx="1" ry="2" fill="#FFD700" opacity="0.8"/>
    <ellipse cx="26" cy="20" rx="1" ry="2" fill="#FFD700" opacity="0.8"/>
    <ellipse cx="30" cy="20" rx="1" ry="2" fill="#FFD700" opacity="0.8"/>
    <!-- Glassmorphism efekti -->
    <rect x="10" y="18" width="28" height="12" rx="6" fill="url(#baklavaHighlight)" opacity="0.2" filter="url(#glassEffect)"/>
  </svg>`,
  
  // Varsayılan ikon
  default: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="defaultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:0.9" />
        <stop offset="50%" style="stop-color:#DEB887;stop-opacity:0.8" />
        <stop offset="100%" style="stop-color:#D2B48C;stop-opacity:0.9" />
      </linearGradient>
      <linearGradient id="defaultHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.6" />
        <stop offset="100%" style="stop-color:#FFA500;stop-opacity:0.4" />
      </linearGradient>
      <filter id="glassShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="0" dy="4" result="offset"/>
        <feComposite in2="offset" operator="over"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
      </filter>
      <filter id="glassEffect">
        <feGaussianBlur stdDeviation="1"/>
        <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.1 0"/>
      </filter>
    </defs>
    <!-- Ana şekil -->
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="url(#defaultGradient)" filter="url(#glassShadow)"/>
    <!-- İç katman -->
    <ellipse cx="24" cy="24" rx="12" ry="6" fill="url(#defaultHighlight)" opacity="0.7"/>
    <!-- Detaylar -->
    <circle cx="20" cy="22" r="2" fill="#FFD700" opacity="0.8"/>
    <circle cx="28" cy="22" r="2" fill="#FFD700" opacity="0.8"/>
    <circle cx="24" cy="26" r="2" fill="#FFD700" opacity="0.8"/>
    <!-- Glassmorphism efekti -->
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="url(#defaultHighlight)" opacity="0.2" filter="url(#glassEffect)"/>
  </svg>`
};

// Debug: productIcons yüklendiğini kontrol et
console.log('productIcons loaded:', Object.keys(productIcons).length, 'icons available');

// İkon sayısını ve kategorileri göster
const iconCategories = {
  'Türk Mutfağı': ['kebap', 'döner', 'pide', 'hamburger', 'pizza'],
  'İçecekler': ['çay', 'kahve'],
  'Tatlılar': ['baklava']
};

console.log('Icon categories:', iconCategories);

// Global erişim için
window.productIcons = productIcons;
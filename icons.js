// Modern Glassmorphism ve Gerçekçi SVG İkon Seti
// Profesyonel, şeffaf ve modern tasarım
const productIcons = {
  // YEMEKLER - ANA YEMEKLER
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
  
  lahmacun: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lahmacunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <circle cx="24" cy="24" r="18" fill="url(#lahmacunGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <circle cx="24" cy="24" r="14" fill="#DEB887"/>
    <circle cx="24" cy="24" r="10" fill="#CD853F"/>
    <circle cx="18" cy="18" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="30" cy="18" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
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
  
  makarna: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="makarnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F5DEB3;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="url(#makarnaGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="32" rx="10" ry="4" fill="#DEB887"/>
    <path d="M12 20 Q24 16 36 20" stroke="#8B4513" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M12 24 Q24 20 36 24" stroke="#8B4513" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M12 28 Q24 24 36 28" stroke="#8B4513" stroke-width="2" fill="none" stroke-linecap="round"/>
  </svg>`,
  
  pilav: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pilavGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F5DEB3;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="url(#pilavGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="32" rx="10" ry="4" fill="#DEB887"/>
    <circle cx="18" cy="30" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="30" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="30" cy="30" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="21" cy="34" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="27" cy="34" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  çorba: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="corbaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F5DEB3;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="30" rx="16" ry="8" fill="url(#corbaGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="30" rx="12" ry="5" fill="#DEB887"/>
    <rect x="12" y="30" width="24" height="6" rx="3" fill="#CD853F"/>
    <circle cx="18" cy="32" r="1" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="32" r="1" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="30" cy="32" r="1" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  balık: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="balikGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#4682B4;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="url(#balikGradient)" stroke="#4682B4" stroke-width="2" filter="url(#shadow)"/>
    <polygon points="40,24 48,20 48,28" fill="#4682B4"/>
    <circle cx="20" cy="20" r="2" fill="#000" stroke="#333" stroke-width="0.5"/>
    <circle cx="28" cy="20" r="2" fill="#000" stroke="#333" stroke-width="0.5"/>
    <circle cx="24" cy="28" r="1" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  tavuk: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tavukGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="28" rx="14" ry="6" fill="url(#tavukGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="28" rx="10" ry="4" fill="#DEB887"/>
    <circle cx="20" cy="26" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="28" cy="26" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="32" r="1" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  et: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="etGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="url(#etGradient)" stroke="#654321" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="24" rx="10" ry="4" fill="#CD853F"/>
    <circle cx="20" cy="22" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="28" cy="22" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  börek: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="börekGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="12" y="20" width="24" height="8" rx="4" fill="url(#börekGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <rect x="16" y="24" width="16" height="4" rx="2" fill="#DEB887"/>
    <circle cx="20" cy="26" r="1" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="28" cy="26" r="1" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  salata: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="salataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#90EE90;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#98FB98;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="url(#salataGradient)" stroke="#32CD32" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="32" rx="10" ry="3" fill="#98FB98"/>
    <circle cx="18" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="30" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="34" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="21" cy="28" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="27" cy="28" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  mantı: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mantıGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F5DEB3;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="url(#mantıGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="32" rx="10" ry="4" fill="#DEB887"/>
    <circle cx="18" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="30" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="21" cy="34" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="27" cy="34" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  köfte: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="köfteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="24" rx="12" ry="6" fill="url(#köfteGradient)" stroke="#654321" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="24" rx="8" ry="4" fill="#CD853F"/>
    <circle cx="20" cy="22" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="28" cy="22" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  iskender: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iskenderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="8" y="20" width="32" height="8" rx="4" fill="url(#iskenderGradient)" stroke="#654321" stroke-width="2" filter="url(#shadow)"/>
    <rect x="12" y="22" width="24" height="4" rx="2" fill="#D2691E"/>
    <circle cx="16" cy="24" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="32" cy="24" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <ellipse cx="24" cy="36" rx="16" ry="4" fill="#F4A460" stroke="#8B4513" stroke-width="2"/>
  </svg>`,
  
  adana: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="adanaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="10" y="20" width="28" height="8" rx="4" fill="url(#adanaGradient)" stroke="#654321" stroke-width="2" filter="url(#shadow)"/>
    <rect x="14" y="22" width="20" height="4" rx="2" fill="#D2691E"/>
    <circle cx="18" cy="24" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="30" cy="24" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  urfa: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="urfaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="10" y="20" width="28" height="8" rx="4" fill="url(#urfaGradient)" stroke="#654321" stroke-width="2" filter="url(#shadow)"/>
    <rect x="14" y="22" width="20" height="4" rx="2" fill="#D2691E"/>
    <circle cx="18" cy="24" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="30" cy="24" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="21" cy="26" r="1" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="27" cy="26" r="1" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
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
  
  türk: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="türkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#654321;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#4B2E05;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="16" y="20" width="16" height="12" rx="6" fill="url(#türkGradient)" stroke="#4B2E05" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="20" rx="8" ry="4" fill="#8B4513"/>
    <rect x="20" y="32" width="8" height="8" rx="4" fill="#654321"/>
    <circle cx="24" cy="26" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="20" cy="28" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="28" cy="28" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  nescafe: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="nescafeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#654321;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#4B2E05;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="16" y="20" width="16" height="12" rx="6" fill="url(#nescafeGradient)" stroke="#4B2E05" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="20" rx="8" ry="4" fill="#8B4513"/>
    <rect x="20" y="32" width="8" height="8" rx="4" fill="#654321"/>
    <circle cx="24" cy="26" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="22" cy="28" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="26" cy="28" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  su: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="suGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#4682B4;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="18" y="12" width="12" height="24" rx="6" fill="url(#suGradient)" stroke="#4682B4" stroke-width="2" filter="url(#shadow)"/>
    <circle cx="24" cy="18" r="2" fill="#4682B4" stroke="#333" stroke-width="0.5"/>
    <circle cx="24" cy="24" r="2" fill="#4682B4" stroke="#333" stroke-width="0.5"/>
    <circle cx="24" cy="30" r="2" fill="#4682B4" stroke="#333" stroke-width="0.5"/>
  </svg>`,
  
  kola: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="kolaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#B22222;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#8B0000;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="18" y="12" width="12" height="24" rx="6" fill="url(#kolaGradient)" stroke="#8B0000" stroke-width="2" filter="url(#shadow)"/>
    <circle cx="24" cy="18" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="30" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  fanta: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fantaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FFA500;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#FF8C00;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="18" y="12" width="12" height="24" rx="6" fill="url(#fantaGradient)" stroke="#FF8C00" stroke-width="2" filter="url(#shadow)"/>
    <circle cx="24" cy="18" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="30" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  sprite: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="spriteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#90EE90;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#32CD32;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="18" y="12" width="12" height="24" rx="6" fill="url(#spriteGradient)" stroke="#32CD32" stroke-width="2" filter="url(#shadow)"/>
    <circle cx="24" cy="18" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="30" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  ayran: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ayranGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F5F5F5;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#C0C0C0;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="18" y="12" width="12" height="24" rx="6" fill="url(#ayranGradient)" stroke="#C0C0C0" stroke-width="2" filter="url(#shadow)"/>
    <circle cx="24" cy="18" r="2" fill="#4682B4" stroke="#333" stroke-width="0.5"/>
    <circle cx="24" cy="24" r="2" fill="#4682B4" stroke="#333" stroke-width="0.5"/>
    <circle cx="24" cy="30" r="2" fill="#4682B4" stroke="#333" stroke-width="0.5"/>
  </svg>`,
  
  şalgam: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="şalgamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#DC143C;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#B22222;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="18" y="12" width="12" height="24" rx="6" fill="url(#şalgamGradient)" stroke="#B22222" stroke-width="2" filter="url(#shadow)"/>
    <circle cx="24" cy="18" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="30" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  boza: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bozaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#DEB887;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#8B4513;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="18" y="12" width="12" height="24" rx="6" fill="url(#bozaGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <circle cx="24" cy="18" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="30" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  salep: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="salepGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F5DEB3;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="18" y="12" width="12" height="24" rx="6" fill="url(#salepGradient)" stroke="#DEB887" stroke-width="2" filter="url(#shadow)"/>
    <circle cx="24" cy="18" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="30" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
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
  
  sütlaç: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sütlaçGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F5DEB3;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="url(#sütlaçGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="32" rx="10" ry="3" fill="#F0F8FF"/>
    <ellipse cx="24" cy="32" rx="6" ry="2" fill="#DEB887"/>
    <circle cx="20" cy="30" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="28" cy="30" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="34" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  dondurma: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="dondurmaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="20" rx="10" ry="6" fill="url(#dondurmaGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="20" rx="7" ry="4" fill="#F0F8FF"/>
    <rect x="20" y="20" width="8" height="16" rx="4" fill="#8B4513"/>
    <circle cx="22" cy="18" r="1" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="26" cy="18" r="1" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="22" r="1" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  künefe: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="künefeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#8B4513;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="12" y="20" width="24" height="8" rx="4" fill="url(#künefeGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <rect x="16" y="24" width="16" height="4" rx="2" fill="#DEB887"/>
    <circle cx="20" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="28" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="22" cy="28" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="26" cy="28" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  kadayıf: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="kadayıfGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#8B4513;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="12" y="20" width="24" height="8" rx="4" fill="url(#kadayıfGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <rect x="16" y="24" width="16" height="4" rx="2" fill="#DEB887"/>
    <path d="M16 26 Q20 24 24 26 Q28 24 32 26" stroke="#8B4513" stroke-width="1"/>
    <path d="M16 28 Q20 26 24 28 Q28 26 32 28" stroke="#8B4513" stroke-width="1"/>
  </svg>`,
  
  revani: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="revaniGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#8B4513;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="12" y="20" width="24" height="8" rx="4" fill="url(#revaniGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <rect x="16" y="24" width="16" height="4" rx="2" fill="#DEB887"/>
    <circle cx="20" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="28" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="22" cy="28" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="26" cy="28" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  şekerpare: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="şekerpareGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#8B4513;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <circle cx="24" cy="24" r="12" fill="url(#şekerpareGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <circle cx="24" cy="24" r="8" fill="#DEB887"/>
    <circle cx="20" cy="20" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="28" cy="20" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="28" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  lokum: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lokumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#8B4513;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="12" y="20" width="24" height="8" rx="4" fill="url(#lokumGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <rect x="16" y="24" width="16" height="4" rx="2" fill="#DEB887"/>
    <circle cx="20" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="28" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="22" cy="28" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="26" cy="28" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  // MEYVELER VE ATIŞTIRMALIKLAR
  meyve: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="meyveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#90EE90;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#32CD32;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <circle cx="24" cy="24" r="12" fill="url(#meyveGradient)" stroke="#32CD32" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="24" rx="6" ry="3" fill="#98FB98"/>
    <circle cx="20" cy="20" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="28" cy="20" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="28" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  elma: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="elmaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FF6347;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DC143C;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <circle cx="24" cy="24" r="10" fill="url(#elmaGradient)" stroke="#DC143C" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="24" rx="5" ry="2" fill="#FFB6C1"/>
    <rect x="22" y="14" width="4" height="6" rx="2" fill="#32CD32"/>
  </svg>`,
  
  portakal: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="portakalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FFA500;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#FF8C00;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <circle cx="24" cy="24" r="10" fill="url(#portakalGradient)" stroke="#FF8C00" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="24" rx="5" ry="2" fill="#FFD700"/>
    <rect x="22" y="14" width="4" height="6" rx="2" fill="#32CD32"/>
  </svg>`,
  
  muz: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="muzGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="24" rx="8" ry="12" fill="url(#muzGradient)" stroke="#FFA500" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="24" rx="4" ry="6" fill="#FFE4B5"/>
  </svg>`,
  
  çilek: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="çilekGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FF6347;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DC143C;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="24" rx="10" ry="8" fill="url(#çilekGradient)" stroke="#DC143C" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="24" rx="5" ry="3" fill="#FFB6C1"/>
    <circle cx="20" cy="20" r="1" fill="#32CD32" stroke="#228B22" stroke-width="0.5"/>
    <circle cx="28" cy="20" r="1" fill="#32CD32" stroke="#228B22" stroke-width="0.5"/>
    <circle cx="24" cy="28" r="1" fill="#32CD32" stroke="#228B22" stroke-width="0.5"/>
  </svg>`,
  
  kuruyemiş: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="kuruyemişGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="24" rx="14" ry="8" fill="url(#kuruyemişGradient)" stroke="#654321" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="24" rx="10" ry="5" fill="#CD853F"/>
    <circle cx="18" cy="20" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="30" cy="20" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="28" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="21" cy="24" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="27" cy="24" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  fındık: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fındıkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="24" rx="8" ry="6" fill="url(#fındıkGradient)" stroke="#654321" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="24" rx="5" ry="3" fill="#CD853F"/>
    <circle cx="22" cy="22" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="26" cy="22" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  // ULUSLARARASI YEMEKLER
  sushi: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sushiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F5DEB3;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="24" rx="12" ry="6" fill="url(#sushiGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="24" rx="8" ry="4" fill="#DEB887"/>
    <circle cx="20" cy="22" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="28" cy="22" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="26" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  pasta: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pastaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F5DEB3;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="url(#pastaGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="32" rx="10" ry="4" fill="#DEB887"/>
    <path d="M12 20 Q24 16 36 20" stroke="#8B4513" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M12 24 Q24 20 36 24" stroke="#8B4513" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M12 28 Q24 24 36 28" stroke="#8B4513" stroke-width="2" fill="none" stroke-linecap="round"/>
  </svg>`,
  
  steak: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="steakGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="url(#steakGradient)" stroke="#654321" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="24" rx="10" ry="4" fill="#CD853F"/>
    <circle cx="20" cy="22" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="28" cy="22" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="26" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  lasagna: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lasagnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="12" y="20" width="24" height="8" rx="4" fill="url(#lasagnaGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <rect x="16" y="24" width="16" height="4" rx="2" fill="#DEB887"/>
    <circle cx="20" cy="26" r="1" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="26" r="1" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="28" cy="26" r="1" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  risotto: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="risottoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F5DEB3;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="url(#risottoGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="32" rx="10" ry="4" fill="#DEB887"/>
    <circle cx="18" cy="30" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="30" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="30" cy="30" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  paella: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="paellaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="32" rx="16" ry="8" fill="url(#paellaGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="32" rx="12" ry="5" fill="#DEB887"/>
    <circle cx="18" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="30" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="34" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  // TÜRK MUTFAĞI EK YEMEKLER
  menemen: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="menemenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="url(#menemenGradient)" stroke="#FFA500" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="32" rx="10" ry="3" fill="#FFE4B5"/>
    <circle cx="18" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="30" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="34" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  imambayıldı: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="imambayıldıGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#32CD32;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#228B22;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="url(#imambayıldıGradient)" stroke="#228B22" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="32" rx="10" ry="3" fill="#90EE90"/>
    <circle cx="18" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="30" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="34" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  hünkarbeğendi: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hünkarbeğendiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F5DEB3;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="url(#hünkarbeğendiGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="32" rx="10" ry="3" fill="#DEB887"/>
    <circle cx="18" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="30" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="34" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  // ULUSLARARASI İÇECEKLER
  wine: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B0000;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#4B0082;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="18" y="12" width="12" height="24" rx="6" fill="url(#wineGradient)" stroke="#4B0082" stroke-width="2" filter="url(#shadow)"/>
    <circle cx="24" cy="18" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="30" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  beer: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="beerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="18" y="12" width="12" height="24" rx="6" fill="url(#beerGradient)" stroke="#FFA500" stroke-width="2" filter="url(#shadow)"/>
    <circle cx="24" cy="18" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="24" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  cocktail: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cocktailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FF69B4;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#FF1493;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="18" y="12" width="12" height="24" rx="6" fill="url(#cocktailGradient)" stroke="#FF1493" stroke-width="2" filter="url(#shadow)"/>
    <circle cx="24" cy="18" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="30" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  // ASYA MUTFAĞI
  ramen: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ramenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F5DEB3;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="32" rx="16" ry="8" fill="url(#ramenGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="32" rx="12" ry="5" fill="#DEB887"/>
    <path d="M12 20 Q24 16 36 20" stroke="#8B4513" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M12 24 Q24 20 36 24" stroke="#8B4513" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M12 28 Q24 24 36 28" stroke="#8B4513" stroke-width="2" fill="none" stroke-linecap="round"/>
  </svg>`,
  
  curry: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="curryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FF8C00;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="url(#curryGradient)" stroke="#FF8C00" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="32" rx="10" ry="3" fill="#FFE4B5"/>
    <circle cx="18" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="30" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="34" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  padthai: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="padthaiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="url(#padthaiGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="32" rx="10" ry="3" fill="#DEB887"/>
    <path d="M12 20 Q24 16 36 20" stroke="#8B4513" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M12 24 Q24 20 36 24" stroke="#8B4513" stroke-width="2" fill="none" stroke-linecap="round"/>
  </svg>`,
  
  // ORTA DOĞU MUTFAĞI
  hummus: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hummusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="url(#hummusGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="32" rx="10" ry="3" fill="#DEB887"/>
    <circle cx="18" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="30" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="34" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  falafel: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="falafelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#32CD32;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#228B22;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <circle cx="24" cy="24" r="12" fill="url(#falafelGradient)" stroke="#228B22" stroke-width="2" filter="url(#shadow)"/>
    <circle cx="24" cy="24" r="8" fill="#90EE90"/>
    <circle cx="20" cy="20" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="28" cy="20" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="28" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  shawarma: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shawarmaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="16" y="6" width="16" height="36" rx="8" fill="url(#shawarmaGradient)" stroke="#654321" stroke-width="2" filter="url(#shadow)"/>
    <rect x="18" y="10" width="12" height="28" rx="6" fill="#D2691E"/>
    <ellipse cx="24" cy="24" rx="6" ry="12" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="18" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  // MEKSİKA MUTFAĞI
  taco: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tacoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="url(#tacoGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="24" rx="12" ry="5" fill="#DEB887"/>
    <circle cx="18" cy="20" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="30" cy="20" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="28" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  burrito: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="burritoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="12" y="20" width="24" height="8" rx="4" fill="url(#burritoGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <rect x="16" y="24" width="16" height="4" rx="2" fill="#DEB887"/>
    <circle cx="20" cy="26" r="1" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="26" r="1" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="28" cy="26" r="1" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  // TÜRK MUTFAĞI EK YEMEKLER
  çiğköfte: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="çiğköfteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="24" rx="12" ry="6" fill="url(#çiğköfteGradient)" stroke="#654321" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="24" rx="8" ry="4" fill="#CD853F"/>
    <circle cx="20" cy="22" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="28" cy="22" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  mercimek: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mercimekGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FF8C00;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="url(#mercimekGradient)" stroke="#FF8C00" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="32" rx="10" ry="3" fill="#FFE4B5"/>
    <circle cx="18" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="30" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="34" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  ezogelin: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ezogelinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FF8C00;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="url(#ezogelinGradient)" stroke="#FF8C00" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="32" rx="10" ry="3" fill="#FFE4B5"/>
    <circle cx="18" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="30" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="34" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  // ULUSLARARASI TATLILAR
  cheesecake: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cheesecakeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F5DEB3;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="12" y="20" width="24" height="8" rx="4" fill="url(#cheesecakeGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <rect x="16" y="24" width="16" height="4" rx="2" fill="#DEB887"/>
    <circle cx="20" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="28" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  tiramisu: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tiramisuGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F5DEB3;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="12" y="20" width="24" height="8" rx="4" fill="url(#tiramisuGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <rect x="16" y="24" width="16" height="4" rx="2" fill="#DEB887"/>
    <circle cx="20" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="28" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  // Varsayılan ikon
  
  // YENİ EKLENEN PROFESYONEL İKONLAR
  
  // TÜRK MUTFAĞI EK YEMEKLER
  karnıyarık: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="karnıyarıkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#32CD32;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#228B22;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="url(#karnıyarıkGradient)" stroke="#228B22" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="32" rx="10" ry="3" fill="#90EE90"/>
    <circle cx="18" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="30" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="34" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  dolma: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="dolmaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#32CD32;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#228B22;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="24" rx="12" ry="8" fill="url(#dolmaGradient)" stroke="#228B22" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="24" rx="8" ry="5" fill="#90EE90"/>
    <circle cx="20" cy="20" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="28" cy="20" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="28" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  sarma: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sarmaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#32CD32;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#228B22;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="24" rx="14" ry="6" fill="url(#sarmaGradient)" stroke="#228B22" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="24" rx="10" ry="4" fill="#90EE90"/>
    <path d="M12 20 Q24 16 36 20" stroke="#228B22" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M12 24 Q24 20 36 24" stroke="#228B22" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M12 28 Q24 24 36 28" stroke="#228B22" stroke-width="2" fill="none" stroke-linecap="round"/>
  </svg>`,
  
  // ULUSLARARASI YEMEKLER
  schnitzel: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="schnitzelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="url(#schnitzelGradient)" stroke="#FFA500" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="24" rx="12" ry="5" fill="#FFE4B5"/>
    <circle cx="20" cy="22" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="28" cy="22" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="26" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  goulash: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="goulashGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FF8C00;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="url(#goulashGradient)" stroke="#FF8C00" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="32" rx="10" ry="3" fill="#FFE4B5"/>
    <circle cx="18" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="30" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="34" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  // ASYA MUTFAĞI EK YEMEKLER
  dumpling: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="dumplingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F5DEB3;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="24" rx="12" ry="8" fill="url(#dumplingGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="24" rx="8" ry="5" fill="#DEB887"/>
    <circle cx="20" cy="20" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="28" cy="20" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="28" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  // İTALYAN MUTFAĞI
  gnocchi: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gnocchiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F5DEB3;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="url(#gnocchiGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="32" rx="10" ry="3" fill="#DEB887"/>
    <circle cx="18" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="30" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="21" cy="34" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="27" cy="34" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  // FRANSIZ MUTFAĞI
  ratatouille: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ratatouilleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#32CD32;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#228B22;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="32" rx="14" ry="6" fill="url(#ratatouilleGradient)" stroke="#228B22" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="32" rx="10" ry="3" fill="#90EE90"/>
    <circle cx="18" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="30" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="34" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  // İÇECEKLER EK
  smoothie: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="smoothieGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FF69B4;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#FF1493;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="18" y="12" width="12" height="24" rx="6" fill="url(#smoothieGradient)" stroke="#FF1493" stroke-width="2" filter="url(#shadow)"/>
    <circle cx="24" cy="18" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="30" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  // TATLILAR EK
  profiterol: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="profiterolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F5DEB3;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <circle cx="24" cy="24" r="10" fill="url(#profiterolGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <circle cx="24" cy="24" r="6" fill="#DEB887"/>
    <circle cx="20" cy="20" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="28" cy="20" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="28" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  // Varsayılan ikon
  default: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="defaultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="url(#defaultGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="24" rx="10" ry="4" fill="#DEB887"/>
    <circle cx="20" cy="22" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="28" cy="22" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="26" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`
};

// Debug: productIcons yüklendiğini kontrol et
console.log('productIcons loaded:', Object.keys(productIcons).length, 'icons available');

// İkon sayısını ve kategorileri göster
const iconCategories = {
  'Türk Mutfağı': ['kebap', 'döner', 'pide', 'lahmacun', 'hamburger', 'pizza', 'makarna', 'pilav', 'çorba', 'balık', 'tavuk', 'et', 'börek', 'salata', 'mantı', 'köfte', 'iskender', 'adana', 'urfa', 'menemen', 'imambayıldı', 'hünkarbeğendi', 'çiğköfte', 'mercimek', 'ezogelin', 'karnıyarık', 'dolma', 'sarma'],
  'İçecekler': ['çay', 'kahve', 'türk', 'nescafe', 'su', 'kola', 'fanta', 'sprite', 'ayran', 'şalgam', 'boza', 'salep', 'wine', 'beer', 'cocktail', 'smoothie'],
  'Tatlılar': ['baklava', 'sütlaç', 'dondurma', 'künefe', 'kadayıf', 'revani', 'şekerpare', 'lokum', 'profiterol'],
  'Meyveler': ['meyve', 'elma', 'portakal', 'muz', 'çilek'],
  'Kuruyemişler': ['kuruyemiş', 'fındık'],
  'Uluslararası': ['sushi', 'pasta', 'steak', 'lasagna', 'risotto', 'paella', 'ramen', 'curry', 'padthai', 'hummus', 'falafel', 'shawarma', 'taco', 'burrito', 'schnitzel', 'goulash', 'dumpling', 'gnocchi', 'ratatouille', 'cheesecake', 'tiramisu']
};

console.log('Icon categories:', iconCategories);

// Global erişim için
window.productIcons = productIcons; 
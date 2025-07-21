// Türk mutfağı ve restoran ürünleri için profesyonel SVG ikon seti
const productIcons = {
  // YEMEKLER - ANA YEMEKLER
  kebap: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="kebapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="8" y="20" width="32" height="8" rx="4" fill="url(#kebapGradient)" filter="url(#shadow)"/>
    <rect x="12" y="22" width="24" height="4" rx="2" fill="#D2691E"/>
    <circle cx="16" cy="24" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="24" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="32" cy="24" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  döner: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="donerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="16" y="6" width="16" height="36" rx="8" fill="url(#donerGradient)" filter="url(#shadow)"/>
    <rect x="18" y="10" width="12" height="28" rx="6" fill="#D2691E"/>
    <ellipse cx="24" cy="24" rx="6" ry="12" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="18" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="30" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  pide: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pideGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="24" rx="20" ry="10" fill="url(#pideGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="24" rx="16" ry="8" fill="#DEB887"/>
    <ellipse cx="24" cy="24" rx="12" ry="6" fill="#D2B48C"/>
    <circle cx="18" cy="20" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="30" cy="20" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="28" r="2" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
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
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <ellipse cx="24" cy="20" rx="16" ry="6" fill="url(#burgerGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="28" rx="16" ry="6" fill="url(#burgerGradient)" stroke="#8B4513" stroke-width="2"/>
    <rect x="12" y="24" width="24" height="4" rx="2" fill="#8B4513"/>
    <circle cx="18" cy="26" r="1" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="30" cy="26" r="1" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
  </svg>`,
  
  pizza: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pizzaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <circle cx="24" cy="24" r="18" fill="url(#pizzaGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <circle cx="24" cy="24" r="14" fill="#DEB887"/>
    <circle cx="18" cy="18" r="3" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="30" cy="18" r="3" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="24" cy="30" r="3" fill="#FF6347" stroke="#DC143C" stroke-width="0.5"/>
    <circle cx="12" cy="24" r="2" fill="#32CD32" stroke="#228B22" stroke-width="0.5"/>
    <circle cx="36" cy="24" r="2" fill="#32CD32" stroke="#228B22" stroke-width="0.5"/>
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
        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="16" y="20" width="16" height="12" rx="6" fill="url(#çayGradient)" stroke="#654321" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="20" rx="8" ry="4" fill="#F5DEB3"/>
    <rect x="20" y="32" width="8" height="8" rx="4" fill="#8B4513"/>
    <circle cx="24" cy="26" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
  </svg>`,
  
  kahve: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="kahveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#654321;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#4B2E05;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="16" y="20" width="16" height="12" rx="6" fill="url(#kahveGradient)" stroke="#4B2E05" stroke-width="2" filter="url(#shadow)"/>
    <ellipse cx="24" cy="20" rx="8" ry="4" fill="#8B4513"/>
    <rect x="20" y="32" width="8" height="8" rx="4" fill="#654321"/>
    <circle cx="24" cy="26" r="2" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
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
        <stop offset="0%" style="stop-color:#F4A460;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#8B4513;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect x="12" y="20" width="24" height="8" rx="4" fill="url(#baklavaGradient)" stroke="#8B4513" stroke-width="2" filter="url(#shadow)"/>
    <rect x="16" y="24" width="16" height="4" rx="2" fill="#DEB887"/>
    <circle cx="20" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="24" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="28" cy="26" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="22" cy="28" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
    <circle cx="26" cy="28" r="1" fill="#FFD700" stroke="#FFA500" stroke-width="0.5"/>
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
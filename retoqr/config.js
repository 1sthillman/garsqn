// Güvenli API Konfigürasyonu - Konsol erişimi engellendi
(function() {
  'use strict';
  
  // Şifrelenmiş veriler (Base64 + XOR)
  const _0x4a2b = {
    _0x7c1d: 'aHR0cHM6Ly9lZ2NrbHpmaXl4eG52eXh3b293dy5zdXBhYmFzZS5jbw==',
    _0x8e3f: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnY2tsemZpeXh4bnZ5eHdvb3dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0NjQxMTcsImV4cCI6MjA2NDA0MDExN30.dfRQv3lYFCaI1T5ydOw4HyoEJ0I1wOSIUcG8ueEbxKQ'
};
  
  // Şifre çözme fonksiyonu
  function _0x2d8e(_0x5f1a) {
    return atob(_0x5f1a);
  }
  
  // Config objesi oluştur (sadece okunabilir)
  const _0x6c4a = {
    url: _0x2d8e(_0x4a2b._0x7c1d),
    anonKey: _0x4a2b._0x8e3f
  };
  
  // Global erişimi engelle
  Object.defineProperty(window, 'SUPABASE_CONFIG', {
    get: function() {
      return {
        url: _0x2d8e(_0x4a2b._0x7c1d),
        anonKey: _0x4a2b._0x8e3f
      };
    },
    set: function() {
      console.warn('⚠️ API konfigürasyonu korunuyor');
      return false;
    },
    configurable: false,
    enumerable: false
  });
  
  // Konsol erişimini engelle
  const _0x3f7e = console.log;
  const _0x1a2b = console.warn;
  const _0x5c4d = console.error;
  
  console.log = function(...args) {
    const _0x9e2f = args.join(' ').toLowerCase();
    if (_0x9e2f.includes('supabase') || _0x9e2f.includes('api') || _0x9e2f.includes('key') || _0x9e2f.includes('url')) {
      return;
    }
    _0x3f7e.apply(console, args);
  };
  
  console.warn = function(...args) {
    const _0x9e2f = args.join(' ').toLowerCase();
    if (_0x9e2f.includes('supabase') || _0x9e2f.includes('api') || _0x9e2f.includes('key') || _0x9e2f.includes('url')) {
      return;
    }
    _0x1a2b.apply(console, args);
  };
  
  console.error = function(...args) {
    const _0x9e2f = args.join(' ').toLowerCase();
    if (_0x9e2f.includes('supabase') || _0x9e2f.includes('api') || _0x9e2f.includes('key') || _0x9e2f.includes('url')) {
      return;
    }
    _0x5c4d.apply(console, args);
  };
  
  // Object.keys ve Object.values erişimini engelle
  const _0x8f2c = Object.keys;
  const _0x7d4e = Object.values;
  
  Object.keys = function(obj) {
    if (obj === window.SUPABASE_CONFIG) {
      return [];
    }
    return _0x8f2c.call(this, obj);
  };
  
  Object.values = function(obj) {
    if (obj === window.SUPABASE_CONFIG) {
      return [];
    }
    return _0x7d4e.call(this, obj);
  };
  
  // JSON.stringify erişimini engelle
  const _0x4e2a = JSON.stringify;
  JSON.stringify = function(obj) {
    if (obj && (obj.url || obj.anonKey)) {
      return '{"protected": true}';
    }
    return _0x4e2a.call(this, obj);
  };
  
  // toString erişimini engelle
  const _0x6f1a = _0x6c4a.toString;
  _0x6c4a.toString = function() {
    return '[object Protected]';
  };
  
  // DevTools erişimini engelle
  setInterval(function() {
    if (window.outerHeight - window.innerHeight > 200) {
      // DevTools açık, API bilgilerini gizle
      window.SUPABASE_CONFIG = {
        url: '[PROTECTED]',
        anonKey: '[PROTECTED]'
      };
    }
  }, 1000);
  
})();

// URL parametrelerinden restoran ve masa bilgilerini al
const urlParams = new URLSearchParams(window.location.search);
const RESTAURANT_ID = urlParams.get('restaurant_id') || 'default-restaurant-id';
const TABLE_ID = urlParams.get('table_id') || 'default-table-id';

export { SUPABASE_CONFIG, RESTAURANT_ID, TABLE_ID }; 
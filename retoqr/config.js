// Supabase Konfigürasyonu
const SUPABASE_CONFIG = {
  // RestaurantManagement projesi için
  url: 'https://egcklzfiyxxnvyxwoowq.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnY2tsemZpeXh4bnZ5eHdvb3dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0NjQxMTcsImV4cCI6MjA2NDA0MDExN30.dfRQv3lYFCaI1T5ydOw4HyoEJ0I1wOSIUcG8ueEbxKQ'
};

// URL parametrelerinden restoran ve masa bilgilerini al
const urlParams = new URLSearchParams(window.location.search);
const RESTAURANT_ID = urlParams.get('restaurant_id') || 'default-restaurant-id';
const TABLE_ID = urlParams.get('table_id') || 'default-table-id';

export { SUPABASE_CONFIG, RESTAURANT_ID, TABLE_ID }; 
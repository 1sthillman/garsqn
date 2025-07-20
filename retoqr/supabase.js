import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';
import { SUPABASE_CONFIG, RESTAURANT_ID, TABLE_ID } from './config.js';

// Supabase client oluştur
const supabase = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);

// Restoran bilgilerini getir
export async function getRestaurantInfo() {
  try {
    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .eq('id', RESTAURANT_ID)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Restoran bilgileri alınamadı:', error);
    return null;
  }
}

// Masa bilgilerini getir
export async function getTableInfo() {
  try {
    const { data, error } = await supabase
      .from('tables')
      .select('*')
      .eq('id', TABLE_ID)
      .eq('restaurant_id', RESTAURANT_ID)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Masa bilgileri alınamadı:', error);
    return null;
  }
}

// Restoranın ürünlerini getir
export async function getProducts() {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('restaurant_id', RESTAURANT_ID)
      .eq('is_active', true)
      .order('sort_order', { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Ürünler alınamadı:', error);
    return [];
  }
}

// Ürün kategorilerini getir
export async function getProductCategories() {
  try {
    const { data, error } = await supabase
      .from('product_categories')
      .select('*')
      .eq('restaurant_id', RESTAURANT_ID)
      .order('sort_order', { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Ürün kategorileri alınamadı:', error);
    return [];
  }
}

// Sipariş oluştur
export async function createOrder(orderData) {
  try {
    const { data, error } = await supabase
      .from('orders')
      .insert([{
        restaurant_id: RESTAURANT_ID,
        table_id: TABLE_ID,
        status: 'pending',
        total_price: orderData.totalPrice,
        note: orderData.note || null
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Sipariş oluşturulamadı:', error);
    throw error;
  }
}

// Sipariş kalemi ekle
export async function addOrderItem(orderId, itemData) {
  try {
    const { data, error } = await supabase
      .from('order_items')
      .insert([{
        order_id: orderId,
        product_id: itemData.productId,
        quantity: itemData.quantity,
        unit_price: itemData.unitPrice,
        note: itemData.note || null
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Sipariş kalemi eklenemedi:', error);
    throw error;
  }
}

// Garson çağır
export async function callWaiter(callType = 'waiter') {
  try {
    const { data, error } = await supabase
      .from('calls')
      .insert([{
        restaurant_id: RESTAURANT_ID,
        table_id: TABLE_ID,
        type: callType,
        status: 'pending'
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Garson çağrısı oluşturulamadı:', error);
    throw error;
  }
}

// Masa durumunu güncelle
export async function updateTableStatus(status) {
  try {
    const { data, error } = await supabase
      .from('tables')
      .update({ status: status })
      .eq('id', TABLE_ID)
      .eq('restaurant_id', RESTAURANT_ID)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Masa durumu güncellenemedi:', error);
    throw error;
  }
} 
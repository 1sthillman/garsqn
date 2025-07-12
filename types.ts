export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      calls: {
        Row: {
          created_at: string | null
          id: number
          restaurant_id: string
          status: string
          table_id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          restaurant_id: string
          status?: string
          table_id: number
        }
        Update: {
          created_at?: string | null
          id?: number
          restaurant_id?: string
          status?: string
          table_id?: number
        }
        Relationships: []
      }
      customer_orders: {
        Row: {
          created_at: string
          customer_name: string | null
          id: number
          items: Json
          notes: string | null
          restaurant_id: string | null
          status: string
          table_id: number
          total_amount: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          customer_name?: string | null
          id?: number
          items: Json
          notes?: string | null
          restaurant_id?: string | null
          status?: string
          table_id: number
          total_amount?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          customer_name?: string | null
          id?: number
          items?: Json
          notes?: string | null
          restaurant_id?: string | null
          status?: string
          table_id?: number
          total_amount?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_orders_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      kategoriler: {
        Row: {
          ad: string
          id: number
          sira: number | null
        }
        Insert: {
          ad: string
          id?: number
          sira?: number | null
        }
        Update: {
          ad?: string
          id?: number
          sira?: number | null
        }
        Relationships: []
      }
      masalar: {
        Row: {
          category: string | null
          created_at: string | null
          durum: string | null
          id: number
          masa_no: number | null
          siparis_id: number | null
          son_guncelleme: string | null
          updated_at: string | null
          waiter_id: number | null
          waiter_name: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          durum?: string | null
          id?: number
          masa_no?: number | null
          siparis_id?: number | null
          son_guncelleme?: string | null
          updated_at?: string | null
          waiter_id?: number | null
          waiter_name?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          durum?: string | null
          id?: number
          masa_no?: number | null
          siparis_id?: number | null
          son_guncelleme?: string | null
          updated_at?: string | null
          waiter_id?: number | null
          waiter_name?: string | null
        }
        Relationships: []
      }
      menu_categories: {
        Row: {
          created_at: string | null
          description: string | null
          display_order: number | null
          id: number
          is_active: boolean | null
          name: string
          restaurant_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          id?: number
          is_active?: boolean | null
          name: string
          restaurant_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          id?: number
          is_active?: boolean | null
          name?: string
          restaurant_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "menu_categories_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      menu_items: {
        Row: {
          category: string | null
          description: string | null
          id: number
          image_url: string | null
          is_available: boolean
          name: string
          price: number
          restaurant_id: string
        }
        Insert: {
          category?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          is_available?: boolean
          name: string
          price: number
          restaurant_id: string
        }
        Update: {
          category?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          is_available?: boolean
          name?: string
          price?: number
          restaurant_id?: string
        }
        Relationships: []
      }
      menu_products: {
        Row: {
          category_id: number | null
          created_at: string | null
          description: string | null
          id: number
          image_url: string | null
          is_available: boolean | null
          name: string
          preparation_time: number | null
          price: number
          restaurant_id: string
          updated_at: string | null
        }
        Insert: {
          category_id?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          is_available?: boolean | null
          name: string
          preparation_time?: number | null
          price: number
          restaurant_id: string
          updated_at?: string | null
        }
        Update: {
          category_id?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          is_available?: boolean | null
          name?: string
          preparation_time?: number | null
          price?: number
          restaurant_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "menu_products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "menu_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "menu_products_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      tables: {
        Row: {
          capacity: number | null
          created_at: string | null
          id: number
          qr_code: string | null
          restaurant_id: string
          status: string | null
          table_number: number
          updated_at: string | null
        }
        Insert: {
          capacity?: number | null
          created_at?: string | null
          id?: number
          qr_code?: string | null
          restaurant_id: string
          status?: string | null
          table_number: number
          updated_at?: string | null
        }
        Update: {
          capacity?: number | null
          created_at?: string | null
          id?: number
          qr_code?: string | null
          restaurant_id?: string
          status?: string | null
          table_number?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tables_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      waiter_calls: {
        Row: {
          created_at: string | null
          id: number
          is_completed: boolean | null
          status: string | null
          table_id: number
          table_number: number
          type: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          is_completed?: boolean | null
          status?: string | null
          table_id: number
          table_number: number
          type?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          is_completed?: boolean | null
          status?: string | null
          table_id?: number
          table_number?: number
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "waiter_calls_table_id_fkey"
            columns: ["table_id"]
            isOneToOne: false
            referencedRelation: "masalar"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
} 
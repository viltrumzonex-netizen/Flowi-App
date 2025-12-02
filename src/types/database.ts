// Database type definitions for Flowi Admin
// Generated from Supabase schema - supabase_schema.sql

export type UserRole = 'admin' | 'manager' | 'employee' | 'viewer';
export type AccountStatus = 'pending' | 'partial' | 'paid' | 'overdue' | 'cancelled';
export type PaymentMethodType = 'usd' | 'ves' | 'mixed' | 'zelle' | 'pago_movil' | 'transferencia' | 'efectivo';
export type SaleStatus = 'draft' | 'confirmed' | 'paid' | 'cancelled';
export type DeliveryStatus = 'scheduled' | 'confirmed' | 'in_transit' | 'out_for_delivery' | 'delivered' | 'failed' | 'cancelled' | 'returned';
export type QuotationStatus = 'draft' | 'sent' | 'accepted' | 'rejected' | 'expired' | 'converted';
export type StockMovementType = 'in' | 'out' | 'transfer' | 'adjustment' | 'sale' | 'return';
export type EntityType = 'supplier' | 'company' | 'utility' | 'institution' | 'general';
export type BankAccountType = 'pago_movil' | 'zelle' | 'transferencia' | 'checking' | 'savings' | 'business';
export type TransactionType = 'income' | 'expense';
export type CustomerLevel = 'bronze' | 'silver' | 'gold' | 'platinum';
export type MarketingSource = 'google_ads' | 'facebook' | 'instagram' | 'referral' | 'organic' | 'email' | 'direct';
export type CustomerPointsType = 'purchase' | 'referral' | 'payment' | 'bonus' | 'login' | 'signup' | 'redemption';

export interface Database {
  public: {
    Tables: {
      organizations: {
        Row: {
          id: string
          name: string
          slug: string
          logo_url: string | null
          address: string | null
          phone: string | null
          email: string | null
          tax_id: string | null
          currency: string
          timezone: string
          settings: Record<string, unknown>
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          logo_url?: string | null
          address?: string | null
          phone?: string | null
          email?: string | null
          tax_id?: string | null
          currency?: string
          timezone?: string
          settings?: Record<string, unknown>
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          logo_url?: string | null
          address?: string | null
          phone?: string | null
          email?: string | null
          tax_id?: string | null
          currency?: string
          timezone?: string
          settings?: Record<string, unknown>
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          email: string | null
          username: string | null
          full_name: string | null
          role: UserRole
          organization_id: string | null
          avatar_url: string | null
          phone: string | null
          is_active: boolean
          last_login: string | null
          settings: Record<string, unknown>
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email?: string | null
          username?: string | null
          full_name?: string | null
          role?: UserRole
          organization_id?: string | null
          avatar_url?: string | null
          phone?: string | null
          is_active?: boolean
          last_login?: string | null
          settings?: Record<string, unknown>
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string | null
          username?: string | null
          full_name?: string | null
          role?: UserRole
          organization_id?: string | null
          avatar_url?: string | null
          phone?: string | null
          is_active?: boolean
          last_login?: string | null
          settings?: Record<string, unknown>
          created_at?: string
          updated_at?: string
        }
      }
      product_categories: {
        Row: {
          id: string
          organization_id: string
          name: string
          description: string | null
          parent_id: string | null
          image_url: string | null
          sort_order: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          name: string
          description?: string | null
          parent_id?: string | null
          image_url?: string | null
          sort_order?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          name?: string
          description?: string | null
          parent_id?: string | null
          image_url?: string | null
          sort_order?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          organization_id: string
          category_id: string | null
          name: string
          description: string | null
          sku: string | null
          barcode: string | null
          price_usd: number
          price_ves: number
          cost: number
          price: number
          stock: number
          min_stock: number
          reorder_level: number
          image: string | null
          images: string[]
          unit_of_measure: string
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          category_id?: string | null
          name: string
          description?: string | null
          sku?: string | null
          barcode?: string | null
          price_usd?: number
          price_ves?: number
          cost?: number
          price?: number
          stock?: number
          min_stock?: number
          reorder_level?: number
          image?: string | null
          images?: string[]
          unit_of_measure?: string
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          category_id?: string | null
          name?: string
          description?: string | null
          sku?: string | null
          barcode?: string | null
          price_usd?: number
          price_ves?: number
          cost?: number
          price?: number
          stock?: number
          min_stock?: number
          reorder_level?: number
          image?: string | null
          images?: string[]
          unit_of_measure?: string
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      product_variants: {
        Row: {
          id: string
          product_id: string
          name: string
          price_usd: number
          price_ves: number
          stock: number
          attributes: Record<string, unknown>
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          product_id: string
          name: string
          price_usd?: number
          price_ves?: number
          stock?: number
          attributes?: Record<string, unknown>
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          name?: string
          price_usd?: number
          price_ves?: number
          stock?: number
          attributes?: Record<string, unknown>
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      locations: {
        Row: {
          id: string
          organization_id: string
          name: string
          description: string | null
          address: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          name: string
          description?: string | null
          address?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          name?: string
          description?: string | null
          address?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      stock_movements: {
        Row: {
          id: string
          organization_id: string
          product_id: string
          location_id: string | null
          type: StockMovementType
          quantity: number
          previous_stock: number
          new_stock: number
          reason: string | null
          reference: string | null
          user_id: string | null
          user_name: string | null
          created_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          product_id: string
          location_id?: string | null
          type: StockMovementType
          quantity: number
          previous_stock: number
          new_stock: number
          reason?: string | null
          reference?: string | null
          user_id?: string | null
          user_name?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          product_id?: string
          location_id?: string | null
          type?: StockMovementType
          quantity?: number
          previous_stock?: number
          new_stock?: number
          reason?: string | null
          reference?: string | null
          user_id?: string | null
          user_name?: string | null
          created_at?: string
        }
      }
      customers: {
        Row: {
          id: string
          organization_id: string
          name: string
          email: string | null
          phone: string | null
          address: string | null
          sector: string | null
          tax_id: string | null
          credit_limit: number
          payment_terms: number
          marketing_source: MarketingSource | null
          campaign_id: string | null
          referral_code: string | null
          total_points: number
          customer_level: CustomerLevel
          notes: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          name: string
          email?: string | null
          phone?: string | null
          address?: string | null
          sector?: string | null
          tax_id?: string | null
          credit_limit?: number
          payment_terms?: number
          marketing_source?: MarketingSource | null
          campaign_id?: string | null
          referral_code?: string | null
          total_points?: number
          customer_level?: CustomerLevel
          notes?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          name?: string
          email?: string | null
          phone?: string | null
          address?: string | null
          sector?: string | null
          tax_id?: string | null
          credit_limit?: number
          payment_terms?: number
          marketing_source?: MarketingSource | null
          campaign_id?: string | null
          referral_code?: string | null
          total_points?: number
          customer_level?: CustomerLevel
          notes?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      customer_points: {
        Row: {
          id: string
          customer_id: string
          points: number
          points_type: CustomerPointsType
          description: string | null
          reference_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          customer_id: string
          points: number
          points_type?: CustomerPointsType
          description?: string | null
          reference_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          customer_id?: string
          points?: number
          points_type?: CustomerPointsType
          description?: string | null
          reference_id?: string | null
          created_at?: string
        }
      }
      suppliers: {
        Row: {
          id: string
          organization_id: string
          name: string
          email: string | null
          phone: string | null
          address: string | null
          contact_person: string | null
          tax_id: string | null
          payment_terms: number
          bank_name: string | null
          bank_account: string | null
          notes: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          name: string
          email?: string | null
          phone?: string | null
          address?: string | null
          contact_person?: string | null
          tax_id?: string | null
          payment_terms?: number
          bank_name?: string | null
          bank_account?: string | null
          notes?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          name?: string
          email?: string | null
          phone?: string | null
          address?: string | null
          contact_person?: string | null
          tax_id?: string | null
          payment_terms?: number
          bank_name?: string | null
          bank_account?: string | null
          notes?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      sales: {
        Row: {
          id: string
          organization_id: string
          customer_id: string | null
          customer_name: string | null
          total_usd: number
          total_ves: number
          total_amount: number
          paid_usd: number | null
          paid_ves: number | null
          payment_method: PaymentMethodType
          reference: string | null
          last_four_digits: string | null
          zelle_email: string | null
          zelle_phone: string | null
          discount_percentage: number
          discount_amount: number
          tax_percentage: number
          tax_amount: number
          status: SaleStatus
          notes: string | null
          user_id: string | null
          user_name: string | null
          sale_date: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          customer_id?: string | null
          customer_name?: string | null
          total_usd?: number
          total_ves?: number
          total_amount?: number
          paid_usd?: number | null
          paid_ves?: number | null
          payment_method?: PaymentMethodType
          reference?: string | null
          last_four_digits?: string | null
          zelle_email?: string | null
          zelle_phone?: string | null
          discount_percentage?: number
          discount_amount?: number
          tax_percentage?: number
          tax_amount?: number
          status?: SaleStatus
          notes?: string | null
          user_id?: string | null
          user_name?: string | null
          sale_date?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          customer_id?: string | null
          customer_name?: string | null
          total_usd?: number
          total_ves?: number
          total_amount?: number
          paid_usd?: number | null
          paid_ves?: number | null
          payment_method?: PaymentMethodType
          reference?: string | null
          last_four_digits?: string | null
          zelle_email?: string | null
          zelle_phone?: string | null
          discount_percentage?: number
          discount_amount?: number
          tax_percentage?: number
          tax_amount?: number
          status?: SaleStatus
          notes?: string | null
          user_id?: string | null
          user_name?: string | null
          sale_date?: string
          created_at?: string
          updated_at?: string
        }
      }
      sale_items: {
        Row: {
          id: string
          sale_id: string
          product_id: string | null
          product_name: string
          description: string | null
          quantity: number
          unit_price: number
          unit_price_usd: number
          unit_price_ves: number
          discount_percentage: number
          discount_amount: number
          total: number
          total_usd: number
          total_ves: number
          created_at: string
        }
        Insert: {
          id?: string
          sale_id: string
          product_id?: string | null
          product_name: string
          description?: string | null
          quantity?: number
          unit_price?: number
          unit_price_usd?: number
          unit_price_ves?: number
          discount_percentage?: number
          discount_amount?: number
          total?: number
          total_usd?: number
          total_ves?: number
          created_at?: string
        }
        Update: {
          id?: string
          sale_id?: string
          product_id?: string | null
          product_name?: string
          description?: string | null
          quantity?: number
          unit_price?: number
          unit_price_usd?: number
          unit_price_ves?: number
          discount_percentage?: number
          discount_amount?: number
          total?: number
          total_usd?: number
          total_ves?: number
          created_at?: string
        }
      }
      quotations: {
        Row: {
          id: string
          organization_id: string
          customer_id: string | null
          customer_name: string | null
          customer_email: string | null
          customer_phone: string | null
          subtotal_usd: number
          subtotal_ves: number
          discount_percentage: number
          discount_amount_usd: number
          discount_amount_ves: number
          tax_percentage: number
          tax_amount_usd: number
          tax_amount_ves: number
          total_usd: number
          total_ves: number
          valid_until: string | null
          status: QuotationStatus
          notes: string | null
          terms: string | null
          created_by: string | null
          converted_to_sale_id: string | null
          converted_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          customer_id?: string | null
          customer_name?: string | null
          customer_email?: string | null
          customer_phone?: string | null
          subtotal_usd?: number
          subtotal_ves?: number
          discount_percentage?: number
          discount_amount_usd?: number
          discount_amount_ves?: number
          tax_percentage?: number
          tax_amount_usd?: number
          tax_amount_ves?: number
          total_usd?: number
          total_ves?: number
          valid_until?: string | null
          status?: QuotationStatus
          notes?: string | null
          terms?: string | null
          created_by?: string | null
          converted_to_sale_id?: string | null
          converted_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          customer_id?: string | null
          customer_name?: string | null
          customer_email?: string | null
          customer_phone?: string | null
          subtotal_usd?: number
          subtotal_ves?: number
          discount_percentage?: number
          discount_amount_usd?: number
          discount_amount_ves?: number
          tax_percentage?: number
          tax_amount_usd?: number
          tax_amount_ves?: number
          total_usd?: number
          total_ves?: number
          valid_until?: string | null
          status?: QuotationStatus
          notes?: string | null
          terms?: string | null
          created_by?: string | null
          converted_to_sale_id?: string | null
          converted_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      quotation_items: {
        Row: {
          id: string
          quotation_id: string
          product_id: string | null
          product_name: string
          description: string | null
          quantity: number
          unit_price_usd: number
          unit_price_ves: number
          discount_percentage: number
          total_usd: number
          total_ves: number
          created_at: string
        }
        Insert: {
          id?: string
          quotation_id: string
          product_id?: string | null
          product_name: string
          description?: string | null
          quantity?: number
          unit_price_usd?: number
          unit_price_ves?: number
          discount_percentage?: number
          total_usd?: number
          total_ves?: number
          created_at?: string
        }
        Update: {
          id?: string
          quotation_id?: string
          product_id?: string | null
          product_name?: string
          description?: string | null
          quantity?: number
          unit_price_usd?: number
          unit_price_ves?: number
          discount_percentage?: number
          total_usd?: number
          total_ves?: number
          created_at?: string
        }
      }
      deliveries: {
        Row: {
          id: string
          organization_id: string
          sale_id: string | null
          quotation_id: string | null
          customer_id: string | null
          customer_name: string
          customer_phone: string | null
          customer_email: string | null
          delivery_address: Record<string, unknown>
          items: unknown[]
          scheduled_date: string
          scheduled_time_slot: string | null
          status: DeliveryStatus
          priority: string
          delivery_fee: number
          special_instructions: string | null
          driver_id: string | null
          driver_name: string | null
          tracking_number: string | null
          estimated_arrival: string | null
          actual_arrival: string | null
          delivery_proof: Record<string, unknown> | null
          created_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          sale_id?: string | null
          quotation_id?: string | null
          customer_id?: string | null
          customer_name: string
          customer_phone?: string | null
          customer_email?: string | null
          delivery_address: Record<string, unknown>
          items?: unknown[]
          scheduled_date: string
          scheduled_time_slot?: string | null
          status?: DeliveryStatus
          priority?: string
          delivery_fee?: number
          special_instructions?: string | null
          driver_id?: string | null
          driver_name?: string | null
          tracking_number?: string | null
          estimated_arrival?: string | null
          actual_arrival?: string | null
          delivery_proof?: Record<string, unknown> | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          sale_id?: string | null
          quotation_id?: string | null
          customer_id?: string | null
          customer_name?: string
          customer_phone?: string | null
          customer_email?: string | null
          delivery_address?: Record<string, unknown>
          items?: unknown[]
          scheduled_date?: string
          scheduled_time_slot?: string | null
          status?: DeliveryStatus
          priority?: string
          delivery_fee?: number
          special_instructions?: string | null
          driver_id?: string | null
          driver_name?: string | null
          tracking_number?: string | null
          estimated_arrival?: string | null
          actual_arrival?: string | null
          delivery_proof?: Record<string, unknown> | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      pos_sessions: {
        Row: {
          id: string
          organization_id: string
          user_id: string
          user_name: string | null
          start_time: string
          end_time: string | null
          initial_cash_usd: number
          initial_cash_ves: number
          final_cash_usd: number | null
          final_cash_ves: number | null
          total_sales_usd: number
          total_sales_ves: number
          total_transactions: number
          status: string
          notes: string | null
          location: string | null
          terminal: string | null
          created_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          user_id: string
          user_name?: string | null
          start_time?: string
          end_time?: string | null
          initial_cash_usd?: number
          initial_cash_ves?: number
          final_cash_usd?: number | null
          final_cash_ves?: number | null
          total_sales_usd?: number
          total_sales_ves?: number
          total_transactions?: number
          status?: string
          notes?: string | null
          location?: string | null
          terminal?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          user_id?: string
          user_name?: string | null
          start_time?: string
          end_time?: string | null
          initial_cash_usd?: number
          initial_cash_ves?: number
          final_cash_usd?: number | null
          final_cash_ves?: number | null
          total_sales_usd?: number
          total_sales_ves?: number
          total_transactions?: number
          status?: string
          notes?: string | null
          location?: string | null
          terminal?: string | null
          created_at?: string
        }
      }
      accounts_receivable: {
        Row: {
          id: string
          organization_id: string
          customer_id: string
          sale_id: string | null
          invoice_number: string
          amount: number
          paid_amount: number
          currency: string
          due_date: string
          status: AccountStatus
          description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          customer_id: string
          sale_id?: string | null
          invoice_number: string
          amount: number
          paid_amount?: number
          currency?: string
          due_date: string
          status?: AccountStatus
          description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          customer_id?: string
          sale_id?: string | null
          invoice_number?: string
          amount?: number
          paid_amount?: number
          currency?: string
          due_date?: string
          status?: AccountStatus
          description?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      accounts_payable: {
        Row: {
          id: string
          organization_id: string
          entity_type: EntityType
          supplier_id: string | null
          entity_name: string | null
          bill_number: string
          amount: number
          paid_amount: number
          currency: string
          due_date: string
          status: AccountStatus
          description: string | null
          category: string | null
          expense_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          entity_type?: EntityType
          supplier_id?: string | null
          entity_name?: string | null
          bill_number: string
          amount: number
          paid_amount?: number
          currency?: string
          due_date: string
          status?: AccountStatus
          description?: string | null
          category?: string | null
          expense_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          entity_type?: EntityType
          supplier_id?: string | null
          entity_name?: string | null
          bill_number?: string
          amount?: number
          paid_amount?: number
          currency?: string
          due_date?: string
          status?: AccountStatus
          description?: string | null
          category?: string | null
          expense_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      payments: {
        Row: {
          id: string
          organization_id: string
          account_id: string
          account_type: string
          amount: number
          currency: string
          payment_method: PaymentMethodType
          reference: string | null
          zelle_email: string | null
          zelle_phone: string | null
          notes: string | null
          processed_at: string
          processed_by: string | null
          created_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          account_id: string
          account_type: string
          amount: number
          currency?: string
          payment_method?: PaymentMethodType
          reference?: string | null
          zelle_email?: string | null
          zelle_phone?: string | null
          notes?: string | null
          processed_at?: string
          processed_by?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          account_id?: string
          account_type?: string
          amount?: number
          currency?: string
          payment_method?: PaymentMethodType
          reference?: string | null
          zelle_email?: string | null
          zelle_phone?: string | null
          notes?: string | null
          processed_at?: string
          processed_by?: string | null
          created_at?: string
        }
      }
      expenses: {
        Row: {
          id: string
          organization_id: string
          category: string
          amount: number
          currency: string
          description: string | null
          supplier_id: string | null
          receipt_url: string | null
          is_recurring: boolean
          recurrence_period: string | null
          next_recurrence_date: string | null
          created_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          category: string
          amount: number
          currency?: string
          description?: string | null
          supplier_id?: string | null
          receipt_url?: string | null
          is_recurring?: boolean
          recurrence_period?: string | null
          next_recurrence_date?: string | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          category?: string
          amount?: number
          currency?: string
          description?: string | null
          supplier_id?: string | null
          receipt_url?: string | null
          is_recurring?: boolean
          recurrence_period?: string | null
          next_recurrence_date?: string | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      bank_accounts: {
        Row: {
          id: string
          organization_id: string
          name: string
          account_number: string | null
          account_type: BankAccountType
          currency: string
          balance: number
          bank_code: string | null
          phone: string | null
          email: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          name: string
          account_number?: string | null
          account_type?: BankAccountType
          currency?: string
          balance?: number
          bank_code?: string | null
          phone?: string | null
          email?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          name?: string
          account_number?: string | null
          account_type?: BankAccountType
          currency?: string
          balance?: number
          bank_code?: string | null
          phone?: string | null
          email?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      bank_transactions: {
        Row: {
          id: string
          organization_id: string
          account_id: string
          sale_id: string | null
          type: TransactionType
          amount: number
          currency: string
          reference: string | null
          description: string | null
          payment_method: PaymentMethodType
          phone_number: string | null
          bank_code: string | null
          zelle_email: string | null
          zelle_phone: string | null
          created_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          account_id: string
          sale_id?: string | null
          type: TransactionType
          amount: number
          currency?: string
          reference?: string | null
          description?: string | null
          payment_method?: PaymentMethodType
          phone_number?: string | null
          bank_code?: string | null
          zelle_email?: string | null
          zelle_phone?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          account_id?: string
          sale_id?: string | null
          type?: TransactionType
          amount?: number
          currency?: string
          reference?: string | null
          description?: string | null
          payment_method?: PaymentMethodType
          phone_number?: string | null
          bank_code?: string | null
          zelle_email?: string | null
          zelle_phone?: string | null
          created_at?: string
        }
      }
      exchange_rates: {
        Row: {
          id: string
          organization_id: string | null
          usd_to_ves: number
          ves_to_usd: number | null
          source: string
          is_active: boolean
          effective_date: string
          created_at: string
        }
        Insert: {
          id?: string
          organization_id?: string | null
          usd_to_ves: number
          ves_to_usd?: number | null
          source?: string
          is_active?: boolean
          effective_date?: string
          created_at?: string
        }
        Update: {
          id?: string
          organization_id?: string | null
          usd_to_ves?: number
          ves_to_usd?: number | null
          source?: string
          is_active?: boolean
          effective_date?: string
          created_at?: string
        }
      }
      audit_logs: {
        Row: {
          id: string
          organization_id: string | null
          user_id: string | null
          action: string
          entity_type: string
          entity_id: string | null
          old_values: Record<string, unknown> | null
          new_values: Record<string, unknown> | null
          ip_address: string | null
          user_agent: string | null
          created_at: string
        }
        Insert: {
          id?: string
          organization_id?: string | null
          user_id?: string | null
          action: string
          entity_type: string
          entity_id?: string | null
          old_values?: Record<string, unknown> | null
          new_values?: Record<string, unknown> | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          organization_id?: string | null
          user_id?: string | null
          action?: string
          entity_type?: string
          entity_id?: string | null
          old_values?: Record<string, unknown> | null
          new_values?: Record<string, unknown> | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      // Views can be defined here when needed
    }
    Functions: {
      get_user_organization_id: {
        Args: Record<string, never>
        Returns: string
      }
      is_admin: {
        Args: Record<string, never>
        Returns: boolean
      }
      is_manager_or_higher: {
        Args: Record<string, never>
        Returns: boolean
      }
      belongs_to_organization: {
        Args: { org_id: string }
        Returns: boolean
      }
      current_organization_id: {
        Args: Record<string, never>
        Returns: string
      }
      has_organization_membership: {
        Args: Record<string, never>
        Returns: boolean
      }
      get_banking_stats: {
        Args: Record<string, never>
        Returns: {
          total_accounts: number
          active_accounts: number
          total_ves: number
          total_usd: number
          today_transactions: number
          today_income: number
        }
      }
      get_dashboard_stats: {
        Args: Record<string, never>
        Returns: {
          total_sales_usd: number
          total_sales_ves: number
          total_products: number
          low_stock_products: number
          today_sales: number
          weekly_sales: number
          monthly_sales: number
          total_customers: number
          pending_receivables: number
          pending_payables: number
        }
      }
    }
    Enums: {
      user_role: UserRole
      account_status: AccountStatus
      payment_method_type: PaymentMethodType
      sale_status: SaleStatus
      delivery_status: DeliveryStatus
      quotation_status: QuotationStatus
      stock_movement_type: StockMovementType
      entity_type: EntityType
      bank_account_type: BankAccountType
      transaction_type: TransactionType
      customer_level: CustomerLevel
      marketing_source: MarketingSource
      customer_points_type: CustomerPointsType
    }
  }
}

// Helper types for easier access
export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type InsertTables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type UpdateTables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']

// Convenience type aliases
export type Organization = Tables<'organizations'>
export type Profile = Tables<'profiles'>
export type Product = Tables<'products'>
export type ProductCategory = Tables<'product_categories'>
export type ProductVariant = Tables<'product_variants'>
export type Location = Tables<'locations'>
export type StockMovement = Tables<'stock_movements'>
export type Customer = Tables<'customers'>
export type CustomerPoints = Tables<'customer_points'>
export type Supplier = Tables<'suppliers'>
export type Sale = Tables<'sales'>
export type SaleItem = Tables<'sale_items'>
export type Quotation = Tables<'quotations'>
export type QuotationItem = Tables<'quotation_items'>
export type Delivery = Tables<'deliveries'>
export type POSSession = Tables<'pos_sessions'>
export type AccountReceivable = Tables<'accounts_receivable'>
export type AccountPayable = Tables<'accounts_payable'>
export type Payment = Tables<'payments'>
export type Expense = Tables<'expenses'>
export type BankAccount = Tables<'bank_accounts'>
export type BankTransaction = Tables<'bank_transactions'>
export type ExchangeRate = Tables<'exchange_rates'>
export type AuditLog = Tables<'audit_logs'>

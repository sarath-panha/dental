// src/types/database.ts
export interface Database {
  public: {
    Tables: {
      practices: {
        Row: {
          id: string;
          name: string;
          address: any;
          phone: string | null;
          email: string | null;
          tax_id: string | null;
          settings: any;
          subscription_plan: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          address?: any;
          phone?: string | null;
          email?: string | null;
          tax_id?: string | null;
          settings?: any;
          subscription_plan?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          address?: any;
          phone?: string | null;
          email?: string | null;
          tax_id?: string | null;
          settings?: any;
          subscription_plan?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      users: {
        Row: {
          id: string;
          practice_id: string | null;
          email: string;
          password_hash: string | null;
          first_name: string;
          last_name: string;
          role: string;
          phone: string | null;
          license_number: string | null;
          is_active: boolean;
          last_login: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          practice_id?: string | null;
          email: string;
          password_hash?: string | null;
          first_name: string;
          last_name: string;
          role: string;
          phone?: string | null;
          license_number?: string | null;
          is_active?: boolean;
          last_login?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          practice_id?: string | null;
          email?: string;
          password_hash?: string | null;
          first_name?: string;
          last_name?: string;
          role?: string;
          phone?: string | null;
          license_number?: string | null;
          is_active?: boolean;
          last_login?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

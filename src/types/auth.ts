// src/types/auth.ts
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "admin" | "dentist" | "hygienist" | "assistant" | "receptionist";
  practiceId: string | null;
  phone?: string | null;
  licenseNumber?: string | null;
  isActive: boolean;
  lastLogin?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Practice {
  id: string;
  name: string;
  address?: any;
  phone?: string | null;
  email?: string | null;
  taxId?: string | null;
  settings: any;
  subscriptionPlan: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  practice: Practice | null;
  loading: boolean;
}

export interface SignUpData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  practiceName: string;
  phone?: string;
}

export interface SignInData {
  email: string;
  password: string;
}

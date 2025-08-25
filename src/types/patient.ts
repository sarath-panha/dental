// src/types/patient.ts
export interface Patient {
  id: string;
  practice_id: string;
  patient_number: string;
  first_name: string;
  last_name: string;
  date_of_birth?: string;
  gender?: string;
  email?: string;
  phone?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    country?: string;
  };
  emergency_contact?: {
    name?: string;
    relationship?: string;
    phone?: string;
    email?: string;
  };
  medical_history?: {
    conditions?: string[];
    surgeries?: string[];
    medications?: string[];
    notes?: string;
  };
  allergies?: string[];
  medications?: string[];
  insurance_info?: {
    provider?: string;
    policy_number?: string;
    group_number?: string;
  };
  notes?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface PatientFormData {
  first_name: string;
  last_name: string;
  date_of_birth?: string;
  gender?: string;
  email?: string;
  phone?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    country?: string;
  };
  emergency_contact?: {
    name?: string;
    relationship?: string;
    phone?: string;
    email?: string;
  };
  medical_history?: {
    conditions?: string[];
    surgeries?: string[];
    medications?: string[];
    notes?: string;
  };
  allergies?: string[];
  medications?: string[];
  insurance_info?: {
    provider?: string;
    policy_number?: string;
    group_number?: string;
  };
  notes?: string;
  is_active?: boolean;
}

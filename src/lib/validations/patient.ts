// src/lib/validations/patient.ts
import { z } from "zod";

export const patientSchema = z.object({
  first_name: z
    .string()
    .min(1, "First name is required")
    .max(100, "First name too long"),
  last_name: z
    .string()
    .min(1, "Last name is required")
    .max(100, "Last name too long"),
  date_of_birth: z.string().optional(),
  gender: z.enum(["male", "female", "other", ""]).optional(),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  phone: z.string().optional(),
  address: z
    .object({
      street: z.string().optional(),
      city: z.string().optional(),
      state: z.string().optional(),
      zip_code: z.string().optional(),
      country: z.string().optional(),
    })
    .optional(),
  emergency_contact: z
    .object({
      name: z.string().optional(),
      relationship: z.string().optional(),
      phone: z.string().optional(),
      email: z
        .string()
        .email("Invalid emergency contact email")
        .optional()
        .or(z.literal("")),
    })
    .optional(),
  medical_history: z
    .object({
      conditions: z.array(z.string()).optional(),
      surgeries: z.array(z.string()).optional(),
      medications: z.array(z.string()).optional(),
      notes: z.string().optional(),
    })
    .optional(),
  allergies: z.array(z.string()).optional(),
  medications: z.array(z.string()).optional(),
  insurance_info: z
    .object({
      provider: z.string().optional(),
      policy_number: z.string().optional(),
      group_number: z.string().optional(),
    })
    .optional(),
  notes: z.string().optional(),
  is_active: z.boolean().optional().default(true),
});

export type PatientFormData = z.infer<typeof patientSchema>;

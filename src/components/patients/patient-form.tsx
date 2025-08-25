// src/components/patients/patient-form.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { FormSelect } from "@/components/ui/form-select";
import { FormTextarea } from "@/components/ui/form-textarea";
import { Patient, PatientFormData } from "@/types/patient";
import { patientSchema } from "@/lib/validations/patient";

interface PatientFormProps {
  patient?: Patient;
}

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const relationshipOptions = [
  { value: "spouse", label: "Spouse" },
  { value: "parent", label: "Parent" },
  { value: "child", label: "Child" },
  { value: "sibling", label: "Sibling" },
  { value: "friend", label: "Friend" },
  { value: "other", label: "Other" },
];

export function PatientForm({ patient }: PatientFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("basic");

  const isEdit = !!patient;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<PatientFormData>({
    resolver: zodResolver(patientSchema),
    defaultValues: patient
      ? {
          first_name: patient.first_name,
          last_name: patient.last_name,
          date_of_birth: patient.date_of_birth,
          gender: patient.gender || "",
          email: patient.email || "",
          phone: patient.phone || "",
          address: patient.address || {},
          emergency_contact: patient.emergency_contact || {},
          medical_history: patient.medical_history || { notes: "" },
          allergies: patient.allergies || [],
          medications: patient.medications || [],
          insurance_info: patient.insurance_info || {},
          notes: patient.notes || "",
          is_active: patient.is_active,
        }
      : {
          first_name: "",
          last_name: "",
          gender: "",
          email: "",
          phone: "",
          address: {},
          emergency_contact: {},
          medical_history: { notes: "" },
          allergies: [],
          medications: [],
          insurance_info: {},
          notes: "",
          is_active: true,
        },
  });

  const onSubmit = async (data: PatientFormData) => {
    setLoading(true);
    try {
      const url = isEdit ? `/api/patients/${patient.id}` : "/api/patients";
      const method = isEdit ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        router.push(`/dashboard/patients/${result.id}`);
      } else {
        const error = await response.json();
        alert(error.error || "Failed to save patient");
      }
    } catch (error) {
      alert("Failed to save patient");
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: "basic", label: "Basic Info" },
    { id: "contact", label: "Contact" },
    { id: "medical", label: "Medical" },
    { id: "insurance", label: "Insurance" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {/* Basic Information */}
        {activeTab === "basic" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="First Name"
              required
              {...register("first_name")}
              error={errors.first_name?.message}
            />
            <FormField
              label="Last Name"
              required
              {...register("last_name")}
              error={errors.last_name?.message}
            />
            <FormField
              label="Date of Birth"
              type="date"
              {...register("date_of_birth")}
              error={errors.date_of_birth?.message}
            />
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <FormSelect
                  label="Gender"
                  options={genderOptions}
                  placeholder="Select gender"
                  {...field}
                  error={errors.gender?.message}
                />
              )}
            />
            <div className="md:col-span-2">
              <FormTextarea
                label="Notes"
                rows={3}
                placeholder="Additional notes about the patient..."
                {...register("notes")}
                error={errors.notes?.message}
              />
            </div>
          </div>
        )}

        {/* Contact Information */}
        {activeTab === "contact" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Email"
                type="email"
                placeholder="patient@example.com"
                {...register("email")}
                error={errors.email?.message}
              />
              <FormField
                label="Phone"
                type="tel"
                placeholder="(555) 123-4567"
                {...register("phone")}
                error={errors.phone?.message}
              />
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Address
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <FormField
                    label="Street Address"
                    placeholder="123 Main Street"
                    {...register("address.street")}
                    error={errors.address?.street?.message}
                  />
                </div>
                <FormField
                  label="City"
                  placeholder="New York"
                  {...register("address.city")}
                  error={errors.address?.city?.message}
                />
                <FormField
                  label="State"
                  placeholder="NY"
                  {...register("address.state")}
                  error={errors.address?.state?.message}
                />
                <FormField
                  label="ZIP Code"
                  placeholder="10001"
                  {...register("address.zip_code")}
                  error={errors.address?.zip_code?.message}
                />
                <FormField
                  label="Country"
                  placeholder="United States"
                  defaultValue="United States"
                  {...register("address.country")}
                  error={errors.address?.country?.message}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Emergency Contact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  label="Name"
                  placeholder="John Doe"
                  {...register("emergency_contact.name")}
                  error={errors.emergency_contact?.name?.message}
                />
                <Controller
                  name="emergency_contact.relationship"
                  control={control}
                  render={({ field }) => (
                    <FormSelect
                      label="Relationship"
                      options={relationshipOptions}
                      placeholder="Select relationship"
                      {...field}
                      error={errors.emergency_contact?.relationship?.message}
                    />
                  )}
                />
                <FormField
                  label="Phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  {...register("emergency_contact.phone")}
                  error={errors.emergency_contact?.phone?.message}
                />
                <FormField
                  label="Email"
                  type="email"
                  placeholder="contact@example.com"
                  {...register("emergency_contact.email")}
                  error={errors.emergency_contact?.email?.message}
                />
              </div>
            </div>
          </div>
        )}

        {/* Medical Information */}
        {activeTab === "medical" && (
          <div className="space-y-6">
            <div>
              <FormField
                label="Allergies"
                placeholder="Penicillin, Latex, etc. (comma separated)"
                {...register("allergies")}
                description="Enter allergies separated by commas"
                error={errors.allergies?.message}
              />
            </div>
            <div>
              <FormField
                label="Current Medications"
                placeholder="Medication names (comma separated)"
                {...register("medications")}
                description="Enter medications separated by commas"
                error={errors.medications?.message}
              />
            </div>
            <div>
              <FormTextarea
                label="Medical History Notes"
                rows={4}
                placeholder="Previous surgeries, medical conditions, important medical history..."
                {...register("medical_history.notes")}
                error={errors.medical_history?.notes?.message}
              />
            </div>
          </div>
        )}

        {/* Insurance Information */}
        {activeTab === "insurance" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Insurance Provider"
              placeholder="Blue Cross Blue Shield"
              {...register("insurance_info.provider")}
              error={errors.insurance_info?.provider?.message}
            />
            <FormField
              label="Policy Number"
              placeholder="ABC123456789"
              {...register("insurance_info.policy_number")}
              error={errors.insurance_info?.policy_number?.message}
            />
            <FormField
              label="Group Number"
              placeholder="GRP001"
              {...register("insurance_info.group_number")}
              error={errors.insurance_info?.group_number?.message}
            />
          </div>
        )}
      </div>

      {/* Form Actions */}
      <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
        <Button type="button" variant="outline" onClick={() => router.back()}>
          <X className="w-4 h-4 mr-2" />
          Cancel
        </Button>
        <Button type="submit" disabled={loading}>
          <Save className="w-4 h-4 mr-2" />
          {loading ? "Saving..." : isEdit ? "Update Patient" : "Create Patient"}
        </Button>
      </div>
    </form>
  );
}

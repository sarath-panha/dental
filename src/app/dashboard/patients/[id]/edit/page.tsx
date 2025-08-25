// src/app/dashboard/patients/[id]/edit/page.tsx
"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { PatientForm } from "@/components/patients/patient-form";
import { Patient } from "@/types/patient";

export default function EditPatientPage() {
  const params = useParams();
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPatient();
  }, [params.id]);

  const fetchPatient = async () => {
    try {
      const response = await fetch(`/api/patients/${params.id}`);
      if (response.ok) {
        const data = await response.json();
        setPatient(data);
      }
    } catch (error) {
      console.error("Failed to fetch patient:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">Loading...</div>
    );
  }

  if (!patient) {
    return <div className="text-center text-gray-500">Patient not found</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Edit Patient: {patient.first_name} {patient.last_name}
        </h1>
        <p className="text-gray-600">Update patient information</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <PatientForm patient={patient} />
      </div>
    </div>
  );
}

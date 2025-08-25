// src/app/dashboard/patients/[id]/page.tsx
"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Edit,
  Phone,
  Mail,
  MapPin,
  Calendar,
  FileText,
  Heart,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Patient } from "@/types/patient";

export default function PatientDetailsPage() {
  const params = useParams();
  const router = useRouter();
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
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {patient.first_name} {patient.last_name}
          </h1>
          <p className="text-gray-600">Patient #{patient.patient_number}</p>
        </div>
        <div className="flex space-x-3">
          <Link href={`/dashboard/patients/${patient.id}/edit`}>
            <Button>
              <Edit className="w-4 h-4 mr-2" />
              Edit Patient
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Patient Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Basic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <p className="mt-1 text-sm text-gray-900">
                  {patient.first_name} {patient.last_name}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <p className="mt-1 text-sm text-gray-900">
                  {patient.date_of_birth
                    ? new Date(patient.date_of_birth).toLocaleDateString()
                    : "-"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <p className="mt-1 text-sm text-gray-900 capitalize">
                  {patient.gender || "-"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <div className="mt-1">
                  <Badge variant={patient.is_active ? "default" : "secondary"}>
                    {patient.is_active ? "Active" : "Inactive"}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Information
            </h2>
            <div className="space-y-4">
              {patient.email && (
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-gray-400" />
                  <span>{patient.email}</span>
                </div>
              )}
              {patient.phone && (
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-gray-400" />
                  <span>{patient.phone}</span>
                </div>
              )}
              {patient.address && (
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-3 mt-1 text-gray-400" />
                  <div>
                    {patient.address.street && (
                      <div>{patient.address.street}</div>
                    )}
                    {(patient.address.city ||
                      patient.address.state ||
                      patient.address.zip_code) && (
                      <div>
                        {patient.address.city}
                        {patient.address.city && patient.address.state
                          ? ", "
                          : ""}
                        {patient.address.state} {patient.address.zip_code}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Medical History */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              Medical History
            </h2>
            <div className="space-y-4">
              {patient.allergies && patient.allergies.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Allergies
                  </label>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {patient.allergies.map((allergy, index) => (
                      <Badge key={index} variant="outline">
                        {allergy}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {patient.medications && patient.medications.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Current Medications
                  </label>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {patient.medications.map((medication, index) => (
                      <Badge key={index} variant="outline">
                        {medication}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {patient.medical_history?.notes && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Notes
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {patient.medical_history.notes}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Emergency Contact */}
          {patient.emergency_contact && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Emergency Contact
              </h2>
              <div className="space-y-3">
                {patient.emergency_contact.name && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <p className="text-sm text-gray-900">
                      {patient.emergency_contact.name}
                    </p>
                  </div>
                )}
                {patient.emergency_contact.relationship && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Relationship
                    </label>
                    <p className="text-sm text-gray-900">
                      {patient.emergency_contact.relationship}
                    </p>
                  </div>
                )}
                {patient.emergency_contact.phone && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <p className="text-sm text-gray-900">
                      {patient.emergency_contact.phone}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Insurance Information */}
          {patient.insurance_info && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Insurance
              </h2>
              <div className="space-y-3">
                {patient.insurance_info.provider && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Provider
                    </label>
                    <p className="text-sm text-gray-900">
                      {patient.insurance_info.provider}
                    </p>
                  </div>
                )}
                {patient.insurance_info.policy_number && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Policy Number
                    </label>
                    <p className="text-sm text-gray-900 font-mono">
                      {patient.insurance_info.policy_number}
                    </p>
                  </div>
                )}
                {patient.insurance_info.group_number && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Group Number
                    </label>
                    <p className="text-sm text-gray-900 font-mono">
                      {patient.insurance_info.group_number}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Appointment
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                View Treatment History
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Billing History
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

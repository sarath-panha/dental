// src/hooks/use-patients.ts
"use client";
import { useState, useEffect } from "react";
import { Patient } from "@/types/patient";

interface UsePatients {
  patients: Patient[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function usePatients(): UsePatients {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPatients = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/patients");
      if (response.ok) {
        const data = await response.json();
        setPatients(data.patients);
        setError(null);
      } else {
        setError("Failed to fetch patients");
      }
    } catch (err) {
      setError("Failed to fetch patients");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return {
    patients,
    loading,
    error,
    refetch: fetchPatients,
  };
}

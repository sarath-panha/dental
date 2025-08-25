// src/app/dashboard/patients/page.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Eye, Edit, Trash2, Phone, Mail } from "lucide-react";
import { DataTable, Column, Filter, Action } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Patient } from "@/types/patient";
import { useRouter } from "next/navigation";

interface PatientsResponse {
  patients: Patient[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export default function PatientsPage() {
  const router = useRouter();
  const [data, setData] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [filterValues, setFilterValues] = useState<Record<string, string>>({});

  const fetchPatients = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        search: searchQuery,
        ...filterValues,
      });

      const response = await fetch(`/api/patients?${params}`);
      if (response.ok) {
        const result: PatientsResponse = await response.json();
        setData(result.patients);
        setPagination(result.pagination);
      }
    } catch (error) {
      console.error("Failed to fetch patients:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, [pagination.page, pagination.limit, searchQuery, filterValues]);

  const handleDelete = async (patient: Patient) => {
    if (
      window.confirm(
        `Are you sure you want to delete ${patient.first_name} ${patient.last_name}?`
      )
    ) {
      try {
        const response = await fetch(`/api/patients/${patient.id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          fetchPatients();
        }
      } catch (error) {
        console.error("Failed to delete patient:", error);
      }
    }
  };

  const columns: Column<Patient>[] = [
    {
      key: "patient_number",
      title: "Patient #",
      sortable: true,
      width: "120px",
      render: (value) => <span className="font-mono text-sm">{value}</span>,
    },
    {
      key: "name",
      title: "Name",
      sortable: true,
      render: (_, record) => (
        <div>
          <div className="font-medium text-gray-900">
            {record.first_name} {record.last_name}
          </div>
          {record.email && (
            <div className="text-sm text-gray-500 flex items-center">
              <Mail className="w-3 h-3 mr-1" />
              {record.email}
            </div>
          )}
        </div>
      ),
    },
    {
      key: "phone",
      title: "Phone",
      render: (value) =>
        value ? (
          <div className="flex items-center text-sm">
            <Phone className="w-3 h-3 mr-1 text-gray-400" />
            {value}
          </div>
        ) : (
          "-"
        ),
    },
    {
      key: "date_of_birth",
      title: "Date of Birth",
      sortable: true,
      render: (value) => (value ? new Date(value).toLocaleDateString() : "-"),
    },
    {
      key: "is_active",
      title: "Status",
      render: (value) => (
        <Badge variant={value ? "default" : "secondary"}>
          {value ? "Active" : "Inactive"}
        </Badge>
      ),
    },
    {
      key: "created_at",
      title: "Created",
      sortable: true,
      render: (value) => new Date(value).toLocaleDateString(),
    },
  ];

  const filters: Filter[] = [
    {
      key: "status",
      label: "Status",
      type: "select",
      options: [
        { value: "active", label: "Active" },
        { value: "inactive", label: "Inactive" },
      ],
    },
  ];

  const actions: Action<Patient>[] = [
    {
      key: "view",
      label: "View Details",
      icon: <Eye className="w-4 h-4" />,
      onClick: (patient) => router.push(`/dashboard/patients/${patient.id}`),
    },
    {
      key: "edit",
      label: "Edit",
      icon: <Edit className="w-4 h-4" />,
      onClick: (patient) =>
        router.push(`/dashboard/patients/${patient.id}/edit`),
    },
    {
      key: "delete",
      label: "Delete",
      icon: <Trash2 className="w-4 h-4" />,
      onClick: handleDelete,
      variant: "destructive",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Patients</h1>
          <p className="text-gray-600">
            Manage your practice's patient records
          </p>
        </div>
        <Link href="/dashboard/patients/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Patient
          </Button>
        </Link>
      </div>

      <DataTable
        data={data}
        columns={columns}
        loading={loading}
        pagination={pagination}
        filters={filters}
        actions={actions}
        searchable={true}
        onSearch={setSearchQuery}
        onFilter={(key, value) =>
          setFilterValues((prev) => ({ ...prev, [key]: value }))
        }
        onPageChange={(page) => setPagination((prev) => ({ ...prev, page }))}
        onLimitChange={(limit) => setPagination((prev) => ({ ...prev, limit }))}
      />
    </div>
  );
}

// src/components/dashboard/recent-patients.tsx
import { MoreVertical, Phone, Mail } from "lucide-react";

const recentPatients = [
  {
    id: 1,
    name: "Alice Cooper",
    email: "alice@example.com",
    phone: "(555) 123-4567",
    lastVisit: "2 days ago",
    status: "active",
  },
  {
    id: 2,
    name: "Bob Wilson",
    email: "bob@example.com",
    phone: "(555) 234-5678",
    lastVisit: "1 week ago",
    status: "active",
  },
  {
    id: 3,
    name: "Carol Martinez",
    email: "carol@example.com",
    phone: "(555) 345-6789",
    lastVisit: "2 weeks ago",
    status: "inactive",
  },
  {
    id: 4,
    name: "David Lee",
    email: "david@example.com",
    phone: "(555) 456-7890",
    lastVisit: "3 days ago",
    status: "active",
  },
];

export function RecentPatients() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Patients</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {recentPatients.map((patient) => (
          <div
            key={patient.id}
            className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg"
          >
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-gray-700">
                {patient.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">
                  {patient.name}
                </p>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    patient.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {patient.status}
                </span>
              </div>
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <Mail className="w-3 h-3 mr-1" />
                <span className="mr-3">{patient.email}</span>
                <Phone className="w-3 h-3 mr-1" />
                <span>{patient.phone}</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Last visit: {patient.lastVisit}
              </p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

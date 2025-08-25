// src/components/dashboard/recent-appointments.tsx
import { Calendar, Clock, User, FileText } from "lucide-react";

const appointments = [
  {
    id: 1,
    date: "2025-01-15",
    time: "9:00 AM",
    patient: "John Smith",
    type: "Cleaning",
    provider: "Dr. Sarah Chen",
    status: "completed",
    amount: "$120",
  },
  {
    id: 2,
    date: "2025-01-15",
    time: "10:30 AM",
    patient: "Sarah Johnson",
    type: "Root Canal",
    provider: "Dr. Sarah Chen",
    status: "completed",
    amount: "$850",
  },
  {
    id: 3,
    date: "2025-01-16",
    time: "1:00 PM",
    patient: "Mike Brown",
    type: "Consultation",
    provider: "Dr. Michael Rodriguez",
    status: "scheduled",
    amount: "$75",
  },
];

export function RecentAppointments() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Recent Appointments
        </h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View All Appointments
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Treatment
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Provider
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                      <User className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {appointment.patient}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-2">
                      {new Date(appointment.date).toLocaleDateString()}
                    </span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{appointment.time}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-900">
                    <FileText className="w-4 h-4 mr-2 text-gray-400" />
                    {appointment.type}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {appointment.provider}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      appointment.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {appointment.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

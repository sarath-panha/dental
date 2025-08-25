// src/components/dashboard/today-schedule.tsx
import { Clock } from "lucide-react";

const todayAppointments = [
  {
    id: 1,
    time: "9:00 AM",
    patient: "John Smith",
    type: "Cleaning",
    duration: "45 min",
    status: "confirmed",
  },
  {
    id: 2,
    time: "10:30 AM",
    patient: "Sarah Johnson",
    type: "Root Canal",
    duration: "90 min",
    status: "confirmed",
  },
  {
    id: 3,
    time: "1:00 PM",
    patient: "Mike Brown",
    type: "Consultation",
    duration: "30 min",
    status: "pending",
  },
  {
    id: 4,
    time: "2:30 PM",
    patient: "Emily Davis",
    type: "Filling",
    duration: "60 min",
    status: "confirmed",
  },
];

export function TodaySchedule() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Today's Schedule
        </h2>
        <span className="text-sm text-gray-500">12 appointments</span>
      </div>

      <div className="space-y-4">
        {todayAppointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg"
          >
            <div className="flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">
                  {appointment.patient}
                </p>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    appointment.status === "confirmed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {appointment.status}
                </span>
              </div>
              <div className="flex items-center mt-1 text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                <span>{appointment.time}</span>
                <span className="mx-2">•</span>
                <span>{appointment.type}</span>
                <span className="mx-2">•</span>
                <span>{appointment.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium">
          View Full Schedule
        </button>
      </div>
    </div>
  );
}

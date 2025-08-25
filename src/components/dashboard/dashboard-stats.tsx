// src/components/dashboard/dashboard-stats.tsx
import { Calendar, Users, DollarSign, Clock } from "lucide-react";

const stats = [
  {
    name: "Today's Appointments",
    value: "12",
    change: "+2 from yesterday",
    changeType: "positive",
    icon: Calendar,
  },
  {
    name: "Active Patients",
    value: "2,847",
    change: "+12 this week",
    changeType: "positive",
    icon: Users,
  },
  {
    name: "Revenue This Month",
    value: "$28,450",
    change: "+15% from last month",
    changeType: "positive",
    icon: DollarSign,
  },
  {
    name: "Avg Wait Time",
    value: "8 min",
    change: "-3 min from last week",
    changeType: "positive",
    icon: Clock,
  },
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-600">{stat.name}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <stat.icon className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4">
            <span
              className={`text-sm ${
                stat.changeType === "positive"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

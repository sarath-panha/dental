// src/app/dashboard/page.tsx
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { RecentAppointments } from "@/components/dashboard/recent-appointments";
import { RecentPatients } from "@/components/dashboard/recent-patients";
import { TodaySchedule } from "@/components/dashboard/today-schedule";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">
          Welcome back! Here's what's happening at your practice today.
        </p>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TodaySchedule />
        <RecentPatients />
      </div>

      <RecentAppointments />
    </div>
  );
}

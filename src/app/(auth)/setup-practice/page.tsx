// src/app/(auth)/setup-practice/page.tsx
import { Metadata } from "next";
import { SetupPracticeForm } from "@/components/auth/setup-practice-form";

export const metadata: Metadata = {
  title: "Setup Practice - Dentix",
  description: "Complete your practice setup to start using Dentix.",
};

export default function SetupPracticePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Setup Your Practice
          </h2>
          <p className="mt-2 text-gray-600">
            Complete your practice information to get started
          </p>
        </div>
        <SetupPracticeForm />
      </div>
    </div>
  );
}

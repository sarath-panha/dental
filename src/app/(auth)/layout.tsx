// src/app/(auth)/layout.tsx
import { AuthProvider } from "@/lib/auth/auth-context";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">{children}</div>
    </AuthProvider>
  );
}

// src/bil / auth / utils.ts;
import { User } from "@/types/auth";

export function hasPermission(
  user: User | null,
  requiredRole: string[]
): boolean {
  if (!user) return false;

  const roleHierarchy = {
    admin: 5,
    dentist: 4,
    hygienist: 3,
    assistant: 2,
    receptionist: 1,
  };

  const userLevel = roleHierarchy[user.role as keyof typeof roleHierarchy] || 0;
  const requiredLevel = Math.max(
    ...requiredRole.map(
      (role) => roleHierarchy[role as keyof typeof roleHierarchy] || 0
    )
  );

  return userLevel >= requiredLevel;
}

export function canManageUsers(user: User | null): boolean {
  return hasPermission(user, ["admin"]);
}

export function canAccessFinancials(user: User | null): boolean {
  return hasPermission(user, ["admin", "dentist"]);
}

export function canManageInventory(user: User | null): boolean {
  return hasPermission(user, ["admin", "dentist", "hygienist"]);
}

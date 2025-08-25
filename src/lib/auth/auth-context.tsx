// src/lib/auth/auth-context.tsx
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { AuthState, User, Practice } from "@/types/auth";

interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (data: any) => Promise<void>;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [practice, setPractice] = useState<Practice | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session) {
        await getUser();
      } else if (event === "SIGNED_OUT") {
        setUser(null);
        setPractice(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function getUser() {
    try {
      const {
        data: { user: authUser },
      } = await supabase.auth.getUser();

      if (!authUser) {
        setUser(null);
        setPractice(null);
        return;
      }

      // Get full user profile
      const { data: userProfile } = await supabase
        .from("users")
        .select(
          `
          *,
          practices (*)
        `
        )
        .eq("id", authUser.id)
        .single();

      if (userProfile) {
        setUser({
          id: userProfile.id,
          email: userProfile.email,
          firstName: userProfile.first_name,
          lastName: userProfile.last_name,
          role: userProfile.role,
          practiceId: userProfile.practice_id,
          phone: userProfile.phone,
          licenseNumber: userProfile.license_number,
          isActive: userProfile.is_active,
          lastLogin: userProfile.last_login,
          createdAt: userProfile.created_at,
          updatedAt: userProfile.updated_at,
        });

        if (userProfile.practices) {
          setPractice({
            id: userProfile.practices.id,
            name: userProfile.practices.name,
            address: userProfile.practices.address,
            phone: userProfile.practices.phone,
            email: userProfile.practices.email,
            taxId: userProfile.practices.tax_id,
            settings: userProfile.practices.settings,
            subscriptionPlan: userProfile.practices.subscription_plan,
            createdAt: userProfile.practices.created_at,
            updatedAt: userProfile.practices.updated_at,
          });
        }
      }
    } catch (error) {
      console.error("Error getting user:", error);
    } finally {
      setLoading(false);
    }
  }

  async function signIn(email: string, password: string) {
    const response = await fetch("/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }

    await getUser();
  }

  async function signUp(data: any) {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }

    await getUser();
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
    setPractice(null);
  }

  async function signInWithGoogle() {
    const response = await fetch("/api/auth/google", {
      method: "POST",
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }

    const { url } = await response.json();
    window.location.href = url;
  }

  async function refreshUser() {
    await getUser();
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        practice,
        loading,
        signIn,
        signUp,
        signOut,
        signInWithGoogle,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// src/app/api/auth/me/route.ts
import { createRouteHandlerSupabaseClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = createRouteHandlerSupabaseClient();

  try {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Get user profile with practice info
    const { data: userProfile, error: profileError } = await supabase
      .from("users")
      .select(
        `
        *,
        practices (*)
      `
      )
      .eq("id", user.id)
      .single();

    if (profileError) {
      return NextResponse.json(
        { error: "Failed to get user profile" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      user: userProfile,
      practice: userProfile.practices,
    });
  } catch (error) {
    console.error("Get user error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

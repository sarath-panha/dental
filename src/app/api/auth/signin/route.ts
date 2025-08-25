// src/app/api/auth/signin/route.ts
import { createRouteHandlerSupabaseClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import { SignInData } from "@/types/auth";

export async function POST(request: NextRequest) {
  const supabase = createRouteHandlerSupabaseClient();

  try {
    const body: SignInData = await request.json();
    const { email, password } = body;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Update last login
    if (data.user) {
      await supabase
        .from("users")
        .update({ last_login: new Date().toISOString() })
        .eq("id", data.user.id);
    }

    return NextResponse.json({
      message: "Sign in successful",
      user: data.user,
      session: data.session,
    });
  } catch (error) {
    console.error("Signin error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

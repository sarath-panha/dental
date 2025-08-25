// src/app/api/auth/signup/route.ts
import { createRouteHandlerSupabaseClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import { SignUpData } from "@/types/auth";

export async function POST(request: NextRequest) {
  const supabase = createRouteHandlerSupabaseClient();

  try {
    const body: SignUpData = await request.json();
    const { email, password, firstName, lastName, practiceName, phone } = body;

    // Sign up user with Supabase Auth
    const { data: authData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    });

    if (signUpError) {
      return NextResponse.json({ error: signUpError.message }, { status: 400 });
    }

    if (!authData.user) {
      return NextResponse.json(
        { error: "Failed to create user" },
        { status: 400 }
      );
    }

    // Create practice
    const { data: practiceData, error: practiceError } = await supabase
      .from("practices")
      .insert({
        name: practiceName,
        email: email,
        phone: phone || null,
      })
      .select()
      .single();

    if (practiceError) {
      // Rollback - delete auth user
      await supabase.auth.admin.deleteUser(authData.user.id);
      return NextResponse.json(
        { error: "Failed to create practice" },
        { status: 400 }
      );
    }

    // Create user record
    const { error: userError } = await supabase.from("users").insert({
      id: authData.user.id,
      practice_id: practiceData.id,
      email,
      first_name: firstName,
      last_name: lastName,
      role: "admin",
      phone: phone || null,
      is_active: true,
    });

    if (userError) {
      return NextResponse.json(
        { error: "Failed to create user profile" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Account created successfully",
        user: authData.user,
        session: authData.session,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

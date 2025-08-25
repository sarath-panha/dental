// src/app/api/auth/setup-practice/route.ts
import { createRouteHandlerSupabaseClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

interface SetupPracticeData {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  practiceName: string;
  phone?: string;
}

export async function POST(request: NextRequest) {
  const supabase = createRouteHandlerSupabaseClient();

  try {
    const body: SetupPracticeData = await request.json();
    const { userId, email, firstName, lastName, practiceName, phone } = body;

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
      return NextResponse.json(
        { error: "Failed to create practice" },
        { status: 400 }
      );
    }

    // Create user profile
    const { error: userError } = await supabase.from("users").insert({
      id: userId,
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

    return NextResponse.json({
      message: "Practice setup completed",
      practice: practiceData,
    });
  } catch (error) {
    console.error("Setup practice error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

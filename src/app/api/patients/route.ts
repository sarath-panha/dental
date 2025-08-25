// src/app/api/patients/route.ts
import { createRouteHandlerSupabaseClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const supabase = createRouteHandlerSupabaseClient();
  const { searchParams } = new URL(request.url);

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get user's practice_id
    const { data: userProfile } = await supabase
      .from("users")
      .select("practice_id")
      .eq("id", user.id)
      .single();

    if (!userProfile?.practice_id) {
      return NextResponse.json({ error: "No practice found" }, { status: 400 });
    }

    // Query params
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "all";
    const sortBy = searchParams.get("sortBy") || "created_at";
    const sortOrder = searchParams.get("sortOrder") || "desc";

    let query = supabase
      .from("patients")
      .select("*", { count: "exact" })
      .eq("practice_id", userProfile.practice_id);

    // Search filter
    if (search) {
      query = query.or(
        `first_name.ilike.%${search}%,last_name.ilike.%${search}%,email.ilike.%${search}%,phone.ilike.%${search}%`
      );
    }

    // Status filter
    if (status !== "all") {
      query = query.eq("is_active", status === "active");
    }

    // Sorting
    query = query.order(sortBy, { ascending: sortOrder === "asc" });

    // Pagination
    const from = (page - 1) * limit;
    const to = from + limit - 1;
    query = query.range(from, to);

    const { data: patients, error, count } = await query;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({
      patients,
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit),
      },
    });
  } catch (error) {
    console.error("Get patients error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const supabase = createRouteHandlerSupabaseClient();

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: userProfile } = await supabase
      .from("users")
      .select("practice_id")
      .eq("id", user.id)
      .single();

    if (!userProfile?.practice_id) {
      return NextResponse.json({ error: "No practice found" }, { status: 400 });
    }

    const body = await request.json();

    // Generate patient number
    const { data: lastPatient } = await supabase
      .from("patients")
      .select("patient_number")
      .eq("practice_id", userProfile.practice_id)
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    const lastNumber = lastPatient?.patient_number
      ? parseInt(lastPatient.patient_number.replace(/\D/g, ""))
      : 0;
    const patientNumber = `P${String(lastNumber + 1).padStart(6, "0")}`;

    const { data: patient, error } = await supabase
      .from("patients")
      .insert({
        ...body,
        practice_id: userProfile.practice_id,
        patient_number: patientNumber,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(patient, { status: 201 });
  } catch (error) {
    console.error("Create patient error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

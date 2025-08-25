// src/app/api/auth/callback/route.ts
import { createRouteHandlerSupabaseClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = createRouteHandlerSupabaseClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data.user) {
      // Check if user profile exists
      const { data: existingUser } = await supabase
        .from("users")
        .select("*")
        .eq("id", data.user.id)
        .single();

      // If no user profile, create one (Google OAuth first-time login)
      if (!existingUser) {
        const firstName =
          data.user.user_metadata?.first_name ||
          data.user.user_metadata?.full_name?.split(" ")[0] ||
          data.user.email?.split("@")[0];
        const lastName =
          data.user.user_metadata?.last_name ||
          data.user.user_metadata?.full_name?.split(" ").slice(1).join(" ") ||
          "";

        // For Google OAuth users, redirect to practice setup
        const redirectUrl = new URL("/setup-practice", origin);
        redirectUrl.searchParams.set("user_id", data.user.id);
        redirectUrl.searchParams.set("email", data.user.email || "");
        redirectUrl.searchParams.set("first_name", firstName);
        redirectUrl.searchParams.set("last_name", lastName);

        return NextResponse.redirect(redirectUrl);
      }

      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}

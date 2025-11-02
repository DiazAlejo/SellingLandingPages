import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, source, packageType } = body;
    
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // If SUPABASE is configured, save to database
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_KEY; // anon key typically
    const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY; // optional, server-only

    if (SUPABASE_URL && (SUPABASE_SERVICE_ROLE_KEY || SUPABASE_KEY)) {
      try {
        const authKey = SUPABASE_SERVICE_ROLE_KEY || SUPABASE_KEY;
        const emailData = {
          email: email,
          source: source || 'unknown',
          package_type: packageType || null,
          created_at: new Date().toISOString(),
          status: 'email_captured'
        };

        const resp = await fetch(`${SUPABASE_URL}/rest/v1/email_captures`, {
          method: "POST",
          headers: {
            apikey: authKey!,
            Authorization: `Bearer ${authKey}`,
            "Content-Type": "application/json",
            // minimal response for speed; errors are still surfaced via status
            Prefer: "return=minimal",
          },
          body: JSON.stringify([emailData]),
        });
        
        if (!resp.ok) {
          const text = await resp.text();
          console.error("Supabase email capture insert failed:", resp.status, text);
          return NextResponse.json({ ok: false, error: "supabase_insert_failed", detail: text, status: resp.status }, { status: 500 });
        }
      } catch (err) {
        console.error("Supabase email capture request error", err);
        return NextResponse.json({ ok: false, error: "supabase_request_error" }, { status: 500 });
      }
    } else {
      // For MVP: log the email capture so it appears in server logs during development
      console.log("Email capture (MVP):", { email, source, packageType });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Email capture error:", err);
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
}

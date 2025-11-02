import { NextResponse } from "next/server";

export async function GET() {
  try {
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_KEY;

    if (!SUPABASE_URL || !SUPABASE_KEY) {
      return NextResponse.json({ error: "Database not configured" }, { status: 500 });
    }

    const resp = await fetch(`${SUPABASE_URL}/rest/v1/consultations?order=created_at.desc`, {
      method: "GET",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (!resp.ok) {
      const text = await resp.text();
      console.error("Supabase fetch failed:", resp.status, text);
      return NextResponse.json({ error: "Failed to fetch consultations" }, { status: 500 });
    }

    const data = await resp.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching consultations:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, fullName } = body;
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (!fullName || typeof fullName !== "string") {
      return NextResponse.json({ error: "Full name is required" }, { status: 400 });
    }

    // If SUPABASE is configured, forward to a Supabase table named 'consultations'
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_KEY;

    if (SUPABASE_URL && SUPABASE_KEY) {
      try {
        const resp = await fetch(`${SUPABASE_URL}/rest/v1/consultations`, {
          method: "POST",
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify([body]),
        });
        if (!resp.ok) {
          const text = await resp.text();
          console.error("Supabase insert failed:", resp.status, text);
          // fall through and still return success to prevent UX break in MVP
        }
      } catch (err) {
        console.error("Supabase request error", err);
      }
    } else {
      // For MVP: log the submission so it appears in server logs during development
      console.log("Consultation submission (MVP):", body);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
}

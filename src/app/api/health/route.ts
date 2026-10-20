
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("categories")
      .select("id, name, slug")
      .order("name");

    if (error) {
      console.error("Supabase query failed:", error.message);

      return NextResponse.json(
        { connected: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      connected: true,
      categories: data,
    });
  } catch (error) {
    console.error("Supabase connection failed:", error);

    return NextResponse.json(
      { connected: false, error: "Check server configuration." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { client } from "@repo/db/client"; // Ensure this path is correct

export async function GET() {
  try {
    const user = await client.user.findFirst();
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
  }
}

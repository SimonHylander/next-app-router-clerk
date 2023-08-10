import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export function POST() {
  const { userId } = auth();
  return NextResponse.json({ bar: "bar", userId });
}

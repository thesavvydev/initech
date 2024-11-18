import { NextResponse } from "next/server";
import { data } from "./data";

export function GET() {
  return NextResponse.json(data);
}

export async function POST() {
  return NextResponse.json(data);
}

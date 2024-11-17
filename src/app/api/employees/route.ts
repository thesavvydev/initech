import { NextResponse } from "next/server";
import { data } from "./data";

export function GET() {
  return NextResponse.json(data);
}

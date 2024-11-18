import { NextRequest, NextResponse } from "next/server";
import { data } from "../data";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ employeeId: string }> }
) {
  const { employeeId } = await params;

  const employee = data.find((e) => e.id === Number(employeeId));
  if (employee) return NextResponse.json(employee);

  return NextResponse.json(null, { status: 404 });
}

export async function PUT(
  _: NextRequest,
  { params }: { params: Promise<{ employeeId: string }> }
) {
  const { employeeId } = await params;

  const employee = data.find((e) => e.id === Number(employeeId));
  if (employee) return NextResponse.json(employee);

  return NextResponse.json(null, { status: 404 });
}

export async function PATCH(
  _: NextRequest,
  { params }: { params: Promise<{ employeeId: string }> }
) {
  const { employeeId } = await params;

  const employee = data.find((e) => e.id === Number(employeeId));
  if (employee) return NextResponse.json(employee);

  return NextResponse.json(null, { status: 404 });
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: Promise<{ employeeId: string }> }
) {
  const { employeeId } = await params;

  const employee = data.find((e) => e.id === Number(employeeId));
  if (employee) return NextResponse.json(employee);

  return NextResponse.json(null, { status: 404 });
}

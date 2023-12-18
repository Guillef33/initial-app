import connectMongoDB from "@/database/connection/mongodb";
import Gasto from "@/database/models/gastos";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { titulo, categoria, monto } = await request.json();
  await connectMongoDB();
  await Gasto.create({ titulo, categoria, monto });
  return NextResponse.json({ message: "Gasto Creado" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const gastos = await Gasto.find();
  return NextResponse.json({ gastos });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Gasto.findByIdAndDelete(id);
  return NextResponse.json({ message: "Gasto deleted" }, { status: 200 });
}

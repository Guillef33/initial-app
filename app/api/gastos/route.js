import connectMongoDB from "@/database/connection/mongodb";
import Gasto from "@/database/models/gastos";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { titulo, categoria, monto } = await request.json();
  await connectMongoDB();
  await Gasto.create({ titulo, categoria, monto });
  return NextResponse.json({ message: "Gasto Creado" }, { status: 201 });
}


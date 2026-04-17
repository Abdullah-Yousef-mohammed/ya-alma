import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      take: 4,
      orderBy: { createdAt: "desc" },
      include: { category: true },
    });
    return NextResponse.json({ success: true, products });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      code: error.code,
      message: error.message,
      name: error.name,
      meta: error.meta,
      stack: error.stack,
    });
  }
}

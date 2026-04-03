import { NextResponse } from "next/server";
import { products } from "@/data/products";

// A simple GET request that returns the mock products list
export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  
  return NextResponse.json(products);
}

import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const configPath = path.join(process.cwd(), "data/footer-config.json");

export async function GET() {
  try {
    const raw = await fs.readFile(configPath, "utf-8");
    return NextResponse.json(JSON.parse(raw));
  } catch {
    return NextResponse.json({ error: "Config not found" }, { status: 404 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    await fs.writeFile(configPath, JSON.stringify(body, null, 2), "utf-8");
    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const dataPath = path.join(process.cwd(), "data/messages.json");

export async function GET(req: Request) {
  try {
    const raw = await fs.readFile(dataPath, "utf-8");
    const messages = JSON.parse(raw);
    
    // Support filtering by user ID (for customer view)
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    
    if (userId) {
       return NextResponse.json(messages.filter((m: any) => m.userId === userId));
    }

    return NextResponse.json(messages);
  } catch (e) {
    return NextResponse.json([]); // return empty if missing
  }
}

export async function POST(req: Request) {
  try {
    const msg = await req.json();
    
    const newMsg = {
       id: Math.random().toString(36).substring(7),
       timestamp: new Date().toISOString(),
       ...msg
    };

    let messages = [];
    try {
       const raw = await fs.readFile(dataPath, "utf-8");
       messages = JSON.parse(raw);
    } catch (e) {}

    messages.push(newMsg);
    await fs.writeFile(dataPath, JSON.stringify(messages, null, 2), "utf-8");

    return NextResponse.json({ success: true, message: newMsg });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}

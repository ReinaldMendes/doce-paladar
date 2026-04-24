import { NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const contentPath = join(process.cwd(), "src/lib/content.json");

export async function GET() {
  try {
    const content = JSON.parse(readFileSync(contentPath, "utf-8"));
    return NextResponse.json(content);
  } catch {
    return NextResponse.json({ error: "Failed to read content" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    writeFileSync(contentPath, JSON.stringify(body, null, 2), "utf-8");
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to save content" }, { status: 500 });
  }
}

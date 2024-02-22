import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  console.log("category");
  return NextResponse.json({ success: "work" }, { status: 200 });
}

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json({ success: "work" }, { status: 200 });
}

export async function PUT(req: NextRequest, res: NextResponse) {
  return NextResponse.json({ success: "work" }, { status: 200 });
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  return NextResponse.json({ success: "work" }, { status: 200 });
}

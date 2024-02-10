import { NextRequest, NextResponse } from "next/server";
type ResponseData = {
  message: string;
};
export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({ message: "Server is running" } as ResponseData);
}

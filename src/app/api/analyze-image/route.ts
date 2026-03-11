import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // DIAGNOSTIC ECHO TEST
  // Bypasses all body reading, module resolution, and async logic.
  // If Vercel still returns a 500 HTML error here, the path routing is structurally broken.
  return NextResponse.json({ success: true, message: "Diagnostic Echo Connected" });
}

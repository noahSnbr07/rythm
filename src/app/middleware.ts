import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = new URL(req.url);

  if (url.pathname.startsWith("/api/proxy")) {
    // Add custom headers or handle logic before forwarding the request.
    req.headers.set("X-Custom-Header", "Bypass-CORS");
  }

  return NextResponse.next();
}

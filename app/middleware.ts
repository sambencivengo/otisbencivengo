import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.get("wedding_auth")?.value === "true";

  // Allow access to home page and login page
  if (req.nextUrl.pathname === "/" || req.nextUrl.pathname === "/login") {
    return NextResponse.next();
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next|static|favicon.ico).*)", // Apply to all pages except API and static files
};

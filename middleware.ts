import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const sessionName = process.env.SESSION_NAME || "admin_session";
  const sessionSecret = process.env.SESSION_SECRET;
  
  const session = request.cookies.get(sessionName);
  const isLoginPage = request.nextUrl.pathname === "/admin/login";

  // Verificamos que la cookie exista y coincida con el secreto del servidor
  const isAuthenticated = session?.value === sessionSecret && sessionSecret !== undefined;

  if (!isAuthenticated && !isLoginPage && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  if (isAuthenticated && isLoginPage) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

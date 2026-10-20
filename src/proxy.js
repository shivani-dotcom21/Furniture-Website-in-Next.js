import next from "next";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

let protectedRoutes = ["/dashboard"];

export function proxy(request) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("TOKEN")?.value;

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (
    isProtectedRoute &&
    (token == null || token == "" || token == undefined)
  ) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

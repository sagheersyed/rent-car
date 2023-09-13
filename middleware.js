import { NextRequest, NextResponse } from "next/server";

export default function middleWare(request) {
  console.log("working");
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/student-list/:path*"],
};

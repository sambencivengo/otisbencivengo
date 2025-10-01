import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Password protection disabled - allow all requests through
  return NextResponse.next();

  // Get the pathname of the request
  // const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  // const isPublicPath = path === '/password';

  // Check if user is authenticated
  // const isAuthenticated = request.cookies.get('isAuthenticated')?.value === 'true';

  // Redirect authenticated users away from password page
  // if (isAuthenticated && isPublicPath) {
  //   return NextResponse.redirect(new URL('/', request.url));
  // }

  // Redirect unauthenticated users to password page
  // if (!isAuthenticated && !isPublicPath) {
  //   return NextResponse.redirect(new URL('/password', request.url));
  // }

  // console.log(isAuthenticated);
  // Allow the request to continue
  // return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: ['/', '/password'],
};

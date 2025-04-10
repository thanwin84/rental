import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from './lib/session';

const publicRoutes = ['/login', '/signup'];

export async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(pathName);
  const user = await verifySession();

  if (!isPublicRoute && !user.isAuthenticated) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = '/login';
    return NextResponse.redirect(loginUrl);
  }

  if (isPublicRoute && user.isAuthenticated) {
    const homePageUrl = request.nextUrl.clone();
    homePageUrl.pathname = '/';
    return NextResponse.redirect(homePageUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|static).*)'],
};

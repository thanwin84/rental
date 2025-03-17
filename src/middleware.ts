import { NextRequest } from 'next/server';
import { updateSession } from './lib/session';

const publicRoutes = ['/login', '/signup'];

export async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(pathName);
  if (!isPublicRoute) {
    console.log('updating');
    await updateSession();
  }
}

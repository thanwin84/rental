import { cookies, headers } from 'next/headers';
import { token } from './constants';
import { verifyAccessToken } from './session';
import { NextRequest } from 'next/server';

export const getAuthenticatedUser = async (request?: NextRequest) => {
  const cookieStore = await cookies();
  let accessToken =
    cookieStore.get(token.ACCESS_TOKEN)?.value ||
    request?.cookies.get(token.ACCESS_TOKEN)?.value;

  if (!accessToken) {
    const headerStore = await headers();
    const authHeader =
      headerStore.get('Authorization') || request?.headers.get('Authorization');
    if (authHeader && authHeader.startsWith('Bearer ')) {
      accessToken = authHeader.split(' ')[1];
    }
  }
  const decodedAccessToken = await verifyAccessToken(accessToken);

  return decodedAccessToken;
};

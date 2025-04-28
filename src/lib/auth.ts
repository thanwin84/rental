import { cookies } from 'next/headers';
import { token } from './constants';
import { verifyAccessToken } from './session';
import { NextRequest } from 'next/server';

export const getUserFromToken = async (request?: NextRequest) => {
  const cookieStore = await cookies();
  const accessToken =
    cookieStore.get(token.ACCESS_TOKEN)?.value ||
    request?.cookies.get(token.ACCESS_TOKEN)?.value;
  const decodedAccessToken = await verifyAccessToken(accessToken);
  return decodedAccessToken;
};

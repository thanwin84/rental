import 'server-only';
import { config } from '@/config';
import { jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { token } from './constants';
import { cache } from 'react';

type Payload = {
  userId: string;
  role: string;
};

const refreshTokenSecret = new TextEncoder().encode(config.REFESH_TOKEN_SECRET);
const accessTokenSecrete = new TextEncoder().encode(config.ACCESS_TOKEN_SECRET);

export const generateAccessToken = async (payload: {
  userId: string;
  role: string;
}) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(config.ACCESS_TOKEN_EXPIRY)
    .sign(accessTokenSecrete);
};
export const generateRefreshToken = async (payload: {
  userId: string;
  role: string;
}) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(config.REFRESH_TOKEN_EXPIRY)
    .sign(refreshTokenSecret);
};
export const verifyAccessToken = async (token: string | undefined = '') => {
  try {
    const { payload } = await jwtVerify(token, accessTokenSecrete, {
      algorithms: ['HS256'],
    });

    return payload as Payload;
  } catch {
    return null;
  }
};
export const verifyRefreshToken = async (token: string | undefined = '') => {
  try {
    const { payload } = await jwtVerify(token, refreshTokenSecret, {
      algorithms: ['HS256'],
    });
    return payload as Payload;
  } catch {
    return null;
  }
};

export async function createSession(userId: string, role: string) {
  const cookieStore = await cookies();
  const accessToken = await generateAccessToken({ userId, role });
  const refreshToken = await generateRefreshToken({ userId, role });
  cookieStore.set(token.ACCESS_TOKEN, accessToken, {
    httpOnly: true,
    secure: config.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
  cookieStore.set(token.REFRESH_TOKEN, refreshToken, {
    httpOnly: true,
    secure: config.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
  console.log(cookieStore);
}
export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete(token.ACCESS_TOKEN);
  cookieStore.delete(token.REFRESH_TOKEN);
}

export const verifySession = cache(async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(token.ACCESS_TOKEN)?.value;

  const decodedAccessToken = await verifyAccessToken(accessToken);
  if (decodedAccessToken && decodedAccessToken.userId) {
    return { isAuthenticated: true, ...decodedAccessToken };
  }

  const refreshToken = cookieStore.get(token.REFRESH_TOKEN)?.value;
  const isRefreshTokenValid = await verifyRefreshToken(refreshToken);
  if (isRefreshTokenValid && isRefreshTokenValid.userId) {
    await createSession(isRefreshTokenValid.userId, isRefreshTokenValid.role);
    return {
      isAuthenticated: true,
      userId: isRefreshTokenValid.userId,
      role: isRefreshTokenValid.role,
      reason: refreshToken ? 'expired' : 'invalid',
    };
  }
  return {
    isAuthenticated: false,
    userId: '',
    role: '',
  };
});

export async function decodedAccessToken() {
  const cookie = await cookies();
  const accessToken = cookie.get('access-token')?.value;
  const decodedToken = await verifyAccessToken(accessToken);
  return decodedToken;
}

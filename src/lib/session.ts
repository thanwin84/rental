import { config } from '@/config';
import { jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';

const sessionSecret = new TextEncoder().encode(config.SESSION_SECRET);

export const generateToken = async (payload: {
  userId: string;
  role: string;
}) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(config.SESSION_TOKEN_EXPIRY)
    .sign(sessionSecret);
};
export const verifyToken = async (token: string | undefined = '') => {
  try {
    const { payload } = await jwtVerify(token, sessionSecret, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    console.log('Faild to verify');
    return null;
  }
};

export async function createSession(userId: string, role: string) {
  const cookieStore = await cookies();
  const sessionToken = await generateToken({ userId, role });
  cookieStore.set('session-token', sessionToken, {
    httpOnly: true,
    secure: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    sameSite: 'lax',
  });
}
export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('session-token');
}
export async function verifySession() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('session-token')?.value;

  const decodedToken = await verifyToken(sessionToken);
  if (!decodedToken?.userId) {
    return {};
  }
  return decodedToken;
}

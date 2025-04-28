import { NextRequest, NextResponse } from 'next/server';
import { loginUser } from '@/lib/db/user';
import { token } from '@/lib/constants';
import { generateAccessToken } from '@/lib/session';

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { email, password } = reqBody;
  const loginResponse = await loginUser(email, password);
  const response = NextResponse.json(loginResponse, {
    status: loginResponse.status,
  });
  console.log(loginResponse);

  const accessToken = await generateAccessToken({
    userId: loginResponse.data._id.toString(),
    role: loginResponse.data.role,
  });

  // this will set cookie in the client side
  response.cookies.set(token.ACCESS_TOKEN, accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
  return response;
}

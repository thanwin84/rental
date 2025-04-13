import { NextRequest, NextResponse } from 'next/server';
import { loginUser } from '@/lib/db/user';

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { email, password } = reqBody;
  const result = await loginUser(email, password);
  const response = NextResponse.json(result, { status: result.status });
  return response;
}

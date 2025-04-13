import { token } from '@/lib/constants';
import { getUserById } from '@/lib/db/user';
import { verifyAccessToken } from '@/lib/session';
import { apiResponse } from '@/utils/apiResponse';
import { statusCodes } from '@/utils/statusCodes';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  const accessToken =
    request.cookies.get(token.ACCESS_TOKEN)?.value ||
    cookieStore.get(token.ACCESS_TOKEN)?.value;

  const decodedToken = await verifyAccessToken(accessToken);

  if (decodedToken && !decodedToken.userId) {
    return NextResponse.json(
      apiResponse({
        success: false,
        message: 'authentication invalid',
        status: statusCodes.UNAUTHORIZED,
      }),
      { status: statusCodes.UNAUTHORIZED }
    );
  }
  const result = await getUserById(decodedToken?.userId as string);
  return NextResponse.json(result, { status: result.status });
}

import { token } from '@/lib/constants';
import { verifyAccessToken } from '@/lib/session';
import User from '@/models/user.model';
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
      apiResponse({ success: false, message: 'authentication invalid' }),
      { status: statusCodes.UNAUTHORIZED }
    );
  }

  const user = await User.findById(decodedToken?.userId);
  if (!user) {
    return NextResponse.json(
      apiResponse({ success: false, message: 'User does not exists' }),
      { status: statusCodes.BAD_REQUEST }
    );
  }
  return NextResponse.json(
    apiResponse({
      success: true,
      message: 'user data is fetched successfully',
      data: user,
    }),
    { status: statusCodes.OK }
  );
}

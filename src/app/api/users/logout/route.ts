import { deleteSession } from '@/lib/session';
import { apiResponse } from '@/utils/apiResponse';
import { statusCodes } from '@/utils/statusCodes';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_request: NextRequest) {
  await deleteSession();
  return NextResponse.json(
    apiResponse({ success: true, message: 'User is logged out successfully' }),
    { status: statusCodes.OK }
  );
}

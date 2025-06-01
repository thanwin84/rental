import { getAuthenticatedUser } from '@/lib/auth';
import { getFavouritePropertyList } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const user = await getAuthenticatedUser(request);
  if (!user) {
    return NextResponse.json(
      { message: 'You are not authorized to perform this action' },
      { status: 401 }
    );
  }
  const ids = await getFavouritePropertyList(user.userId);
  return NextResponse.json({
    status: 200,
    data: {
      favouritesIdList: ids,
    },
  });
}

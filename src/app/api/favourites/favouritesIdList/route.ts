import { getAuthenticatedUser } from '@/lib/auth';
import { FavouriteProperty } from '@/models';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const user = await getAuthenticatedUser(request);
  if (!user) {
    return NextResponse.json(
      { message: 'You are not authorized to perform this action' },
      { status: 401 }
    );
  }
  const favourites = await FavouriteProperty.find({
    userId: user.userId,
  }).select('-_id propertyId');
  const ids = favourites.map((item) => item.propertyId);
  return NextResponse.json({
    status: 200,
    data: {
      favouritesIdList: ids,
    },
  });
}

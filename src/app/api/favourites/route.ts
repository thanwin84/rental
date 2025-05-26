/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectDb } from '@/db_connect/dbConnect';
import { getAuthenticatedUser } from '@/lib/auth';
import { getFavouriteProperties } from '@/lib/db';
import { FavouriteProperty } from '@/models';

import { NextRequest, NextResponse } from 'next/server';
connectDb();
export async function POST(request: NextRequest) {
  try {
    const { propertyId } = await request.json();
    const user = await getAuthenticatedUser(request);

    if (!user) {
      return NextResponse.json(
        { message: 'You are not authorized to perform this action' },
        { status: 401 }
      );
    }

    const alreadyExists = await FavouriteProperty.findOne({
      userId: user.userId,
      propertyId,
    });

    if (alreadyExists) {
      await FavouriteProperty.deleteOne({ userId: user.userId, propertyId });
      return NextResponse.json(
        { message: 'Property is removed from favourite list' },
        { status: 400 }
      );
    }

    const favouriteProperty = await FavouriteProperty.create({
      userId: user.userId,
      propertyId,
    });

    return NextResponse.json(
      {
        message: 'Property added to favourites',
        favouriteProperty,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('[ADD_FAVOURITE_ERROR]', error);
    return NextResponse.json(
      { message: 'Something went wrong', error: error?.message },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const user = await getAuthenticatedUser(request);
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '6');

    if (!user) {
      return NextResponse.json(
        { message: 'You are not authorized to perform this action' },
        { status: 401 }
      );
    }

    const result = await getFavouriteProperties({
      userId: user.userId,
      page,
      limit,
    });

    return NextResponse.json({
      status: 200,
      data: result,
    });
  } catch (error: any) {
    console.error('[GET_FAVOURITES_ERROR]', error);
    return NextResponse.json(
      { message: 'Something went wrong', error: error.message },
      { status: 500 }
    );
  }
}

import { connectDb } from '@/db_connect/dbConnect';
import { getUserFromToken } from '@/lib/auth';
import { Pagination } from '@/lib/types';
import { FavouriteProperty } from '@/models';

import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';
connectDb();
export async function POST(request: NextRequest) {
  try {
    const { propertyId } = await request.json();
    const user = await getUserFromToken(request);

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
    const user = await getUserFromToken(request);
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    if (!user) {
      return NextResponse.json(
        { message: 'You are not authorized to perform this action' },
        { status: 401 }
      );
    }

    const properties = await FavouriteProperty.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(user.userId),
        },
      },
      {
        $lookup: {
          from: 'properties',
          localField: 'propertyId',
          foreignField: '_id',
          as: 'property',
        },
      },
      {
        $addFields: {
          property: { $first: '$property' },
        },
      },
      {
        $lookup: {
          from: 'locations',
          localField: 'property.locationId',
          foreignField: '_id',
          as: 'location',
        },
      },
      {
        $addFields: {
          'property.location': { $first: '$location' },
        },
      },
      {
        $project: {
          property: 1,
        },
      },
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
    ]);
    const totalCount = await FavouriteProperty.countDocuments({
      userId: user.userId,
    });
    const totalPages = Math.floor(totalCount / limit);
    const pagination: Pagination = {
      totalItems: totalCount,
      currentPage: page,
      totalPages: totalPages,
    };

    return NextResponse.json({
      status: 200,
      data: {
        properties,
        pagination,
      },
    });
  } catch (error) {
    console.error('[GET_FAVOURITES_ERROR]', error);
    return NextResponse.json(
      { message: 'Something went wrong', error: error.message },
      { status: 500 }
    );
  }
}

import { getUserFromToken } from '@/lib/auth';
import { createLocation } from '@/lib/db/location';
import { createProperty, getProperties } from '@/lib/db';
import { uploadToCloudinary } from '@/lib/uploadOnCloudinary';
import { apiResponse } from '@/utils/apiResponse';
import { getCoordinatesFromLocation } from '@/utils/location';
import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file = data.get('image') as File;
  const location = JSON.parse(data.get('location') as string);
  const property = JSON.parse(data.get('property') as string);

  let uploadResponse;
  if (file) {
    uploadResponse = await uploadToCloudinary(file);
  }
  const { lng, lat } = await getCoordinatesFromLocation(location);
  try {
    const user = await getUserFromToken(request);
    if (!user || !user.userId) {
      return NextResponse.json(
        apiResponse({
          success: false,
          message: 'You are not authorized',
          status: 403,
        }),
        {
          status: 403,
        }
      );
    }
    const propertyId = new mongoose.Types.ObjectId();
    const locationData = await createLocation({
      ...location,
      propertyId: propertyId.toString(),
      location: {
        type: 'Point',
        coordinates: [parseFloat(lng), parseFloat(lat)],
      },
    });

    const newProperty = await createProperty({
      ...property,
      _id: propertyId.toString(),
      locationId: locationData._id,
      ownerId: user.userId.toString(),
      photoUrLs: [uploadResponse?.secure_url as string],
    });

    return NextResponse.json(newProperty, { status: newProperty.status });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const result = await getProperties(searchParams);
  return NextResponse.json({
    status: 200,
    data: result,
  });
}

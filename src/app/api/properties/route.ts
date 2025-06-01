import { getAuthenticatedUser } from '@/lib/auth';
import { createLocation } from '@/lib/db/location';
import { getProperties } from '@/lib/db';
import { uploadToCloudinary } from '@/lib/uploadOnCloudinary';
import { apiResponse } from '@/utils/apiResponse';
import { getCoordinatesFromLocation } from '@/utils/location';
import { NextRequest, NextResponse } from 'next/server';

import { generateUUID } from '@/utils';
import prisma from '@/lib/prisma';

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file = data.get('image') as File;
  const location = JSON.parse(data.get('location') as string);
  const property = JSON.parse(data.get('property') as string);

  const amenities = (property.amenities as string[]).map((value) => ({
    name: value,
  }));
  const photoUrLs: { url: string }[] = [];
  const highLights = (property.highLights as string[]).map((value) => ({
    name: value,
  }));

  let uploadResponse;
  if (file) {
    uploadResponse = await uploadToCloudinary(file);
    photoUrLs.push({ url: uploadResponse.secure_url });
  }
  const { lng, lat } = await getCoordinatesFromLocation(location);
  try {
    const user = await getAuthenticatedUser(request);
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
    const propertyId = generateUUID();
    const locationData = await createLocation({
      ...location,
      propertyId: propertyId,
      location: {
        type: 'Point',
        coordinates: [parseFloat(lng), parseFloat(lat)],
      },
    });

    const newProperty = await prisma.property.create({
      data: {
        id: propertyId,
        name: property.name,
        description: property.description,
        pricePerMonth: parseFloat(property.pricePerMonth),
        securityDeposit: parseFloat(property.securityDeposit || 0),
        applicationFee: parseFloat(property.applicationFee || 0),
        photoUrls: { create: photoUrLs },
        amenities: { create: amenities },
        highLights: { create: highLights },
        isParkingIncluded: property.isParkingIncluded || false,
        beds: parseInt(property.beds),
        baths: parseInt(property.baths),
        squareFeet: parseFloat(property.squareFeet || 0),
        propertyType: property.propertyType,
        ownerId: user.userId,
        locationId: locationData._id.toString(),
      },
    });

    return NextResponse.json(newProperty, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const priceMin = searchParams.get('priceMin') as string;
  const priceMax = searchParams.get('priceMax') as string;
  const baths = searchParams.get('baths') as string;
  const beds = searchParams.get('beds') as string;
  const propertyType = searchParams.getAll('propertyType');
  const squareFeetMin = searchParams.get('squareFeetMin') as string;
  const squareFeetMax = searchParams.get('squareFeetMax') as string;
  const amenities = searchParams.getAll('amenities');
  const latitude = searchParams.get('latitude') as string;
  const longitude = searchParams.get('longitude') as string;
  const limit = searchParams.get('limit') as string;
  const page = searchParams.get('page') as string;
  const city = searchParams.get('city') as string;
  const country = searchParams.get('country') as string;
  const polygon = searchParams.get('polygon') as string;

  const result = await getProperties({
    priceMin,
    priceMax,
    baths,
    beds,
    propertyType,
    squareFeetMin,
    squareFeetMax,
    city,
    amenities,
    limit,
    page,
    latitude,
    longitude,
    country,
    polygon,
  });
  return NextResponse.json({
    status: 200,
    data: result,
  });
}

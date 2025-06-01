/* eslint-disable @typescript-eslint/no-explicit-any */
import { deletePropertyById, getSingleProperty } from '@/lib/db';
import prisma from '@/lib/prisma';

import { uploadToCloudinary } from '@/lib/uploadOnCloudinary';
import { getCoordinatesFromLocation } from '@/utils';
import { NextRequest, NextResponse } from 'next/server';
import { Location } from '@/models';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ propertyId: string }> }
) {
  const params = await context.params;

  const { propertyId } = params;

  if (!propertyId) {
    return NextResponse.json({
      status: 400,
      message: 'Bad request',
    });
  }
  const property = await getSingleProperty(propertyId);
  return NextResponse.json({
    status: 200,
    data: property,
  });
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ propertyId: string }> }
) {
  const params = await context.params;

  const { propertyId } = params;

  if (!propertyId) {
    return NextResponse.json({
      status: 400,
      message: 'Bad request',
    });
  }
  try {
    await deletePropertyById(propertyId);
    return NextResponse.json({
      status: 200,
      message: `Property with id ${propertyId} is deleted successfully`,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error: error,
    });
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ propertyId: string }> }
) {
  const params = await context.params;

  const { propertyId } = params;

  if (!propertyId) {
    return NextResponse.json({
      status: 400,
      message: 'Bad request',
    });
  }
  try {
    const data = await request.formData();
    const file = data.get('image') as File;
    const location = JSON.parse(data.get('location') as string);
    const property = JSON.parse(data.get('property') as string);

    const { lng, lat } = await getCoordinatesFromLocation(location);
    const locationData = await Location.findById(property.locationId);
    if (!locationData) {
      throw new Error('Location data is not found');
    }
    locationData.address = location.address;
    locationData.city = location.city;
    locationData.country = location.country;
    locationData.state = location.state;
    locationData.location.coordinates = [lng, lat];
    await locationData.save();
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
    const newPropertyData = {
      ...property,
    };
    if (uploadResponse) {
      newPropertyData.photoUrLs = [uploadResponse?.secure_url];
    }
    const result = await prisma.property.update({
      where: {
        id: propertyId,
      },
      data: {
        ...newPropertyData,
        amenities: {
          set: [],
          create: amenities,
        },
        highLights: {
          set: [],
          create: highLights,
        },
        photoUrLs: newPropertyData.photoUrLs,
      },
      include: {
        amenities: true,
        highLights: true,
      },
    });
    return NextResponse.json({
      status: 200,
      message: 'Property is updated successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      error: error,
      message: error?.message as string,
    });
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  deletePropertyById,
  getSingleProperty,
  updateProperty,
} from '@/lib/db';
import { uploadToCloudinary } from '@/lib/uploadOnCloudinary';
import { NextRequest, NextResponse } from 'next/server';

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

    let uploadResponse;
    if (file) {
      uploadResponse = await uploadToCloudinary(file);
    }
    const newPropertyData = {
      ...property,
    };
    if (uploadResponse) {
      newPropertyData.photoUrLs = [uploadResponse?.secure_url];
    }
    const result = await updateProperty(
      {
        property: newPropertyData,
        location: location,
      },
      propertyId
    );
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

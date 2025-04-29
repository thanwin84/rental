import { getUserFromToken } from '@/lib/auth';
import { createLocation } from '@/lib/db/location';
import { createProperty } from '@/lib/db/property';
import { uploadToCloudinary } from '@/lib/uploadOnCloudinary';
import { apiResponse } from '@/utils/apiResponse';
import { getCoordinatesFromLocation } from '@/utils/location';
import { NextRequest, NextResponse } from 'next/server';

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

    const locationData = await createLocation({
      ...location,
      coordinates: [lng, lat],
    });
    const newProperty = await createProperty({
      ...property,
      locationId: locationData._id,
      ownerId: user.userId.toString(),
      photoUrLs: [uploadResponse?.secure_url as string],
    });

    return NextResponse.json(newProperty, { status: newProperty.status });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}

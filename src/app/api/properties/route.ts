import { getUserFromToken } from '@/lib/auth';
import { createLocation } from '@/lib/db/location';
import { createProperty } from '@/lib/db/property';
import { apiResponse } from '@/utils/apiResponse';
import { getCoordinatesFromLocation } from '@/utils/location';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { location, property } = reqBody;

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
    });

    return NextResponse.json(newProperty, { status: newProperty.status });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

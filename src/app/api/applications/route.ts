import { getAuthenticatedUser } from '@/lib/auth';
import { createApplication, getAllApplicationsForManger } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { propertyId } = await request.json();
  const user = await getAuthenticatedUser(request);

  if (!user) {
    return NextResponse.json({
      status: 401,
      message: 'You are not authorized',
    });
  }
  try {
    const application = await createApplication({
      userId: user.userId,
      propertyId,
    });
    return NextResponse.json({
      status: 201,
      data: application,
      message: 'Application is created successfully',
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 201,
      message: error.message,
    });
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  try {
    const applications = await getAllApplicationsForManger({ limit, page });
    return NextResponse.json({
      status: 200,
      data: applications,
      message: 'Applications retrieved successfully',
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      message: error.message || 'Error retrieving applications',
    });
  }
}

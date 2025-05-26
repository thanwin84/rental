/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAuthenticatedUser } from '@/lib/auth';
import { listApplications, updateApplicationStatus } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ applicationId: string }> }
) {
  const { applicationId } = await params;
  await getAuthenticatedUser();
  try {
    const application = await listApplications({ applicationId });
    return NextResponse.json({
      status: 200,
      data: application,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
}
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ applicationId: string }> }
) {
  const { applicationId } = await params;
  const reqBody = await request.json();
  await getAuthenticatedUser();
  try {
    const application = await updateApplicationStatus(
      applicationId,
      reqBody.status
    );
    return NextResponse.json({
      status: 200,
      data: application,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
}

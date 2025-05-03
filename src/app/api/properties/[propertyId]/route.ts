import { getSingleProperty } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  context: { params: { propertyId: string } }
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

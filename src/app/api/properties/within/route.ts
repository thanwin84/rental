import { getPropertiesWithinMapBounds } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const result = await getPropertiesWithinMapBounds(searchParams);
  return NextResponse.json({
    status: 200,
    data: result,
  });
}

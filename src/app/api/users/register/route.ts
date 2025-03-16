import { connectDb } from '@/db_connect/dbConnect';
import User from '@/models/user.model';
import { apiResponse } from '@/utils/apiResponse';
import { statusCodes } from '@/utils/statusCodes';
import { NextRequest, NextResponse } from 'next/server';

connectDb();

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const user = await User.findOne({ email: reqBody.email });
  if (user) {
    return NextResponse.json(
      apiResponse({ message: 'User is already registred', success: false }),
      { status: statusCodes.BAD_REQUEST }
    );
  }
  await User.create({ ...reqBody });
  return NextResponse.json(
    apiResponse({ message: 'User is registered successfully', success: true }),
    { status: statusCodes.CREATED }
  );
}

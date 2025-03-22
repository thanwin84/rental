import { connectDb } from '@/db_connect/dbConnect';
import User from '@/models/user.model';
import { apiResponse } from '@/utils/apiResponse';
import { statusCodes } from '@/utils/statusCodes';
import { NextRequest, NextResponse } from 'next/server';

connectDb();

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { username } = reqBody;
  const user = await User.findOne({ username });
  if (user) {
    return NextResponse.json(
      apiResponse({ success: true, message: 'This username already exists' }),
      { status: statusCodes.OK }
    );
  } else {
    return NextResponse.json(
      apiResponse({ success: false, message: 'This username is available' }),
      { status: statusCodes.OK }
    );
  }
}

import { connectDb } from '@/db_connect/dbConnect';
import User from '@/models/user.model';
import { apiResponse } from '@/utils/apiResponse';
import { statusCodes } from '@/utils/statusCodes';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { createSession } from '@/lib/session';

connectDb();
export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { email, password } = reqBody;
  const user = await User.findOne({ email: email });
  if (!user) {
    return NextResponse.json(
      apiResponse({
        success: false,
        message: 'User does not exist',
      }),
      { status: statusCodes.NOT_FOUND }
    );
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json(
      apiResponse({
        success: false,
        message: 'Wrong credentials',
      }),
      { status: statusCodes.BAD_REQUEST }
    );
  }
  await createSession(user._id, user.role);
  return NextResponse.json(
    apiResponse({
      success: true,
      message: 'User is logged in successfully',
      data: user,
    }),
    { status: statusCodes.OK }
  );
}

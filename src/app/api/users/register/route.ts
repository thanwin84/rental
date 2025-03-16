import { connectDb } from '@/db_connect/dbConnect';
import User from '@/models/user.model';
import { apiResponse } from '@/utils/apiResponse';
import { statusCodes } from '@/utils/statusCodes';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

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
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(reqBody.password, salt);
  await User.create({ ...reqBody, password: hashedPassword });
  return NextResponse.json(
    apiResponse({ message: 'User is registered successfully', success: true }),
    { status: statusCodes.CREATED }
  );
}

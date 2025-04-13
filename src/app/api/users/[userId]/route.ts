import { connectDb } from '@/db_connect/dbConnect';
import User from '@/models/user.model';
import { apiResponse } from '@/utils/apiResponse';
import { NextRequest, NextResponse } from 'next/server';

connectDb();
export async function PUT(
  req: NextRequest,
  context: { params: { userId: string } }
) {
  const { userId } = context.params;
  const reqBody = await req.json();
  if (!userId) {
    return NextResponse.json(
      apiResponse({
        success: false,
        message: 'User id is missing',
      }),
      { status: 400 }
    );
  }
  const user = await User.findByIdAndUpdate(
    userId,
    { $set: reqBody },
    { new: true, runValidators: true }
  );
  return NextResponse.json(
    apiResponse({
      success: true,
      data: user,
      message: 'Updated successfully',
    })
  );
}

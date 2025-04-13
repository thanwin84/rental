import { updateUserById } from '@/lib/db/user';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  req: NextRequest,
  context: { params: { userId: string } }
) {
  const { userId } = await context.params;
  const reqBody = await req.json();
  const updatedUserResule = await updateUserById(userId, reqBody);
  return NextResponse.json(updatedUserResule, {
    status: updatedUserResule.status,
  });
}

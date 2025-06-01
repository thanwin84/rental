/* eslint-disable @typescript-eslint/no-explicit-any */
import User from '@/models/user.model'; // Make sure the path is correct
import { apiResponse } from '@/utils/apiResponse';
import { connectDb } from '@/db_connect/dbConnect';
import prisma from '@/lib/prisma';
import { hashPassword, isPasswordValid } from '@/utils';
connectDb();

export const getUserById = async (id: string) => {
  try {
    if (!id) {
      return apiResponse({
        success: false,
        message: 'User ID is required',
        status: 400,
      });
    }

    const user = await prisma.user.findFirst({ where: { id } });

    if (!user) {
      return apiResponse({
        success: false,
        message: 'User not found',
        status: 404,
      });
    }

    return apiResponse({
      success: true,
      data: user,
      message: 'User id is fetched',
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    return apiResponse({
      success: false,
      message: 'Something went wrong while fetching user',
      status: 500,
    });
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) {
      throw new Error('User does not exist');
    }

    const correctPassword = await isPasswordValid(password, user.password);

    if (!correctPassword) {
      throw new Error('Wrong credentials');
    }
    return user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Internal server error');
    }
  }
};

export const updateUserById = async (userId: string, data: any) => {
  if (!userId) {
    return apiResponse({
      success: false,
      status: 400,
      message: 'User ID is missing',
    });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: data },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return apiResponse({
        success: false,
        status: 404,
        message: 'User not found',
      });
    }

    return apiResponse({
      success: true,
      status: 200,
      message: 'Updated successfully',
      data: updatedUser,
    });
  } catch (error) {
    console.error('Error updating user:', error);
    return apiResponse({
      success: false,
      status: 500,
      message: 'Something went wrong while updating user',
    });
  }
};

export const createUser = async (data: any) => {
  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ email: data.email }, { username: data.username }],
    },
  });
  if (existingUser) {
    throw new Error('User with this email or username already exists.');
  }

  data.password = await hashPassword(data.password);
  const user = await prisma.user.create({
    data: data,
  });
  return user;
};

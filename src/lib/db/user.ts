/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import User from '@/models/user.model'; // Make sure the path is correct
import { apiResponse } from '@/utils/apiResponse';
import { connectDb } from '@/db_connect/dbConnect';
import bcrypt from 'bcryptjs';
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

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return apiResponse({
        success: false,
        message: 'Invalid User ID',
        status: 400,
      });
    }

    const user = await User.findById(id).select('-password'); // Optional: exclude password

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
    const user = await User.findOne({ email });
    if (!user) {
      return apiResponse({
        success: false,
        status: 404,
        message: 'User does not exist',
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return apiResponse({
        success: false,
        status: 400,
        message: 'Wrong credentials',
      });
    }

    return apiResponse({
      success: true,
      status: 200,
      message: 'User is logged in successfully',
      data: user,
    });
  } catch {
    return apiResponse({
      success: false,
      status: 500,
      message: 'Internal server error',
    });
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

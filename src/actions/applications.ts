'use server';

import {
  createApplication,
  getAllApplicationsForManger,
  getListOfRentedPropertyId,
  getMyApplication,
  getMyApplications,
  getSingleApplicationForManager,
  updateApplicationStatus,
} from '@/lib/db';
import { verifySession } from '@/lib/session';
import { failure, success } from '@/utils';

export const createApplicationAction = async ({
  propertyId,
  startDate,
  endDate,
}: {
  propertyId: string;
  startDate: string;
  endDate: string;
}) => {
  const session = await verifySession();
  try {
    const application = await createApplication({
      userId: session.userId.toString(),
      propertyId: propertyId,
      startDate,
      endDate,
    });
    return success(JSON.parse(JSON.stringify(application)));
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    return failure(errorMessage, '500');
  }
};

export const getMyApplicationsAction = async ({
  page,
  limit,
}: {
  page?: number;
  limit?: number;
}) => {
  const session = await verifySession();
  try {
    const applications = await getMyApplications({
      userId: session.userId,
      page,
      limit,
    });
    return success(applications);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    return failure(errorMessage, '500');
  }
};

export const getMyApplicationAction = async (applicationId: string) => {
  await verifySession();
  try {
    const application = await getMyApplication(applicationId);
    return success(application);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    return failure(errorMessage, '500');
  }
};

export const getApplicationsAction = async ({
  limit,
  page,
}: {
  limit: number;
  page: number;
}) => {
  await verifySession();
  try {
    const applications = await getAllApplicationsForManger({ limit, page });
    return success(applications);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    return failure(errorMessage, '500');
  }
};

export const getApplicationAction = async (applicationId: string) => {
  await verifySession();
  try {
    const application = await getSingleApplicationForManager(applicationId);
    return success(application);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    return failure(errorMessage, '500');
  }
};

export const updateApplicationStatusAction = async (
  applicationId: string,
  status: string
) => {
  await verifySession();
  try {
    const applications = await updateApplicationStatus(applicationId, status);
    return success(applications);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    return failure(errorMessage, '500');
  }
};

export const getListOfRentedPropertyIdAction = async () => {
  const session = await verifySession();
  try {
    const ids = await getListOfRentedPropertyId({ userId: session.userId });
    return success(ids);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    return failure(errorMessage, '500');
  }
};

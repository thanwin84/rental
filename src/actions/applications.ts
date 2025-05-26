'use server';

import {
  createApplication,
  getListOfRentedPropertyId,
  listApplications,
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

export const listApplicationsAction = async ({
  page,
  limit,
}: {
  page?: number;
  limit?: number;
}) => {
  await verifySession();
  try {
    const applications = await listApplications({
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
export const listMyApplicationsAction = async ({
  page,
  limit,
}: {
  page?: number;
  limit?: number;
}) => {
  const session = await verifySession();
  try {
    const applications = await listApplications({
      page,
      limit,
      userId: session.userId,
    });
    return success(applications);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    return failure(errorMessage, '500');
  }
};

export const getApplicationByIdAction = async (applicationId: string) => {
  await verifySession();
  try {
    const applications = await listApplications({ applicationId });
    return success(applications.applications[0]);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    return failure(errorMessage, '500');
  }
};

export const updateApplicationByIdAction = async (
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

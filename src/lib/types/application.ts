import { ApplicationStatus } from '../constants';

export type ApplicationStatusKey = keyof typeof ApplicationStatus;
export type ApplicationStatusValue =
  (typeof ApplicationStatus)[ApplicationStatusKey];

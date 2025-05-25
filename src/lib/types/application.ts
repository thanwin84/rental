import { TLease } from './lease';
import { TProperty } from './property';
import { TUser } from './user';

export type TApplication = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  property: TProperty;
  lease: TLease;
  manager: TUser;
};
export type TManagerApplication = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  property: TProperty;
  lease: TLease;
  user: TUser;
};

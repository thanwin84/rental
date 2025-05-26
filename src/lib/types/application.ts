import { TLease } from './lease';
import { TProperty } from './property';
import { TUser } from './user';

export type PropertyLocation = {
  _id: string;
  city: string;
  country: string;
  state?: string;
  locaiton: {
    type: 'Point';
    coordinates: [number, number];
  };
  updatedAt: string;
  createdAt: string;
};
export type TApplication = {
  _id: string;
  status: string;
  property: TProperty & { location: PropertyLocation };
  lease: TLease;
  applicant: TUser;
  propertyOwner: TUser;
  createdAt: string;
  updatedAt: string;
};
export type TManagerApplication = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  property: TProperty & { location: PropertyLocation };
  lease: TLease;
  user: TUser;
};

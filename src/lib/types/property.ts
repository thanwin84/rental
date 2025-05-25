import { Types } from 'mongoose';
import { Pagination } from '.';
import { amenity, highlight, propertyType } from '../constants';
export type HighlightType = keyof typeof highlight;
export type HighlightValue = (typeof highlight)[HighlightType];
export type AmenityType = keyof typeof amenity;
export type AmenityValue = (typeof amenity)[AmenityType];
export type PropertyTypeKey = keyof typeof propertyType;
export type PropertyTypeValue = (typeof propertyType)[PropertyTypeKey];

export interface IProperty {
  _id?: Types.ObjectId;
  name: string;
  description: string;
  pricePerMonth: number;
  securityDeposit?: number;
  applicationFee?: number;
  photoUrLs?: string[];
  amenities?: string[];
  highLights?: string[];
  isParkingIncluded?: boolean;
  beds: number;
  baths: number;
  squareFeet?: number;
  propertyType: string;
  averageRating?: number;
  numberOfReviews?: number;
  locationId: Types.ObjectId;
  ownerId: Types.ObjectId;
  isAvailable?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
export type TProperty = {
  _id: string;
  name: string;
  description: string;
  pricePerMonth: number;
  securityDeposit?: number;
  applicationFee?: number;
  photoUrLs: string[];
  amenities: AmenityType[];
  highLights: HighlightType[];
  isParkingIncluded: boolean;
  beds: number;
  baths: number;
  squareFeet?: number;
  propertyType: PropertyTypeKey;
  averageRating: number;
  numberOfReviews: number;
  locationId: string;
  isAvailable: boolean;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
};

export type Location = {
  coordinates: [number, number];
  city: string;
  country: string;
  address?: string;
  state?: string;
};

export type PropertyListApiResponse = {
  properties: { property: TProperty; location: Location }[];
  pagination: Pagination;
};
export type PropertyOnMap = {
  _id: string;
  city: string;
  country: string;
  coordinates: [number, number];
  property: {
    _id: string;
    name: string;
    pricePerMonth: string;
  };
};

export type SingleProperTy = { property: TProperty; location: Location };

export type FavouritePropertyResponse = {
  properties: Omit<TProperty, 'propertyId'> &
    {
      location: Omit<Location, 'property'>;
    }[];
  pagination: Pagination;
};

export type FavouriteIdListApiReponse = { favouritesIdList: string[] };

export type FavouriteProperty = {
  _id: string;
  propertyId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

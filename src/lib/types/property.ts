import { Pagination } from '.';
import { amenity, highlight, propertyType } from '../constants';
export type HighlightType = keyof typeof highlight;
export type HighlightValue = (typeof highlight)[HighlightType];
export type AmenityType = keyof typeof amenity;
export type AmenityValue = (typeof amenity)[AmenityType];
export type PropertyTypeKey = keyof typeof propertyType;
export type PropertyTypeValue = (typeof propertyType)[PropertyTypeKey];

export type Property = {
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
  properties: { property: Property; location: Location }[];
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

export type SingleProperTy = Omit<Property, 'locationId'> & {
  location: Omit<Location, 'property'>;
};

export type FavouritePropertyResponse = {
  properties: Omit<Property, 'propertyId'> &
    {
      location: Omit<Location, 'property'>;
    }[];
  pagination: Pagination;
};

export type FavouriteIdListApiReponse = { favouritesIdList: string[] };

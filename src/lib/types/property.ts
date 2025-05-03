import { Pagination } from '.';
import { amenity, highlight, propertyType } from '../constants';
export type HighlightType = keyof typeof highlight;
export type HighlightValue = (typeof highlight)[HighlightType];
export type AmenityType = keyof typeof amenity;
export type AmenityValue = (typeof amenity)[AmenityType];
export type PropertyTypeKey = keyof typeof propertyType;
export type PropertyTypeValue = (typeof propertyType)[PropertyTypeKey];

export interface Property {
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
  ownerId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Location {
  _id: string;
  propertyId: string;
  address?: string;
  city: string;
  state?: string;
  country: string;
  location: {
    type: 'Point';
    coordinates: [number, number]; // [longitude, latitude]
  };
  createdAt: string;
  updatedAt: string;
  distance: number;
  property: Property;
}

export type LocationResponse = {
  properties: Location[];
  pagination: Pagination;
};

export type SingleProperTy = Property & {
  location: Omit<Location, 'property'>;
};

import { amenity, highlight, propertyType } from '../constants';
export type HighlightType = keyof typeof highlight;
export type HighlightValue = (typeof highlight)[HighlightType];
export type AmenityType = keyof typeof amenity;
export type AmenityValue = (typeof amenity)[AmenityType];
export type PropertyTypeKey = keyof typeof propertyType;
export type PropertyTypeValue = (typeof propertyType)[PropertyTypeKey];

import { Bed, Home, Building2, Landmark, HomeIcon, Castle } from 'lucide-react';
import { propertyType } from '../constants';

export const propertyTypeIcons: Record<
  keyof typeof propertyType,
  React.ReactNode
> = {
  Rooms: <Bed size={18} />,
  Tinyhouse: <HomeIcon size={18} />,
  Apartment: <Building2 size={18} />,
  Villa: <Landmark size={18} />,
  Townhouse: <Home size={18} />,
  Cottage: <Castle size={18} />,
};

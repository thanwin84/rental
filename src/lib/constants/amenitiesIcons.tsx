import {
  Wind,
  UtensilsCrossed,
  Wifi,
  Armchair,
  Ruler,
  Zap,
  Refrigerator,
  Waves,
  Dumbbell,
  Car,
  PawPrint,
  Router,
  Droplets,
} from 'lucide-react';
import { amenity } from '../constants';

export const amenityIcons: Record<keyof typeof amenity, React.ReactNode> = {
  WasherDryer: <Droplets size={20} />, // 💡 best visual metaphor: water/drying
  AirConditioning: <Wind size={20} />,
  Dishwasher: <UtensilsCrossed size={20} />,
  HighSpeedInternet: <Router size={20} />,
  HardwoodFloors: <Armchair size={20} />, // still good visual cue for interiors
  WalkInClosets: <Ruler size={20} />, // represents room space
  Microwave: <Zap size={20} />, // electrical appliance
  Refrigerator: <Refrigerator size={20} />,
  Pool: <Waves size={20} />,
  Gym: <Dumbbell size={20} />,
  Parking: <Car size={20} />,
  PetsAllowed: <PawPrint size={20} />,
  WiFi: <Wifi size={20} />,
};

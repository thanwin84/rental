import {
  getCoordinatesFromLocation,
  GetCoordinatesFromLocationType,
} from '@/utils';
import MapView from './MapView';

type Props = {
  className?: string;
  city: string;
  country: string;
};

export default async function MapContainer({ city, country }: Props) {
  const location: GetCoordinatesFromLocationType = {
    city: (city as string) || 'dhaka',
    country: (country as string) || 'Bangladesh',
  };
  const { lat, lng } = await getCoordinatesFromLocation(location);

  return (
    <MapView
      className='fixed h-screen bg-gray-200'
      centerCoordinates={[lat, lng]}
    />
  );
}

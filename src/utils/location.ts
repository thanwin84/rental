import { config } from '@/config';
import { Location } from '@/lib/schemas/location';
import axios from 'axios';

export async function getCoordinatesFromLocation(location: Location) {
  const parts = [
    location.address,
    location.city,
    location.state,
    location.country,
  ].filter(Boolean);
  const flatLocation = parts.join(', ');
  try {
    const response = await axios.get(
      'https://api.opencagedata.com/geocode/v1/json',
      {
        params: {
          q: flatLocation,
          key: config.OPENCAGE_API_KEY,
        },
      }
    );

    const data = response.data;
    if (data?.results?.length > 0) {
      const { lat, lng } = data.results[0].geometry;
      return { lat, lng };
    } else {
      throw new Error('No coordinates found for the location');
    }
  } catch (error: any) {
    throw new Error(`Geocoding failed: ${error.message}`);
  }
}

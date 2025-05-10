import {
  FiltersBar,
  MapView,
  PropertyListing,
} from '@/app/(nondashboard)/properties/search/components';
import { propertyService } from '@/lib/services';
import { createPropertyQueryString } from '@/utils';
import {
  getCoordinatesFromLocation,
  GetCoordinatesFromLocationType,
} from '@/utils';

type Props = {
  searchParams: Record<string, string | string[] | undefined>;
};
export default async function Search({ searchParams }: Props) {
  const params = await searchParams;
  const {
    city,
    country,
    priceMax,
    priceMin,
    beds,
    baths,
    amenities,
    propertyType,
  } = params;

  const { properties, pagination } = await propertyService.getProperties(
    createPropertyQueryString({
      city: city as string,
      country: country as string,
      priceMax: priceMax as string,
      priceMin: priceMin as string,
      baths: baths as string,
      beds: beds as string,
      amenities: amenities as string[],
      propertyType: propertyType as string[],
    })
  );

  const location: GetCoordinatesFromLocationType = {
    city: (city as string) || 'dhaka',
    country: (country as string) || 'Bangladesh',
  };
  const centerMapLocationCoordinates = await getCoordinatesFromLocation(
    location
  );

  return (
    <div className='w-full relative'>
      <FiltersBar className='fixed z-10 top-15' />
      <div className='w-full flex mt-14 h-screen'>
        <div className=' relative ml-2 '>
          <MapView
            centerCoordinates={[
              centerMapLocationCoordinates.lat,
              centerMapLocationCoordinates.lng,
            ]}
            properties={properties}
            className='  fixed h-screen  bg-gray-200   '
          />
        </div>
        <div className='w-[30%]  ml-auto'>
          <PropertyListing
            properties={properties}
            pagination={pagination}
            className='w-full'
          />
        </div>
      </div>
    </div>
  );
}

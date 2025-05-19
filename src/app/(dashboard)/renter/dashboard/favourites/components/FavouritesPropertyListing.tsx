import { PropertyCard } from '@/app/(nondashboard)/properties/search/components';
import { PropertyListApiResponse } from '@/lib/types';

type Props = {
  className?: string;
  propertyListData: PropertyListApiResponse;
};

export default function FavouritesPropertyListing({ propertyListData }: Props) {
  const { properties } = propertyListData;
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 p-4'>
      {properties.map((property) => (
        <PropertyCard
          id={property.property._id}
          key={property.property._id}
          title={property.property.name}
          rating={property.property.averageRating}
          pricePerMonth={property.property.pricePerMonth}
          imgSrc={property.property.photoUrLs[0]}
          beds={property.property.beds}
          baths={property.property.baths}
          reviewsCount={property.property.numberOfReviews}
          location={`${property.location.city}, ${property.location.country}`}
        />
      ))}
    </div>
  );
}

import { PropertyCard } from '@/app/(nondashboard)/properties/search/components';
import { GetPropertiesType } from '@/lib/types';

type Props = {
  className?: string;
  propertyListData: GetPropertiesType;
};

export default function FavouritesPropertyListing({ propertyListData }: Props) {
  const { properties } = propertyListData;
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 p-4'>
      {properties.map((property) => (
        <PropertyCard
          id={property.id}
          key={property.id}
          title={property.name}
          rating={property.averageRating}
          pricePerMonth={property.pricePerMonth}
          imgSrc={property.photoUrls[0]}
          beds={property.beds}
          baths={property.baths}
          reviewsCount={property.numberOfReviews}
          location={`${'sample'}, ${'bangladesh'}`}
        />
      ))}
    </div>
  );
}

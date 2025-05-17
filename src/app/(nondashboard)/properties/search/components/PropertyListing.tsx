import { propertyService } from '@/lib/services';
import { createPropertyQueryString } from '@/utils';
import PropertyCard from './PropertyCard';
import PropertyListingPagination from './PropertyListingPagination';

type Props = {
  className?: string;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function PropertyListing({
  className,
  searchParams,
}: Props) {
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
    polygon,
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
      polygon: polygon as string,
    })
  );

  const { totalItems, totalPages, currentPage } = pagination;
  if (properties.length === 0) {
    return (
      <div className='text-center mt-10 text-gray-500'>
        <p className='text-lg font-semibold'>No properties found</p>
        <p className='text-sm'>Try adjusting your search or filters.</p>
      </div>
    );
  }
  return (
    <div className={`${className}`}>
      {polygon ? (
        <h2 className='mb-2 text-slate-700'>
          {totalItems} places in this area.
        </h2>
      ) : (
        <h2 className='mb-2 text-slate-700'>
          {totalItems} places in {city}, {country}
        </h2>
      )}
      {properties?.map((property) => (
        <PropertyCard
          className='mb-2'
          key={property._id}
          title={property.property.name}
          location='Dhaka, Bangladesh'
          rating={property.property.averageRating}
          reviewsCount={property.property.numberOfReviews}
          pricePerMonth={property.property.pricePerMonth}
          imgSrc={property.property.photoUrLs[0]}
          beds={property.property.beds}
          baths={property.property.baths}
          id={property.property._id}
        />
      ))}
      <PropertyListingPagination
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
}

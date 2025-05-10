import PropertyCard from './PropertyCard';
import PropertyListingPagination from './PropertyListingPagination';
import { Location, Pagination } from '@/lib/types';

type Props = {
  className?: string;
  properties: Location[];
  pagination: Pagination;
};

export default function PropertyListing({
  className,
  properties,
  pagination,
}: Props) {
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
      <h2 className='mb-2 text-slate-700'>
        {totalItems} places in Dhaka, Bangladesh
      </h2>
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
          id={property._id}
        />
      ))}
      <PropertyListingPagination
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
}

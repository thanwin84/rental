'use client';
import PropertyCard from './PropertyCard';
import { useCallback, useEffect, useState } from 'react';
import PropertyLoadingSkeleton from './PropertyLoadingSkeleton';
import { useInView } from 'react-intersection-observer';
import { parsePropertySearchParams } from '@/utils';
import { getPropertiesAction } from '@/actions';
import { GetPropertiesType } from '@/lib/types';

type Props = {
  className?: string;
  propertyListData: GetPropertiesType;
  searchParams: Record<string, string | string[] | undefined>;
};

export default function PropertyListing({
  className,
  propertyListData,
  searchParams,
}: Props) {
  const [properties, setProperties] = useState(propertyListData.properties);
  const [hasMore, setHasMore] = useState<boolean>(
    propertyListData.pagination.totalPages > 0
  );
  const [page, setPage] = useState<number>(1);
  const [ref, inView] = useInView();
  const [isLoading, setIsLoading] = useState(false);
  const searchingOnMap = searchParams.polygon as string;
  const city = searchParams.city as string;
  const country = searchParams.country as string;

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    try {
      const params = parsePropertySearchParams(searchParams);
      const nextPage = page + 1;
      const data: GetPropertiesType = await getPropertiesAction({
        ...params,
        page: nextPage.toString(),
      });

      setProperties((prev) => [...prev, ...data.properties]);
      setHasMore(data.pagination.currentPage < data.pagination.totalPages);
      setPage(nextPage);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasMore, searchParams, page]);
  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView, loadMore]);

  return (
    <div className={`${className}`}>
      {searchingOnMap ? (
        <h2 className='mb-2 text-slate-700'>
          {propertyListData.pagination.totalItems} places in this area.
        </h2>
      ) : (
        <h2 className='mb-2 text-slate-700'>
          {propertyListData.pagination.totalItems} places in {city}, {country}
        </h2>
      )}
      {properties?.map((property) => (
        <PropertyCard
          className='mb-2'
          key={property.id}
          title={property.name}
          location='Dhaka, Bangladesh'
          rating={property.averageRating}
          reviewsCount={property.numberOfReviews}
          pricePerMonth={property.pricePerMonth}
          imgSrc={property.photoUrls[0]}
          beds={property.beds}
          baths={property.baths}
          id={property.id}
        />
      ))}
      {hasMore && (
        <div ref={ref}>
          <PropertyLoadingSkeleton />
        </div>
      )}
    </div>
  );
}

import { getFavouritePropertiesAction } from '@/app/actions';
import FavouritePropertyListingPagination from './FavouritePropertyListingPagination';
import FavouritesPropertyListing from './FavouritesPropertyListing';

type Props = {
  className?: string;
  searchParams: Record<string, string | string[] | undefined>;
};

export default async function PropertyListingContainer({
  searchParams,
}: Props) {
  const data = await getFavouritePropertiesAction({
    page: Number(searchParams.page || '1'),
  });

  return (
    <div>
      <FavouritesPropertyListing
        key={JSON.stringify(searchParams)}
        propertyListData={data}
      />
      <FavouritePropertyListingPagination pagination={data.pagination} />
    </div>
  );
}

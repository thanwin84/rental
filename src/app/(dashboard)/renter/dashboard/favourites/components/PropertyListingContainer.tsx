import { getFavouritePropertiesAction } from '@/actions';
import FavouritePropertyListingPagination from './FavouritePropertyListingPagination';
import FavouritesPropertyListing from './FavouritesPropertyListing';
import { EmptyState } from '@/components';

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
  if (data.properties.length === 0) {
    return (
      <EmptyState
        title='Favourite Properties'
        description='Your favourite properties will show up here when you mark a property as favourite.'
      />
    );
  }

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

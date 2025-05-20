import { getMyPropertiesAction } from '@/app/actions';
import PropertyListing from './PropertyListing';
import PropertyListingPagination from './PropertyListingPagination';

type Props = {
  className?: string;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function PropertyListingContainer({
  searchParams,
}: Props) {
  const _searchParams = await searchParams;
  const page = _searchParams.page as string;
  const limit = _searchParams.limit as string;
  const data = await getMyPropertiesAction({
    page,
    limit,
  });

  return (
    <div className='flex justify-between flex-col'>
      <PropertyListing propertyListData={data} />
      <PropertyListingPagination pagination={data.pagination} />
    </div>
  );
}

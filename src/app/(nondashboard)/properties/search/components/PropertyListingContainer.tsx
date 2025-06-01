import { parsePropertySearchParams } from '@/utils';
import PropertyListing from './PropertyListing';
import { getPropertiesAction } from '@/actions';

export default async function PropertyListingContainer({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const data = await getPropertiesAction(
    parsePropertySearchParams(searchParams)
  );

  return (
    <PropertyListing searchParams={searchParams} propertyListData={data} />
  );
}

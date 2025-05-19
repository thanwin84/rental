import { getProperties } from '@/lib/db';
import { parsePropertySearchParams } from '@/utils';
import PropertyListing from './PropertyListing';

export const dynamic = 'force-dynamic';
export default async function PropertyListingContainer({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const data = await getProperties(parsePropertySearchParams(searchParams));

  return (
    <PropertyListing searchParams={searchParams} propertyListData={data} />
  );
}

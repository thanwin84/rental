import PropertyListingContainer from './components/PropertyListingContainer';
import { Suspense } from 'react';

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function FavouritesPage({ searchParams }: Props) {
  const _searchParams = await searchParams;
  return (
    <Suspense
      key={JSON.stringify(_searchParams)}
      fallback={
        <div className='flex items-center justify-center h-screen '>
          <div className='text-lg font-semibold text-blue-800'>
            Loading favourites...
          </div>
        </div>
      }
    >
      <PropertyListingContainer searchParams={_searchParams} />
    </Suspense>
  );
}

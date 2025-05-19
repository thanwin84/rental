import {
  FiltersBar,
  FilterSidebar,
  PropertyListingSkeleton,
} from '@/app/(nondashboard)/properties/search/components';
import { Suspense } from 'react';
import MapContainer from './components/MapContainer';
import { SidebarProvider } from '@/components/ui/sidebar';
import PropertyListingContainer from './components/PropertyListingContainer';

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Search({ searchParams }: Props) {
  const _searchParams = await searchParams;
  const { city, country } = _searchParams;

  return (
    <SidebarProvider>
      <FilterSidebar className='mt-6' />
      <div className='w-full relative'>
        <FiltersBar className='fixed z-10 top-15' />
        <div className='w-full flex mt-14 h-screen'>
          <div className=' relative ml-2 '>
            <Suspense
              fallback={
                <div className='fixed h-screen bg-gray-100 flex items-center justify-center'>
                  Loading map...
                </div>
              }
            >
              <MapContainer city={city as string} country={country as string} />
            </Suspense>
          </div>
          <div className='w-[30%]  ml-auto'>
            <Suspense
              key={JSON.stringify(_searchParams)}
              fallback={<PropertyListingSkeleton />}
            >
              <PropertyListingContainer searchParams={_searchParams} />
            </Suspense>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

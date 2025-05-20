import { Suspense } from 'react';
import {
  PropertyListingContainer,
  PropertyListingSkeleton,
} from './components';

type Props = {
  className?: string;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function PropertiesPage({ searchParams }: Props) {
  return (
    <div className=' min-h-screen relative'>
      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={<PropertyListingSkeleton />}
      >
        <PropertyListingContainer searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

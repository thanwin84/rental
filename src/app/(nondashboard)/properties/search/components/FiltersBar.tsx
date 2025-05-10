'use client';

import { SearchBar } from '.';
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';
import { ListFilter } from 'lucide-react';
import CustomSelect from './CustomSelect';
import { Filter, usePropertyStore } from '@/lib/store';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Props = {
  className?: string;
};

export const bedroomOptions = [
  { value: 'any', label: 'Any beds' },
  { value: 1, label: '1+ beds' },
  { value: 2, label: '2+ beds' },
  { value: 3, label: '3+ beds' },
  { value: 4, label: '4+ beds' },
  { value: 5, label: '5+ beds' },
];
export const bathroomOptions = [
  { value: 'any', label: 'Any baths' },
  { value: 1, label: '1+ baths' },
  { value: 2, label: '2+ baths' },
  { value: 3, label: '3+ baths' },
  { value: 4, label: '4+ baths' },
];
export default function FiltersBar({ className }: Props) {
  const { toggleSidebar } = useSidebar();
  const { setFilter, filterState } = usePropertyStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  function handleSelectChange(key: keyof Filter, value: string) {
    setFilter(key, value);
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.push(`${pathName}?${params.toString()}`);
  }

  return (
    <div className={`flex gap-3 p-2 bg-white ${className}`}>
      <Button
        variant='outline'
        className='hover:bg-stone-900 hover:text-slate-100 cursor-pointer'
        onClick={toggleSidebar}
      >
        <ListFilter /> All Filters
      </Button>
      <SearchBar />
      <CustomSelect
        selectedOption={filterState.beds as string}
        onValueChange={(value) => handleSelectChange('beds', value)}
        options={bedroomOptions}
      />
      <CustomSelect
        selectedOption={filterState.baths as string}
        onValueChange={(value) => handleSelectChange('baths', value)}
        options={bathroomOptions}
      />
    </div>
  );
}

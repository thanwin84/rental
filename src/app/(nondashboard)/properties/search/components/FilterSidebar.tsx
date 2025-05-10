'use client';
import { usePropertyStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Sidebar, SidebarContent } from '@/components/ui/sidebar';
import AmenityFilter from './AmenityFilter';
import PriceRangeSlider from './PriceRangeSlider';
import PropertyFilter from './PropertyFilter';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Props = {
  className?: string;
};

export default function FilterSidebar({}: Props) {
  const { filterState, setFilter, clearFilter } = usePropertyStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  function handlePropertiesSelect(value: string) {
    const prevSelectedItems = filterState.propertyType;
    const newSelectedItems = prevSelectedItems.includes(value)
      ? prevSelectedItems.filter((item) => item !== value)
      : [...prevSelectedItems, value];

    setFilter('propertyType', newSelectedItems);
  }
  function handleAmenitiesSelect(value: string) {
    const prevSelectedItems = filterState.amenities;
    const newSelectedItems = prevSelectedItems.includes(value)
      ? prevSelectedItems.filter((item) => item !== value)
      : [...prevSelectedItems, value];

    setFilter('amenities', newSelectedItems);
  }
  function onApplyFilter() {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('propertyType');
    params.delete('amenities');
    params.delete('priceMin');
    params.delete('priceMax');
    if (filterState.propertyType.length > 0) {
      filterState.propertyType.forEach((item) => {
        params.append('propertyType', item);
      });
    }
    if (filterState.amenities.length > 0) {
      filterState.amenities.forEach((item) => {
        params.append('amenities', item);
      });
    }
    if (filterState.minPrice) {
      params.append('priceMin', filterState.minPrice.toString());
    }
    if (filterState.maxPrice) {
      params.append('priceMax', filterState.maxPrice.toString());
    }
    router.push(`${pathName}?${params.toString()}`);
  }
  function handleClearFilter() {
    clearFilter();
    router.push(pathName);
  }
  return (
    <Sidebar className='top-14  bg-white'>
      <SidebarContent className='px-4 py-6 space-y-8 bg-white text-slate-700'>
        <div className='flex gap-2'>
          <Button onClick={onApplyFilter} className='cursor-pointer'>
            Apply
          </Button>
          <Button
            onClick={handleClearFilter}
            className='cursor-pointer'
            variant='outline'
          >
            Clear All
          </Button>
        </div>
        <PropertyFilter
          onClickCell={handlePropertiesSelect}
          selectedItems={filterState.propertyType}
        />
        <PriceRangeSlider
          defaultValue={[filterState.minPrice, filterState.maxPrice]}
        />
        <AmenityFilter
          onClickCell={handleAmenitiesSelect}
          selectedItems={filterState.amenities}
        />
      </SidebarContent>
    </Sidebar>
  );
}

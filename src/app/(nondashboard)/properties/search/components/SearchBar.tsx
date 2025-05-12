'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { usePropertyStore } from '@/lib/store';
import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function SearchBar({ className }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { filterState, setFilter } = usePropertyStore();

  function handleChange(value: string) {
    setFilter('location', value);
  }

  function handleSearch() {
    const params = new URLSearchParams(searchParams.toString());
    if (filterState.location) {
      const [city, country] = filterState.location.split(',');
      params.set('city', city.trim());
      params.set('country', country.trim());
      params.delete('polygon');
      setFilter('polygon', '');
    } else {
      params.delete('city');
      params.delete('country');
    }

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className={`flex border rounded-md bg-white ${className}`}>
      <Input
        placeholder='Search city or country'
        style={{ outline: 'none', boxShadow: 'none' }}
        className='border-none'
        value={filterState.location}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      <Button
        onClick={handleSearch}
        className='bg-white hover:bg-white cursor-pointer border'
      >
        <Search className='text-slate-800' size={14} />
      </Button>
    </div>
  );
}

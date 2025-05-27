'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { usePropertyStore } from '@/lib/store';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar({ className }: { className?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setFilter } = usePropertyStore();
  const [localLocation, setLocalLocation] = useState('');

  function handleChange(value: string) {
    setLocalLocation(value);
    setFilter('location', value);
  }

  function handleSearch() {
    const params = new URLSearchParams(searchParams.toString());

    if (localLocation) {
      const [city, country] = localLocation.split(',');
      if (city && country) {
        params.set('city', city.trim());
        params.set('country', country.trim());
      }
      params.delete('polygon');
      setFilter('polygon', '');
    } else {
      params.delete('city');
      params.delete('country');
    }

    router.push(`/properties/search?${params.toString()}`);
  }

  return (
    <div className={`flex border rounded-md bg-white ${className}`}>
      <Input
        placeholder='e.g. Dhaka, Bangladesh'
        style={{ outline: 'none', boxShadow: 'none' }}
        className='border-none'
        value={localLocation}
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

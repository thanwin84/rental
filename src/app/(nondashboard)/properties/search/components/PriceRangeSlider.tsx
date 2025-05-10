'use client';

import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { usePropertyStore } from '@/lib/store';

type Props = {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: [number, number];
  onChange?: (value: [number, number]) => void;
};

export default function PriceRangeSlider({
  min = 0,
  max = 50000,
  step = 500,
}: Props) {
  const {
    filterState: { maxPrice, minPrice },
    setFilter,
  } = usePropertyStore();

  const handleChange = (value: number[]) => {
    const newRange = [value[0], value[1]] as [number, number];
    setFilter('minPrice', newRange[0]);
    setFilter('maxPrice', newRange[1]);
    console.log(newRange);
  };

  return (
    <div className='space-y-3'>
      <h4 className='text-slate-800 font-semibold'>Price Range</h4>
      <div className='text-sm text-muted-foreground'>
        ${minPrice} – ${maxPrice}
      </div>
      <Slider
        min={min}
        max={max}
        step={step}
        value={[minPrice, maxPrice]}
        onValueChange={handleChange}
        className='w-full'
      />
      <div className='flex justify-between gap-4'>
        <div className='flex flex-col gap-2'>
          <Label>Min Price</Label>
          <Input
            value={minPrice}
            inputMode='numeric'
            onChange={(e) => {
              setFilter('minPrice', e.target.value);
            }}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Label>Max Price</Label>
          <Input
            inputMode='numeric'
            value={maxPrice}
            onChange={(e) => {
              setFilter('maxPrice', e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

'use client';
import { Bath, Bed, Heart, Star, Waves } from 'lucide-react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Link from 'next/link';
import { usePropertyStore } from '@/lib/store';

type Props = {
  className?: string;
  title: string;
  location: string;
  rating: number;
  reviewsCount: number;
  pricePerMonth: number;
  imgSrc: string;
  beds: number;
  baths: number;
  pools?: number;
  id: string;
};

export default function PropertyCard({
  title,
  location,
  rating,
  reviewsCount,
  pricePerMonth,
  imgSrc,
  className,
  beds,
  baths,
  pools = 0,
  id,
}: Props) {
  const { favouriteIds, toggleFavourite } = usePropertyStore();
  function handleOnToggleFavouriteId(id: string) {
    toggleFavourite(id);
  }
  return (
    <Card
      className={` overflow-hidden border shadow-sm p-4 rounded-md ${className}`}
    >
      <CardHeader className='p-0 relative h-40'>
        <Image
          src={imgSrc}
          alt={title}
          fill
          className='object-cover'
          sizes='100vw'
        />
        <button
          onClick={() => handleOnToggleFavouriteId(id)}
          className='absolute cursor-pointer top-2 right-2 z-10 bg-white/80 rounded-full p-1 hover:bg-white transition'
        >
          {favouriteIds.includes(id) ? (
            <Heart fill=' #f6339a' className='text-pink-500  w-5 h-5' />
          ) : (
            <Heart className='text-pink-500  w-5 h-5' />
          )}
        </button>
      </CardHeader>

      <CardContent className='px-4 pt-3 pb-2 space-y-1'>
        <Link href={`/properties/${id}`}>
          <h3 className='text-base font-semibold text-slate-800 hover:underline'>
            {title}
          </h3>
        </Link>
        <p className='text-sm text-muted-foreground'>{location}</p>
        <div className='flex justify-between items-center mt-1'>
          <div className='flex items-center gap-1 text-yellow-500 text-sm'>
            <Star className='w-4 h-4 fill-yellow-500' />
            <span>{rating}</span>
            <span className='text-xs text-muted-foreground'>
              ({reviewsCount})
            </span>
          </div>
          <div className='text-right'>
            <span className='text-base font-semibold text-slate-800'>
              ${pricePerMonth}
            </span>
            <span className='text-xs text-muted-foreground'> /night</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className='flex justify-between px-4 pb-4 pt-2 text-sm text-muted-foreground'>
        <div className='flex items-center gap-1'>
          <Bed size={16} />
          <span>{beds} Beds</span>
        </div>
        <div className='flex items-center gap-1'>
          <Bath size={16} />
          <span>{baths} Baths</span>
        </div>
        {pools > 0 && (
          <div className='flex items-center gap-1'>
            <Waves size={16} />
            <span>Pool</span>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

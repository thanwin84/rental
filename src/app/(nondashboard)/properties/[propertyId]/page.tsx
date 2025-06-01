import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Star, BedDouble, Bath, Car, Ruler } from 'lucide-react';
import { getSingleProperty } from '@/lib/db';
import { amenityIcons } from '@/lib/constants/amenitiesIcons';
import { Suspense } from 'react';
import { PropertyDetailsSkeleton } from './components';
import RentButton from './components/RentButton';

export default async function PropertyDetails({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) {
  const { propertyId } = await params;
  const property = await getSingleProperty(propertyId);

  return (
    <Suspense fallback={<PropertyDetailsSkeleton />}>
      <div className='max-w-5xl mx-auto p-6 space-y-6'>
        {/* Title */}
        <div className='space-y-2'>
          <h1 className='text-3xl font-bold'>{property.name}</h1>
          <div className='flex items-center gap-2 text-sm text-muted-foreground'>
            <Star className='h-4 w-4 text-yellow-500' />
            <span>
              {property.averageRating} ({property.numberOfReviews} reviews)
            </span>
          </div>
        </div>

        {/* Images */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {property.photoUrls?.map((url, i) => (
            <Image
              key={i}
              src={url}
              alt={`Property image ${i + 1}`}
              width={500}
              height={300}
              className='rounded-2xl shadow-md object-cover w-full h-64'
            />
          ))}
        </div>

        {/* Main Details */}
        <Card>
          <CardContent className='p-6 space-y-4'>
            <div className='flex justify-between items-center'>
              <p className='text-xl font-semibold'>
                ${property.pricePerMonth}/month
              </p>
              <Badge variant={property.isAvailable ? 'default' : 'destructive'}>
                {property.isAvailable ? 'Available' : 'Not Available'}
              </Badge>
            </div>

            <Separator />

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground'>
              <div className='flex items-center gap-2'>
                <BedDouble className='h-4 w-4' />
                {property.beds} Beds
              </div>
              <div className='flex items-center gap-2'>
                <Bath className='h-4 w-4' />
                {property.baths} Baths
              </div>
              <div className='flex items-center gap-2'>
                <Ruler className='h-4 w-4' />
                {property.squareFeet ?? '--'} sqft
              </div>
              <div className='flex items-center gap-2'>
                <Car className='h-4 w-4' />
                {property.isParkingIncluded ? 'Parking Included' : 'No Parking'}
              </div>
            </div>

            <Separator />

            <div>
              <h2 className='text-lg font-medium mb-2'>Description</h2>
              <p>{property.description}</p>
            </div>

            <div>
              <h2 className='text-lg font-medium mb-2'>Amenities</h2>
              <div className='flex flex-wrap gap-2'>
                {property.amenities?.map((item) => (
                  <div
                    key={item}
                    className='flex items-center gap-2 px-3 py-2 rounded-full bg-muted text-sm text-muted-foreground shadow-sm'
                  >
                    <span className='text-primary'>
                      {amenityIcons[item as keyof typeof amenityIcons]}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className='text-lg font-medium mb-2'>Highlights</h2>
              <ul className='list-disc list-inside space-y-1 text-sm'>
                {property.highLights?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <Separator />

            <div className='space-y-1 text-sm'>
              <p>Security Deposit: ${property.securityDeposit ?? 0}</p>
              <p>Application Fee: ${property.applicationFee ?? 0}</p>
              <p>Type: {property.propertyType}</p>
            </div>
          </CardContent>
          <CardFooter>
            <RentButton propertyId={propertyId} />
          </CardFooter>
        </Card>
      </div>
    </Suspense>
  );
}

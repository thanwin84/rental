import LeaseStatusBadge from '@/app/(dashboard)/manager/dashboard/applications/components/LeaseStatus';
import { LeaseStatus } from '@/lib/types';
import { TApplication } from '@/lib/types/application';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { parseISO, differenceInMonths, format } from 'date-fns';
import { MapPin, DollarSign } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  className?: string;
  application: TApplication;
  userType: 'tanent' | 'manager';
};

export default function ApplicationCardInfo({ application, userType }: Props) {
  const { property, lease, applicant, propertyOwner } = application;
  const start = parseISO(lease.startDate.toISOString());
  const end = parseISO(lease.endDate.toISOString());
  const months = differenceInMonths(end, start);

  return (
    <div className='py-2 px-6'>
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 items-start'>
        <div className='relative w-full sm:w-24 md:w-32 lg:w-40 h-32 sm:h-20 md:h-24 lg:h-32 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-800'>
          <Image
            alt={property.name}
            src={property.photoUrLs[0]}
            fill
            className='object-cover'
          />
        </div>

        <div className='w-[30%] min-w-0 space-y-2 sm:space-y-3'>
          <div>
            <Link href={`/properties/${property._id}`}>
              <h3 className='text-base hover:underline hover:text-blue-500 sm:text-lg font-semibold text-slate-900 dark:text-slate-100 truncate'>
                {property.name}
              </h3>
            </Link>
            <div className='flex items-center text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1'>
              <MapPin className='w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 flex-shrink-0' />
              <span className='truncate'>
                {property.location.city}, {property.location.country}
              </span>
            </div>
          </div>

          <div className='flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-4'>
            <div className='flex items-center text-slate-900 dark:text-slate-100'>
              <DollarSign className='w-4 h-4 text-green-600 mr-1' />
              <span className='font-semibold text-base sm:text-lg'>
                ${property.pricePerMonth}
              </span>
              <span className='text-slate-500 text-xs sm:text-sm ml-1'>
                /mo
              </span>
            </div>
            <div className='text-xs sm:text-sm text-slate-500 dark:text-slate-400'>
              {months} month lease
            </div>
          </div>
        </div>

        <div className='w-full sm:w-auto sm:min-w-[140px] md:w-48 space-y-2 sm:space-y-3 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-700 pt-4 sm:pt-0 sm:pl-4 md:pl-6'>
          <div className='flex items-center justify-between'>
            <span className='text-xs sm:text-sm text-slate-600 dark:text-slate-400'>
              Status:
            </span>
            <LeaseStatusBadge
              status={application.lease.status as LeaseStatus}
            />
          </div>

          <div className='space-y-1.5 sm:space-y-2 text-xs sm:text-sm'>
            <div className='flex justify-between items-center'>
              <span className='text-slate-600 dark:text-slate-400'>Start:</span>
              <span className='text-slate-900 dark:text-slate-100 font-medium'>
                {format(lease.startDate, 'MMM yyyy')}
              </span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-slate-600 dark:text-slate-400'>End:</span>
              <span className='text-slate-900 dark:text-slate-100 font-medium'>
                {format(lease.endDate, 'MMM yyyy')}
              </span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-slate-600 dark:text-slate-400'>
                Next Payment:
              </span>
              <span className='text-slate-900 dark:text-slate-100 font-medium'>
                {format(lease.endDate, 'MMM yyyy')}
              </span>
            </div>
          </div>
        </div>

        <div className='w-full sm:w-auto sm:min-w-[120px] md:w-44 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-700 pt-4 sm:pt-0 sm:pl-4 md:pl-6'>
          <div className='text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2 hidden sm:block'>
            {userType === 'manager' ? 'Manager' : 'Tanent'}
          </div>

          <div className='flex sm:flex-col items-center sm:items-center gap-3 sm:gap-2 w-full'>
            <Avatar className='h-10 w-10 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 ring-2 ring-slate-200 dark:ring-slate-700 flex-shrink-0'>
              <AvatarImage
                src='https://github.com/shadcn.png'
                alt={`${
                  userType === 'tanent'
                    ? applicant.firstName
                    : propertyOwner.firstName
                } ${
                  userType === 'tanent'
                    ? applicant.lastName
                    : propertyOwner.lastName
                }`}
              />
              <AvatarFallback className='bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs sm:text-sm'>
                {userType === 'tanent'
                  ? applicant.firstName.charAt(0)
                  : propertyOwner.firstName.charAt(0)}
                {userType === 'tanent'
                  ? applicant.lastName.charAt(0)
                  : propertyOwner.lastName.charAt(0)}
              </AvatarFallback>
            </Avatar>

            <div className='flex-1 sm:text-center min-w-0'>
              <p className='font-medium text-slate-900 dark:text-slate-100 text-sm sm:text-xs md:text-sm truncate'>
                {userType === 'tanent'
                  ? applicant.firstName
                  : propertyOwner.firstName}{' '}
                {userType === 'tanent'
                  ? applicant.lastName
                  : propertyOwner.lastName}
              </p>
              <p className='text-xs text-slate-500 dark:text-slate-400 truncate'>
                {userType === 'tanent' ? applicant.email : propertyOwner.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

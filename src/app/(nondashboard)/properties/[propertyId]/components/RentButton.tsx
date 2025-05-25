'use client';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import RentPropertyForm from './RentPropertyForm';
import { useState } from 'react';
import { usePropertyStore } from '@/lib/store';

type Props = {
  className?: string;
  propertyId: string;
};

export default function RentButton({ propertyId }: Props) {
  const [open, setOpen] = useState(false);
  const { rentedPropertyIds } = usePropertyStore();
  const isRented = rentedPropertyIds.includes(propertyId);
  function toggleModal() {
    setOpen(!open);
  }
  return (
    <Dialog open={open} onOpenChange={toggleModal}>
      {isRented ? (
        <Button className='w-full' disabled={true}>
          You have rented this appartment
        </Button>
      ) : (
        <DialogTrigger asChild>
          <Button className='mt-4 cursor-pointer w-full'>
            Rent this property
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className='max-w-md w-full'>
        <RentPropertyForm closeModal={toggleModal} propertyId={propertyId} />
      </DialogContent>
    </Dialog>
  );
}

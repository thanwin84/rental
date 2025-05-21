import { getSingleProperty } from '@/lib/db';
import EditPropertyForm from './EditPropertyForm';

export default async function EditProperty({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) {
  const { propertyId } = await params;
  const property = await getSingleProperty(propertyId);
  return (
    <div className='p-6 '>
      <h2 className='text-center text-xl font-semibold text-slate-800'>
        Update your property
      </h2>
      <EditPropertyForm className='w-[80%] mx-auto' property={property} />;
    </div>
  );
}

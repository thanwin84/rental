'use client';
import { Spinner } from '@/components';
import { TanentSettingForm } from '@/components/dashboard/setting/TanentSettingForm';
import { useAuthStore } from '@/lib/store/auth';

export default function SettingPage() {
  const { isLoading, user } = useAuthStore();

  if (isLoading || !user) {
    return (
      <div className='h-screen flex justify-center py-8'>
        <Spinner size={40} />
      </div>
    );
  }
  return (
    <div className='w-full px-6 py-8'>
      <TanentSettingForm
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
        id={user._id}
      />
    </div>
  );
}

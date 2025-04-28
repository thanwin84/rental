import { TanentSettingForm } from '@/components/dashboard/setting/TanentSettingForm';
import { getUserById } from '@/lib/db/user';
import { decodedAccessToken } from '@/lib/session';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Setting',
};

export default async function SettingPage() {
  const decodedToken = await decodedAccessToken();
  if (!decodedToken) {
    redirect('/unauthorized');
  }
  const { data } = await getUserById(decodedToken?.userId);
  const user = JSON.parse(JSON.stringify(data));

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

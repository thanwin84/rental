import { TApplication } from '@/lib/types';
import ApplicationCard from './ApplicationCard';
import { EmptyState } from '@/components';

type Props = {
  className?: string;
  applications: TApplication[];
};

export default function ApplicationList({ applications }: Props) {
  if (applications.length === 0) {
    return (
      <EmptyState
        title='Applications list'
        description='You will see applications when client will start renting your property'
      />
    );
  }
  return (
    <div className='p-6 space-y-2'>
      {applications.map((application) => (
        <ApplicationCard key={application._id} application={application} />
      ))}
    </div>
  );
}

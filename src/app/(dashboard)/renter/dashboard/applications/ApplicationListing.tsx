import { EmptyState } from '@/components';
import { TApplication } from '@/lib/types';
import ApplicationCard from './ApplicationCard';

type Props = {
  className?: string;
  applications: TApplication[];
};

export default function ApplicationList({ applications }: Props) {
  if (applications.length === 0) {
    return (
      <EmptyState
        title='My Applications list'
        description='You will see applications when you"ll start applying for property'
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

import { listMyApplicationsAction } from '@/actions';
import ApplicationList from './ApplicationListing';
import { TApplication } from '@/lib/types';

export default async function ApplicationsPage({}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const applications: any = await listMyApplicationsAction({});
  return (
    <div>
      <ApplicationList
        applications={applications.data.applications as TApplication[]}
      />
    </div>
  );
}

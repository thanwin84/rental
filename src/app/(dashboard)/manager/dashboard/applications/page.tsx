import { listApplications } from '@/lib/db';
import ApplicationList from './components/ApplicationList';

export default async function ApplicationsPage() {
  const applications = await listApplications({});

  return (
    <div>
      <ApplicationList applications={applications.applications} />
    </div>
  );
}

import { Card, CardFooter } from '@/components/ui/card';
import { TApplication } from '@/lib/types/application';
import ApplicationCardInfo from '@/components/dashboard/ApplicationCardInfo';

type Props = {
  className?: string;
  application: TApplication;
};

export default function ApplicationCard({ application, className }: Props) {
  return (
    <Card
      className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all duration-200 ${className}`}
    >
      <ApplicationCardInfo userType='manager' application={application} />
      <CardFooter></CardFooter>
    </Card>
  );
}

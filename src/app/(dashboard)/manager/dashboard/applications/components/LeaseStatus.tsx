import { Badge } from '@/components/ui/badge';
import { LeaseStatus } from '@/lib/types';

type Props = {
  status: LeaseStatus;
};

const statusStyles: Record<LeaseStatus, string> = {
  pending: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
  approved: 'bg-blue-100 text-blue-800 border border-blue-300',
  active: 'bg-green-100 text-green-800 border border-green-300',
  completed: 'bg-gray-100 text-gray-800 border border-gray-300',
  rejected: 'bg-red-100 text-red-800 border border-red-300',
};

export default function LeaseStatusBadge({ status }: Props) {
  return (
    <Badge
      className={`rounded-md px-2.5 py-1 text-xs font-semibold ${statusStyles[status]}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
}

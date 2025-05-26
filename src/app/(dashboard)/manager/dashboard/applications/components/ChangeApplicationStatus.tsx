import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { applicationStatus } from '@/lib/constants';

type Props = {
  value: string;
  applicationId: string;
  disabled?: boolean;
};
export function ChangeApplicationStatus({ value, disabled }: Props) {
  return (
    <Select value={value} disabled={disabled}>
      <SelectTrigger className='w-full cursor-pointer'>
        <SelectValue placeholder='Change Application Status' />
      </SelectTrigger>
      <SelectContent className='w-full cursor-pointer'>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {Object.values(applicationStatus).map((status) => (
            <SelectItem key={status} value={status}>
              {status}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Props = {
  className?: string;
  options: { value: number | string; label: string }[];
  onValueChange: (value: string) => void;
  selectLabel?: string;
  selectedOption?: string;
};

export default function CustomSelect({
  options,
  onValueChange,
  selectLabel,
  selectedOption,
}: Props) {
  // Default to the first option's value if no selectedOption is provided
  const defaultValue = selectedOption || options[0].value.toString();

  return (
    <Select
      value={defaultValue}
      onValueChange={(value) => onValueChange(value)}
    >
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder={selectLabel} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((item) => (
            <SelectItem key={item.value} value={item.value.toString()}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

import { InputHTMLAttributes, useId } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
type Props = {
  label?: string;
  name?: string;
  className?: string;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;
export default function FormInput({
  label,
  className,
  errorMessage,
  ...props
}: Props) {
  const id = useId();
  return (
    <div className={`flex-1 space-y-2 ${className}`}>
      {label && (
        <Label className="text-slate-700" htmlFor={id}>
          {label}
        </Label>
      )}
      <Input id={id} {...props} />
      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
}

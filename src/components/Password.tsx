'use client';

import { InputHTMLAttributes, useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  errorMessage?: string;
  defaultValue?: string;
}
export default function Password({
  errorMessage,
  defaultValue,
  ...props
}: PasswordProps) {
  const [canSee, setCanSee] = useState(false);
  function toggleCanSee() {
    setCanSee(!canSee);
  }
  return (
    <div className="w-full space-y-2">
      <Label htmlFor="password" className="text-slate-700">
        Password
      </Label>
      <div className="flex">
        <Input
          id="password"
          name="password"
          className="rounded-r-none"
          type={canSee ? 'text' : 'password'}
          defaultValue={defaultValue}
          {...props}
        />
        {canSee ? (
          <button
            type="button"
            onClick={toggleCanSee}
            className="px-2 border rounded-r-md"
          >
            <Eye size={16} />
          </button>
        ) : (
          <button
            type="button"
            onClick={toggleCanSee}
            className="px-2 rounded-r-md border"
          >
            <EyeOff size={16} />
          </button>
        )}
      </div>
      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
}

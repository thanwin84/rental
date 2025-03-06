import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SearchBar({ className }: { className?: string }) {
  return (
    <div className={`flex border rounded-md bg-white p-1  ${className}`}>
      <Input
        placeholder="Search Property"
        style={{ outline: 'none', boxShadow: 'none' }}
        className="border-none "
      />
      <Button className="bg-red-400 hover:bg-red-500 cursor-pointer">
        Search
      </Button>
    </div>
  );
}

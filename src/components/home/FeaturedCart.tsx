import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedCard({
  className,
  linkHref,
  linkText,
  title,
  imgSrc,
  description,
}: {
  className?: string;
  linkText: string;
  linkHref: string;
  title: string;
  imgSrc: string;
  description: string;
}) {
  return (
    <Card className={`${className}`}>
      <div className="px-2 rounded-lg  flex items-center justify-center h-48">
        <Image
          className="w-full h-full object-contain"
          alt={title}
          src={imgSrc}
          height={400}
          width={400}
        />
      </div>
      <div className="flex flex-col justify-between gap-3 h-32">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Link
            className="text-center w-full border border-gray-400 rounded-md py-1 text-slate-800 hover:bg-zinc-800 hover:text-slate-100"
            href={linkHref}
          >
            {linkText}
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
}

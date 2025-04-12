import Image from 'next/image';

export default function DiscoverCard({
  className,
  title,
  imgSrc,
  description,
}: {
  className?: string;
  imgSrc: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className={`p-4 bg-gray-200 rounded-md border border-gray-300 hover:shadow-lg hover:shadow-zinc-900  ${className}`}
    >
      <div className="bg-zinc-800  rounded-full  h-12 w-12 mx-auto my-2">
        <Image
          className="w-full h-full object-container"
          src={imgSrc}
          height={34}
          width={34}
          alt={title}
        />
      </div>
      <div className="h-24 flex flex-col justify-between">
        <h2 className="text-xl text-slate-800 font-semibold">{title}</h2>
        <p className="text-slate-700 text-justify">{description}</p>
      </div>
    </div>
  );
}

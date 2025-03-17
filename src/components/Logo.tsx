export default function Logo({
  className,
  dark = true,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`font-bold text-slate-300  hover:text-slate-100 tracking-wider ${className}`}
    >
      <span className={`${dark ? 'text-slate-100' : 'text-slate-700'}`}>
        SWIFT
      </span>
      <span className=" ml-1 text-red-400">RENT</span>
    </div>
  );
}

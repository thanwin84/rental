export default function Logo({ className }: { className?: string }) {
  return (
    <div
      className={`font-bold text-slate-300  hover:text-slate-100 tracking-wider ${className}`}
    >
      <span className="text-slate-100">SWIFT</span>
      <span className=" ml-1 text-red-400">RENT</span>
    </div>
  );
}

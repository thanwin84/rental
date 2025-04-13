export default function Spinner({ size = 24 }: { size?: number }) {
  return (
    <div
      className='animate-spin rounded-full border-4 border-t-transparent border-gray-300'
      style={{ width: size, height: size }}
    />
  );
}

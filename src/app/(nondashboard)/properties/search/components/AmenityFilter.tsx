import { amenity } from '@/lib/constants';
import { amenityIcons } from '@/lib/constants/amenitiesIcons';

type Props = {
  className?: string;
  onClickCell: (value: string) => void;
  selectedItems: string[];
};

export default function AmenityFilter({
  className,
  onClickCell,
  selectedItems,
}: Props) {
  return (
    <div className={className}>
      <h4 className='text-slate-800 font-semibold mb-3 text-lg'>
        Conveniences
      </h4>
      <ul className='grid grid-cols-2 sm:grid-cols-1 gap-4'>
        {Object.values(amenity).map((item) => (
          <li
            onClick={() => onClickCell(item)}
            key={item}
            className={`flex  items-center gap-2 ${
              selectedItems?.includes(item)
                ? 'bg-gray-200'
                : 'bg-white hover:bg-gray-100'
            }  border border-gray-200 shadow-sm transition-all p-3 rounded-xl cursor-pointer`}
          >
            <span className='text-primary'>{amenityIcons[item]}</span>
            <span className='text-sm text-gray-700 text-center'>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

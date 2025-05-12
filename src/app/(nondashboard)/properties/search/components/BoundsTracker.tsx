import { usePropertyStore } from '@/lib/store';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useMapEvents } from 'react-leaflet';

export default function BoundsTracker() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const { filterState, setFilter } = usePropertyStore();

  useMapEvents({
    moveend: (event) => {
      const bounds = event.target.getBounds();
      const sw = bounds.getSouthWest(); // lat, lng
      const ne = bounds.getNorthEast();
      const newPolygon = `${sw.lat},${sw.lng},${ne.lat},${ne.lng}`;

      if (newPolygon !== filterState.polygon) {
        setFilter('polygon', newPolygon);
      }
    },
  });

  useEffect(() => {
    if (
      filterState.polygon &&
      filterState.polygon !== searchParams.get('polygon')
    ) {
      const params = new URLSearchParams(searchParams.toString());
      params.delete('city');
      params.delete('country');
      params.set('polygon', filterState.polygon);
      router.push(`${pathName}?${params.toString()}`, { scroll: false });
    }
  }, [router, pathName, searchParams, filterState.polygon]);

  return null;
}

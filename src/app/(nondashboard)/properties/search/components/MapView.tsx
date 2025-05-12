'use client';

import { useSidebar } from '@/components/ui/sidebar';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { offsetCoordinates } from '@/utils';
import { useEffect, useRef } from 'react';
import BoundsTracker from './BoundsTracker';
import { useQuery } from '@tanstack/react-query';
import { propertyService } from '@/lib/services';
import { useSearchParams } from 'next/navigation';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

type Props = {
  className?: string;

  centerCoordinates: [number, number];
};

export default function MapView({
  className,

  centerCoordinates,
}: Props) {
  const { open } = useSidebar();
  const w = open ? 'w-[calc(100%-16rem-24%)]' : 'w-[67%]';
  const initialCenterRef = useRef(false);
  const searchParams = useSearchParams();
  const polygonParam = searchParams.get('polygon') as string;
  const { data } = useQuery({
    queryKey: ['properties', polygonParam],
    queryFn: () => propertyService.getPropertiesWithin(polygonParam),
    enabled: !!polygonParam,
  });

  function RecenterMap({ center }: { center: [number, number] }) {
    const map = useMap();

    // Only center the map on the first render
    useEffect(() => {
      if (!initialCenterRef.current) {
        map.setView(center, map.getZoom());
        initialCenterRef.current = true;
      }
    }, [center, map]);

    return null;
  }

  return (
    <div className={`${w} ${className}`}>
      <MapContainer
        center={centerCoordinates}
        zoom={13}
        scrollWheelZoom={true}
        className='h-full w-full z-0'
      >
        <RecenterMap center={centerCoordinates} />
        <TileLayer
          attribution='&copy; OpenStreetMap contributors & Carto'
          url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
          subdomains={['a', 'b', 'c', 'd']}
          maxZoom={19}
        />
        <BoundsTracker />
        {data?.map((property) => (
          <Marker
            key={property._id}
            position={offsetCoordinates(property.coordinates)}
          >
            <Popup>
              <div className='flex gap-2 flex-col'>
                <span>{property.property.name}</span>
                <span>
                  {property.city}, {property.country}
                </span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

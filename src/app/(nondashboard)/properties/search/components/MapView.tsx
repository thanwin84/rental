'use client';

import { useSidebar } from '@/components/ui/sidebar';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Location } from '@/lib/types';
import { offsetCoordinates } from '@/utils';

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
  properties: Location[];
  centerCoordinates: [number, number];
};

export default function MapView({
  className,
  properties,
  centerCoordinates,
}: Props) {
  const { open } = useSidebar();
  const w = open ? 'w-[calc(100%-16rem-24%)]' : 'w-[67%]';
  function RecenterMap({ center }: { center: [number, number] }) {
    const map = useMap();
    map.setView(center, map.getZoom());
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
        {properties?.map((property) => (
          <Marker
            key={property._id}
            position={offsetCoordinates(property.location.coordinates)}
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

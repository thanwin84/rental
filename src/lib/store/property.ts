import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Filter = {
  propertyType: string[];
  beds: 'any' | number;
  baths: 'any' | number;
  minPrice: number;
  maxPrice: number;
  minPriceSetter: number;
  maxPriceSetter: number;
  location: string;
  amenities: string[];
};
type Store = {
  favouriteIds: string[];
  toggleFavourite: (id: string) => void;
  filterState: Filter;
  setFilter: (key: keyof Filter, value: Filter[keyof Filter]) => void;
  clearFilter: () => void;
};

const defaultFilterState: Filter = {
  propertyType: [],
  beds: 'any',
  baths: 'any',
  minPrice: 0,
  maxPrice: 0,
  minPriceSetter: 0,
  maxPriceSetter: 0,
  location: 'Anywhere',
  amenities: [],
};

export const usePropertyStore = create<Store>()(
  persist(
    (set, get) => ({
      favouriteIds: [],
      filterState: defaultFilterState,
      setFilter: (key, value) =>
        set((state) => ({
          filterState: { ...state.filterState, [key]: value },
        })),
      clearFilter: () => set({ filterState: defaultFilterState }),
      toggleFavourite: (id: string) => {
        const current = get().favouriteIds;
        const isFavourited = current.includes(id);

        set({
          favouriteIds: isFavourited
            ? current.filter((favId) => favId !== id)
            : [...current, id],
        });
      },
    }),
    {
      name: 'property-storage',
    }
  )
);

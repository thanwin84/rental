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
  polygon: string;
};
type Store = {
  favouriteIds: string[];
  rentedPropertyIds: string[];
  setFavouriteIds: (ids: string[]) => void;
  setRentedPropertyIds: (ids: string[]) => void;
  addRentedPropertyId: (id: string) => void;
  toggleFavourite: (id: string) => void;
  filterState: Filter;
  setFilter: (key: keyof Filter, value: Filter[keyof Filter]) => void;
  clearFilter: () => void;
  resetState: () => void;
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
  polygon: '',
};

export const usePropertyStore = create<Store>()(
  persist(
    (set, get) => ({
      favouriteIds: [],
      rentedPropertyIds: [],
      filterState: defaultFilterState,
      setRentedPropertyIds: (ids: string[]) => set({ rentedPropertyIds: ids }),
      addRentedPropertyId: (id: string) =>
        set((state) => ({
          rentedPropertyIds: state.rentedPropertyIds.includes(id)
            ? state.rentedPropertyIds
            : [...state.rentedPropertyIds, id],
        })),
      setFavouriteIds: (ids: string[]) => set({ favouriteIds: ids }),
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
      resetState: () =>
        set({
          filterState: defaultFilterState,
          favouriteIds: [],
          rentedPropertyIds: [],
        }),
    }),
    {
      name: 'property-storage',
    }
  )
);

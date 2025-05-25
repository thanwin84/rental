import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { TUser } from '../types';
import customFetch from '@/utils/customFetch';

type State = {
  user: TUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
};

const initialState: State = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};
type StoreType = {
  login: (user: TUser) => void;
  logout: () => void;
  loadUser: () => Promise<TUser | null>;
} & State;

export const useAuthStore = create<StoreType>()(
  persist(
    (set) => ({
      ...initialState,
      login: (user: TUser) => set({ user: user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
      loadUser: async () => {
        try {
          const user: TUser = await customFetch.get('/api/users/me');
          set({
            user,
            isAuthenticated: true,
            isLoading: false,
          });
          return user;
        } catch (error: unknown) {
          const errorMessage =
            error instanceof Error ? error.message : 'Unknown error';
          set({
            isLoading: false,
            error: errorMessage,
            user: null,
            isAuthenticated: false,
          });
          return null;
        }
      },
    }),
    {
      name: 'auth-storage', // unique name for storage key
      storage: createJSONStorage(() => localStorage),
    }
  )
);

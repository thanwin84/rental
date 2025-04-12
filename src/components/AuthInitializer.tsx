'use client';

import { useAuthStore } from '@/lib/store/auth';
import { useEffect } from 'react';

export default function AuthInitializer() {
  const authStore = useAuthStore();

  useEffect(() => {
    authStore.loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { useAuth } from '@/app/providers/auth-provider';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { isAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.replace('/');
    }
  }, [isAuth, router]);

  if (!isAuth) return null;

  return <>{children}</>;
}

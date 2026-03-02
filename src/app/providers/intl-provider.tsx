'use client';

import { type ReactNode, useEffect, useState } from 'react';

import '@/shared/i18n/i18n.client';

interface IntlProps {
  children: ReactNode;
}

export const IntlProvider = ({ children }: IntlProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return <>{children}</>;
};

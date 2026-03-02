'use client';

import { useAuth } from '@/app/providers/auth-provider';
import { useTranslation } from 'react-i18next';

const SuccessAuth = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  return <div>{t('viaEmail', { email: user?.email })}</div>;
};

const SuccessLoginPage = () => {
  return <SuccessAuth />;
};

export default SuccessLoginPage;

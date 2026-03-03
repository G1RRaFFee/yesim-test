'use client';

import { useAuth } from '@/app/providers/auth-provider';
import { useTranslation } from 'react-i18next';
import styles from "./page.module.css";
import { Typography } from '@/shared/ui';

const SuccessAuth = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  return <section className={styles.section}> 
    <Typography as="h1" variant="h1" className={styles.title}>
      {t('viaEmail', { email: user?.email })}
    </Typography>
    
    </section>
};

const SuccessLoginPage = () => {
  return <SuccessAuth />;
};

export default SuccessLoginPage;

'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useAuth } from '@/app/providers/auth-provider';
import { LanguageSwitcher } from '@/features/change-language/ui/language-switcher';
import logo from '@public/yesim.svg';
import { Button } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import styles from './header.module.css';

export const Header = () => {
  const { t } = useTranslation();
  const { isAuth, logout } = useAuth();

  const ActionButton = !isAuth ? (
    <Button>
      <Link href={'/login'} scroll={false}>
        {t('signIn')}
      </Link>
    </Button>
  ) : (
    <Button onClick={logout}>{t('signOut')}</Button>
  );

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={logo} height={30} width={100} alt="yesim-logo" />
      </Link>
      <div className={styles['actions-wrapper']}>
        <LanguageSwitcher />
        {ActionButton}
      </div>
    </header>
  );
};

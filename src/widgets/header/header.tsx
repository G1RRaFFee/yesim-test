'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useAuth } from '@/app/providers/auth-provider';
import { LanguageSwitcher } from '@/features/i18n/change-language/ui/language-switcher';
import logo from '@public/yesim.svg';
import { Button } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import styles from './header.module.css';
import { ROUTES } from '@/shared/constants';

export const Header = () => {
  const { t } = useTranslation();
  const { isAuth, logout } = useAuth();

  const ActionButton = !isAuth ? (
    <Button>
      <Link href={ROUTES.LOGIN} scroll={false}>
        {t('signIn')}
      </Link>
    </Button>
  ) : (
    <Button onClick={logout}>{t('signOut')}</Button>
  );

  return (
    <header className={styles.header}>
      <Link href={ROUTES.HONE}>
        <Image src={logo} height={30} width={100} alt="yesim-logo" />
      </Link>
      <div className={styles.actionsWrapper}>
        <LanguageSwitcher />
        {ActionButton}
      </div>
    </header>
  );
};

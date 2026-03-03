import { type ReactNode } from 'react';

import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';

import { initI18n } from '@/shared/i18n';
import { AuthProvider, IntlProvider, QueryProvider } from '@app/providers';
import '@app/styles/globals.css';
import { Header } from '@widgets/index';

import { AvailableLanguage } from './types/i18n/language.type';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export async function generateMetadata() {
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value;

  if (!lang) return;

  const i18n = await initI18n(lang as AvailableLanguage);

  return {
    title: i18n.t('main.title'),
    description: i18n.t('main.description'),
  };
}

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get('lang')?.value;

  const lang: AvailableLanguage = cookieLang === 'ru' || cookieLang === 'en' ? cookieLang : 'en';

  return (
    <html lang={lang}>
      <body className={inter.variable}>
        <QueryProvider>
          <IntlProvider>
            <AuthProvider>
              <Header />
              {children}
            </AuthProvider>
          </IntlProvider>
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;

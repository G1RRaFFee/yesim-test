import { OperatorsListWidget } from '@widgets/index';

import styles from './page.module.css';

interface CountryPageProps {
  params: {
    name: string;
  };
}

const CountryPage = async ({ params }: CountryPageProps) => {
  const { name } = await params;
  return (
    <main>
      <OperatorsListWidget widgetClassName={styles.section} countryName={name} />
    </main>
  );
};

export default CountryPage;

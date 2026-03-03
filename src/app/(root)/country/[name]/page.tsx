import { OperatorsList } from '@/widgets/operators-list/operators-list';

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
      <section className={styles.section}>
        <OperatorsList countryName={name} />
      </section>
    </main>
  );
};

export default CountryPage;

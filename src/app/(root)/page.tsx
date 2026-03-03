import { HowItWorks, MostPopularCountriesList, SimSection } from '@widgets/index';

import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <SimSection className={styles.section} />
      <section className={styles.section}>
        <MostPopularCountriesList />
      </section>
      <section className={styles.section}>
        <HowItWorks />
      </section>
    </main>
  );
}

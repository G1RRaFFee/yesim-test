import { HowItWorksWidget, PopularCountriesListWidget, CountrySearchWidget } from '@widgets/index';

import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <CountrySearchWidget className={styles.section} />
      <PopularCountriesListWidget widgetClassName={styles.section}/>
      <HowItWorksWidget widgetClassName={styles.section}/>
    </main>
  );
}

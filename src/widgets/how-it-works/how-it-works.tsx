'use client';

import { Typography } from '@/shared/ui';
import { useDragScroll } from '@shared/hooks';
import { useTranslation } from 'react-i18next';

import styles from './how-it-works.module.css';

interface StepCardProps {
  title: string;
}

function StepCard({ title }: StepCardProps) {
  return (
    <div className={styles.card} data-name="Steps">
      <div className={styles.cardHeader} data-name="steps">
        <div className={styles.cardHeaderInner}>
          <div className={styles.cardHeaderContent}>
            <div className={styles.cardTitle}>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardImage} />
    </div>
  );
}

export const HowItWorks = () => {
  const dragScroll = useDragScroll<HTMLDivElement>({ speed: 1.5 });
  const { t } = useTranslation();
  const steps = Array(5).fill(t('longTitle'));

  return (
    <div className={styles.howItWorks} data-name="How it works">
      <div className={styles.contentBlockTitle} data-name="Content Block Title">
        <Typography className={styles.title} variant="h2" as="h2">
          {t('faq')}
        </Typography>
      </div>
      <div
        className={styles.scrollContainer}
        ref={dragScroll.ref}
        onPointerDown={dragScroll.onPointerDown}
        onPointerMove={dragScroll.onPointerMove}
        onPointerUp={dragScroll.onPointerUp}
        onPointerLeave={dragScroll.onPointerLeave}
        onWheel={dragScroll.onWheel}
        style={{ cursor: 'grab' }}
      >
        {steps.map((step, index) => (
          <StepCard key={index} title={step} />
        ))}
      </div>
    </div>
  );
};

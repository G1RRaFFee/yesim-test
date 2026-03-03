import styles from "./operators-list-skeleton.module.css";

export const OperatorsSkeleton = () => {
    return (
      <div className={styles.skeleton}>
        <div className={styles.skeletonCountryInfo}>
          <div className={styles.skeletonFlag} />
          <div className={styles.skeletonText} />
        </div>
        <div className={styles.skeletonList}>
          <div className={styles.skeletonText} />
          <div className={styles.skeletonText} />
        </div>
      </div>
    );
  };
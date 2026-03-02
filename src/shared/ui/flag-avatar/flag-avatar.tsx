import Image from 'next/image';

import styles from './flag-avatar.module.css';

interface FlagAvatarProps {
  iso: string;
  country: string;
}

export const FlagAvatar = ({ iso, country }: FlagAvatarProps) => {
  return (
    <Image
      className={styles.icon}
      src={`/flags/${iso}.svg`}
      height={32}
      width={32}
      alt={country}
      loading="lazy"
    />
  );
};

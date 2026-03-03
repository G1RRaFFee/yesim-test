import type { ButtonHTMLAttributes, JSX } from 'react';

import classNames from 'classnames';

import styles from './button.module.css';

type ButtonVariants = 'primary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
}

const variants = {
  primary: styles['primary-button'],
};

export const Button = ({ variant = 'primary', children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button className={classNames(styles.button, variants[variant])} {...props}>
      {children}
    </button>
  );
};

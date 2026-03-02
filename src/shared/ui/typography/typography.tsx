import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import classNames from 'classnames';

import styles from './typography.module.css';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'bodyBold' | 'caption';

type TypographyProps<T extends ElementType> = {
  as?: T;
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>;

export const Typography = <T extends ElementType = 'p'>({
  as,
  variant = 'body',
  children,
  className = '',
  ...rest
}: TypographyProps<T>) => {
  const Component = as || 'p';

  const variantClass = styles[variant];

  return (
    <Component className={classNames(variantClass, className)} {...rest}>
      {children}
    </Component>
  );
};

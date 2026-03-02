import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';

import classNames from 'classnames';

import styles from './text-input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: boolean;
  errorMessage?: string;
  containerClassName?: string;
  inputClassName?: string;
}

export const TextInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      leftIcon,
      rightIcon,
      error = false,
      errorMessage,
      containerClassName = '',
      inputClassName = '',
      disabled = false,
      className,
      ...props
    },
    ref,
  ) => {
    const hasLeftIcon = !!leftIcon;
    const hasRightIcon = !!rightIcon;

    const inputClasses = [
      styles.input,
      hasLeftIcon && styles.inputWithLeftIcon,
      hasRightIcon && styles.inputWithRightIcon,
      error && styles.inputError,
      disabled && styles.inputDisabled,
      inputClassName,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={`${styles.container} ${containerClassName}`}>
        <div className={styles.inputWrapper}>
          {hasLeftIcon && (
            <div
              className={classNames(styles.icon, styles.iconLeft)}
              role="presentation"
              tabIndex={!disabled ? 0 : -1}
              aria-label="Левая иконка"
            >
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            className={`${inputClasses} ${className || ''}`}
            disabled={disabled}
            aria-invalid={error}
            aria-describedby={errorMessage ? 'error-message' : undefined}
            {...props}
          />

          {hasRightIcon && (
            <div
              className={classNames(styles.icon, styles.iconRight)}
              role={'presentation'}
              tabIndex={!disabled ? 0 : -1}
              aria-label={'Правая иконка'}
            >
              {rightIcon}
            </div>
          )}
        </div>

        {error && errorMessage && (
          <p id="error-message" className={styles.errorMessage} role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

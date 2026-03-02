'use client';

import { type SubmitEvent, useState } from 'react';

import styles from './login.module.css';

interface LoginProps {
  onSubmit: (email: string) => void;
}

export const Login = ({ onSubmit }: LoginProps) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email);
    setEmail('');
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.title}>
        <p>Войдите, чтобы продолжить</p>
      </div>
      <div className={styles.spacer} data-name="size-box" />
      <div className={styles.inputContainer} data-name="Input">
        <div className={styles.fieldCancel} data-name="Field + cancel">
          <input
            type="email"
            className={styles.inputField}
            placeholder="Введи email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-name="Status=Default, Type=Text"
            required
          />
        </div>
      </div>
      <div className={styles.spacerSmall} data-name="size-box" />
      <button type="submit" className={styles.submitButton} data-name="Button">
        <div className={styles.submitButtonInner}>
          <div className={styles.submitButtonText}>
            <p>Продолжить</p>
          </div>
        </div>
      </button>
    </form>
  );
};

'use client';

import { ChangeEvent, type SubmitEvent, useState} from 'react';

import styles from './login.module.css';
import { useTranslation } from 'react-i18next';
import { Button, TextInput, Typography } from '@/shared/ui';

interface LoginProps {
  onSubmit: (email: string) => void;
}

export const Login = ({ onSubmit }: LoginProps) => {
  const [email, setEmail] = useState('');
  const {t} = useTranslation()

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email);
    setEmail('');
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
        <Typography as="p" className={styles.title}>
          {t("signInToContinue")}  
        </Typography>
      <div className={styles.spacer} data-name="size-box" />
      <div className={styles.inputContainer} data-name="Input">
        <div className={styles.fieldCancel} data-name="Field + cancel">
          <TextInput
            type="email"
            className={styles.inputField}
            placeholder={t("enterEmail")}
            value={email}
            onChange={handleEmailChange}
            data-name="Status=Default, Type=Text"
            required
          />
        </div>
      </div>
      <div className={styles.spacerSmall} data-name="size-box" />
      <Button type="submit" className={styles.submitButton} data-name="Button">
        <div className={styles.submitButtonInner}>
          <Typography as="p" className={styles.submitButtonText}>
            {t("continue")}
          </Typography>
        </div>
      </Button>
    </form>
  );
};

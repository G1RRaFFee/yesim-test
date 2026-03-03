'use client';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/app/providers/auth-provider';
import { Login } from '@/features/auth/login/ui/login';
import { Modal } from '@/shared/ui';
import { ROUTES } from '@/shared/constants';

const LoginModal = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleModalClose = () => {
    router.back();
  };

  const handleLoginSubmit = (email: string) => {
    login({ id: crypto.randomUUID(), email });
    router.push(ROUTES.SUCCESS_LOGIN);
  };

  return (
    <Modal isOpen={true} onClose={handleModalClose}>
      <Login onSubmit={handleLoginSubmit} />
    </Modal>
  );
};

export default LoginModal;

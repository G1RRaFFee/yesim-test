'use client';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/app/providers/auth-provider';
import { Login } from '@/features/login/ui/login';
import { Modal } from '@/shared/ui';

const LoginModal = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleModalClose = () => {
    router.back();
  };

  const handleLoginSubmit = (email: string) => {
    login({ id: crypto.randomUUID(), email });
    router.push('/login-success');
  };

  return (
    <Modal isOpen={true} onClose={handleModalClose}>
      <Login onSubmit={handleLoginSubmit} />
    </Modal>
  );
};

export default LoginModal;

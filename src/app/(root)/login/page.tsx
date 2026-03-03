'use client';

import { Login } from '@/features/auth/login/ui/login';

const LoginPage = () => {
  return <Login onSubmit={() => console.log('hello')} />;
};

export default LoginPage;

'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  isAuth: boolean;
  user: User | null;
  login: (payload: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setIsLoaded(true);
  }, []);

  const login = (payload: User) => {
    localStorage.setItem('user', JSON.stringify(payload));
    localStorage.setItem('isAuth', 'true');
    setUser(payload);
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isAuth');
    setUser(null);
  };

  if (!isLoaded) return null;

  return (
    <AuthContext.Provider
      value={{
        isAuth: !!user,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
};

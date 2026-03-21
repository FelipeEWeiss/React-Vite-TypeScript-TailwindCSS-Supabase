import React from 'react';
import { AuthProvider } from '../features/auth/hooks/AuthProvider';
import { ToastProvider } from '@felipeeweiss/react-toast-message';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};

import { createContext } from 'react';

export interface AuthContextType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  signInWithProvider: (provider: 'github' | 'google') => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

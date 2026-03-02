import { supabase } from '../../../lib/supabaseClient';

export const authService = {
  signUp: async (email: string, password: string) => {
    return supabase.auth.signUp({ email, password });
  },

  signIn: async (email: string, password: string) => {
    return supabase.auth.signInWithPassword({ email, password });
  },

  signOut: async () => {
    return supabase.auth.signOut();
  },

  resetPassword: async (email: string) => {
    return supabase.auth.resetPasswordForEmail(email);
  },

  signInWithProvider: async (provider: 'github' | 'google') => {
    return supabase.auth.signInWithOAuth({ provider });
  },

  getUser: () => supabase.auth.getUser()
};
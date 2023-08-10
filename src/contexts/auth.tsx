import { useState, createContext, ReactNode } from 'react';

export interface UserProps {
  token: string;
  name: string;
  email: string;
}

interface UserData {
  nome: string,
  email: string,
  password: string
}

export interface AuthContextDataProps {
  user?: UserProps;
  signIn?: (email: string, password: string) => Promise<void>;
  signUp?: (userData: UserData) => Promise<void>;
  signOut?: () => Promise<void>;
  isUserLoading?: boolean;
  signed: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthProvider({ children }: AuthProviderProps) {
  return (
    <AuthContext.Provider value={{ signed: false }}>
      {children}
    </AuthContext.Provider>
  );
}
import { AuthContext, AuthContextDataProps } from '@contexts/auth';
import { useContext } from 'react';

export function useAuth(): AuthContextDataProps {
  const context = useContext(AuthContext);

  return context;
}
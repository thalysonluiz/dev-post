import { View } from 'react-native';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { useAuth } from '@hooks/useAuth';

export function Routes() {
  const { signed } = useAuth();

  return (
    signed ? <AppRoutes /> : <AuthRoutes />
  );
}
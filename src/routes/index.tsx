import { ActivityIndicator, View } from 'react-native';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { useAuth } from '@hooks/useAuth';

export function Routes() {
  const { signed, loading } = useAuth();

  return (
    loading ? <ActivityIndicator size={50} color="#e52246" /> : (signed ? <AppRoutes /> : <AuthRoutes />)
  );
}
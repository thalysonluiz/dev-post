import { ActivityIndicator, View } from 'react-native';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { useAuth } from '@hooks/useAuth';
import { Loading } from '@components/Loading';

export function Routes() {
  const { signed, loading } = useAuth();

  return (
    loading ? <Loading /> : (signed ? <AppRoutes /> : <AuthRoutes />)
  );
}
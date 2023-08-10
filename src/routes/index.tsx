import { View } from 'react-native';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
  const signed = false;

  return (
    signed ? <AppRoutes /> : <AuthRoutes />
  );
}
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

export function Loading() {
  return (
    <Container>
      <ActivityIndicator size={50} color="#e52246" />
    </Container>
  );
}
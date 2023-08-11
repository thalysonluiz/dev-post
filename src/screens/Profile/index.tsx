import { useAuth } from '@hooks/useAuth';
import { Container } from './styles';
import { Button } from 'react-native';

export function Profile() {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <Button title='Sair' onPress={handleSignOut} />
    </Container>
  );
}
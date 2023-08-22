import { useState } from 'react';
import { useAuth } from '@hooks/useAuth';
import { Header } from '@components/Header';
import { Avatar, Container, Email, Name, UploadButton, UploadText, ButtonText, Button } from './styles';

export function Profile() {
  const [url, setUrl] = useState(null);
  const { signOut, user } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <Header />
      {
        url ? (
          <UploadButton>
            <UploadText>+</UploadText>
            <Avatar
              source={{ uri: url }}
            />
          </UploadButton>
        ) : (
          <UploadButton>
            <UploadText>+</UploadText>
            <Avatar
              source={require('@assets/avatar.png')}
            />
          </UploadButton>
        )
      }
      <Name numberOfLines={1}>{user.name}</Name>
      <Email numberOfLines={1}>{user.email}</Email>

      <Button bg="#428cfd" onPress={handleSignOut} >
        <ButtonText color="#fff">Atualizar Perfil</ButtonText>
      </Button>
      <Button bg="#f1f1f1" onPress={handleSignOut} >
        <ButtonText color="#3b3b3b">Sair</ButtonText>
      </Button>
    </Container>
  );
}
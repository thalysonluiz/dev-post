import { useState } from 'react';
import { Button, ButtonText, Container, Input, SignUpButton, SignUpText, Title } from './styles';
import { ActivityIndicator, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '@hooks/useAuth';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const { isUserLoading } = useAuth();

  function handleSignIn() {
    console.log(email, password)
  }

  return (
    <Container>
      <Title>
        Dev
        <Text style={{ color: '#E52246' }}>Post</Text>
      </Title>

      <Input
        placeholder="email@email.com"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="*****"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <Button onPress={handleSignIn}>
        {
          isUserLoading ? <ActivityIndicator size={20} color='#FFF' />
            : <ButtonText>Acessar</ButtonText>
        }
      </Button>

      <SignUpButton onPress={() => navigation.navigate('SignUp')}>
        <SignUpText>Crie uma conta</SignUpText>
      </SignUpButton>
    </Container>
  );
}
import { useState } from 'react';
import { Button, ButtonText, Container, Input, SignUpButton, SignUpText, Title } from './styles';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  function handleSignUp() {

  }

  return (
    <Container>
      <Title>
        Dev
        <Text style={{ color: '#E52246' }}>Post</Text>
      </Title>

      <Input
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
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

      <Button onPress={handleSignUp}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>

      <SignUpButton onPress={() => navigation.goBack()}>
        <SignUpText>Já tenho uma conta</SignUpText>
      </SignUpButton>
    </Container>
  );
}
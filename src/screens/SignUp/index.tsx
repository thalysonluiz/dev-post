import { useState } from 'react';
import { Button, ButtonText, Container, Input, SignUpButton, SignUpText, Title } from './styles';
import { ActivityIndicator, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '@hooks/useAuth';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const { signUp, isUserLoading } = useAuth();

  function handleSignUp() {
    if (name === '' || email === '' || password === '') {
      Alert.alert('Campos não podem ser vazios')
      return;
    }

    const data = {
      name,
      email,
      password
    }

    signUp(data);
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
        {
          isUserLoading ? <ActivityIndicator size={20} color='#FFF' />
            : <ButtonText>Cadastrar</ButtonText>
        }

      </Button>

      <SignUpButton onPress={() => navigation.goBack()}>
        <SignUpText>Já tenho uma conta</SignUpText>
      </SignUpButton>
    </Container>
  );
}
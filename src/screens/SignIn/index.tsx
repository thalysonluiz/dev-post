import { Button, ButtonText, Container, Input, SignUpButton, SignUpText, Title } from './styles';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>
        Dev
        <Text style={{ color: '#E52246' }}>Post</Text>
      </Title>

      <Input
        placeholder="email@email.com"
      />
      <Input
        placeholder="*****"
        secureTextEntry={true}
      />

      <Button >
        <ButtonText>Acessar</ButtonText>
      </Button>

      <SignUpButton onPress={() => navigation.navigate('SignUp')}>
        <SignUpText>Crie uma conta</SignUpText>
      </SignUpButton>
    </Container>
  );
}
import { Button, ButtonText, Container, Input, SignUpButton, SignUpText, Title } from './styles';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function SignUp() {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>
        Dev
        <Text style={{ color: '#E52246' }}>Post</Text>
      </Title>

      <Input
        placeholder="Nome"
      />
      <Input
        placeholder="email@email.com"
      />
      <Input
        placeholder="*****"
        secureTextEntry={true}
      />

      <Button >
        <ButtonText>Cadastrar</ButtonText>
      </Button>

      <SignUpButton onPress={() => navigation.goBack()}>
        <SignUpText>Já tenho uma conta</SignUpText>
      </SignUpButton>
    </Container>
  );
}
import { useNavigation } from '@react-navigation/native';
import { Container, ButtonPost } from './styles';
import { Feather } from '@expo/vector-icons';
import { Header } from '@components/Header';

export function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header />
      <ButtonPost onPress={() => navigation.navigate('NewPost')}>
        <Feather name="edit-2" size={24} color="#fff" />
      </ButtonPost>
    </Container>
  );
}
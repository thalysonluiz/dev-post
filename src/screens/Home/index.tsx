import { useNavigation } from '@react-navigation/native';
import { Container, ButtonPost } from './styles';
import { Feather } from '@expo/vector-icons';

export function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <ButtonPost onPress={() => navigation.navigate('NewPost')}>
        <Feather name="edit-2" size={24} color="#fff" />
      </ButtonPost>
    </Container>
  );
}
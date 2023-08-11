import { useLayoutEffect, useState } from 'react';
import { Container, Input, ButtonNew, NewText } from './styles';
import { useNavigation } from '@react-navigation/native';

export function NewPost() {
  const [post, setPost] = useState('');

  const navigation = useNavigation();

  useLayoutEffect(() => {
    const options = navigation.setOptions({
      headerRight: () => (
        <ButtonNew>
          <NewText>Compartilhar</NewText>
        </ButtonNew>
      )
    })
  }, [])

  return (
    <Container>
      <Input
        placeholder="O que está acontecendo?"
        placeholderTextColor="#ddd"
        multiline={true}
        maxLength={300}
        value={post}
        onChangeText={setPost}
        autoCorrect={false}
      />
    </Container>
  );
}
import { useLayoutEffect, useState } from 'react';
import { Container, Input, ButtonNew, NewText } from './styles';
import { useNavigation } from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import { useAuth } from '@hooks/useAuth';

export function NewPost() {
  const [post, setPost] = useState('');

  const navigation = useNavigation();
  const { user } = useAuth()

  async function handleNewPost() {
    if (post === '') {
      return;
    }

    let avatarUrl = null;
    try {
      let response = await storage().ref('users').child(user?.uid).getDownloadURL();
      avatarUrl = response;
    } catch (error) {
      console.log(error)
    }

    await firestore().collection('posts').add({
      created: new Date(),
      content: post,
      autor: user.name,
      userId: user.uid,
      likes: 0,
      avatarUrl
    })
      .then(() => {
        setPost('')
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => navigation.goBack())
  }

  useLayoutEffect(() => {
    const options = navigation.setOptions({
      headerRight: () => (
        <ButtonNew onPress={handleNewPost}>
          <NewText>Compartilhar</NewText>
        </ButtonNew>
      )
    })
  }, [navigation, post])

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
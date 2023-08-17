import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import { Container, ButtonPost, ListPosts } from './styles';
import { Feather } from '@expo/vector-icons';
import { Header } from '@components/Header';
import { Post, PostData } from '@components/Post';
import { Loading } from '@components/Loading';
import { useAuth } from '@hooks/useAuth';


export function Home() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const { user } = useAuth();

  useEffect(() => {
    const subscriber = firestore().collection('posts')
      .orderBy('created', 'desc')
      .onSnapshot(snapshot => {
        const postList = [] as PostData[];

        snapshot.forEach(doc => {
          postList.push({
            id: doc.id,
            ...doc.data()
          })
        })

        setPosts(postList);
        setLoading(false)
      });

    return () => subscriber();
  }, [])

  return (
    <Container>
      <Header />
      {loading ? <Loading /> :
        <ListPosts
          showVerticalScrollIndicator={false}
          data={posts}
          renderItem={({ item }) => <Post data={item} />}
        />
      }
      <ButtonPost onPress={() => navigation.navigate('NewPost')}>
        <Feather name="edit-2" size={24} color="#fff" />
      </ButtonPost>
    </Container>
  );
}
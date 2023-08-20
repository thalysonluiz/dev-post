import { useEffect, useLayoutEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Container, ListPosts } from './styles';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { Post, PostData } from '@components/Post';
import { Loading } from '@components/Loading';

interface PostsUserProps {
  route: ParamListBase
}

export function PostsUser({ route }) {
  const [title, setTitle] = useState(route.params.title);
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    const options = navigation.setOptions({
      title: title === '' ? '' : title
    })
  }, [navigation, title])

  useEffect(() => {
    const subscriber = firestore().collection('posts')
      .where('userId', '==', route.params.userId)
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
        setLoading(false);
      });

    return () => subscriber();
  }, [])

  return (
    <Container>
      {loading ? <Loading /> :
        <ListPosts
          //keyExtractor={(item) => item.uid}
          showsVerticalScrollIndicator={false}
          data={posts}
          renderItem={({ item }) => <Post data={item} userId={route.params.userId} />}
        />
      }
    </Container>
  );
}
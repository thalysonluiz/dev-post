import firestore from '@react-native-firebase/firestore';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import {
  Container,
  Header,
  Avatar,
  Name,
  ContentView,
  Content,
  Footer,
  LikeButton,
  Likes,
  TimePost
} from './styles';

import avatar from '../../assets/avatar.png';
import { useNavigation } from '@react-navigation/native';

interface CreatedProps {
  nanoseconds: number;
  seconds: number;
}
export interface PostData {
  id: string;
  autor: string;
  avatarUrl: string;
  content: string;
  created: CreatedProps;
  likes: number;
  userId: string;
}

interface PostProps {
  data: PostData;
  userId: string;
}

export function Post({ data, userId }: PostProps) {
  const navigation = useNavigation()

  function formatDatePost() {
    const datePost = new Date(data.created.seconds * 1000)

    return formatDistance(new Date(), datePost, { locale: ptBR })
  }

  async function likePost(id: string, likes: number) {
    const docId = `${userId}-${id}`;

    const doc = await firestore().collection('likes').doc(docId).get();

    if (doc.exists) {
      await firestore().collection('posts')
        .doc(id).update({
          likes: likes - 1
        });

      await firestore().collection('likes')
        .doc(docId).delete();
    }
    else {
      await firestore().collection('posts')
        .doc(id).update({
          likes: likes + 1
        });

      await firestore().collection('likes')
        .doc(docId).set({
          postId: id,
          userId: userId,
        });
    }
  }

  return (
    <Container>
      <Header onPress={() => navigation.navigate('PostsUser', { title: data.autor, userId: data.userId })}>
        {data.avatarUrl ? <Avatar source={{ uri: data.avatarUrl }} /> : <Avatar source={avatar} />}
        <Name>{data?.autor}</Name>
      </Header>
      <ContentView>
        <Content>
          {data.content}
        </Content>
      </ContentView>
      <Footer>
        <LikeButton onPress={() => likePost(data.id, data.likes)}>
          <Likes >{data?.likes === 0 ? '' : data?.likes}</Likes>
          <MaterialCommunityIcons name={data?.likes === 0 ? 'heart-plus-outline' : 'cards-heart'} size={20} color="#e52246" />
        </LikeButton>
        <TimePost >{formatDatePost()}</TimePost>
      </Footer>
    </Container>
  );
}
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

export interface PostData {
  id: string;
  autor: string;
  avatarUrl: string;
  content: string;
  created: Date;
  likes: number;
  userId: string;
}

interface PostProps {
  data: PostData;
}

export function Post({ data }: PostProps) {

  function formatDatePost() {
    const datePost = new Date(data.created.seconds * 1000)

    return formatDistance(new Date(), datePost, { locale: ptBR })
  }

  return (
    <Container>
      <Header>
        {data.avatarUrl ? <Avatar source={{ uri: data.avatarUrl }} /> : <Avatar source={avatar} />}
        <Name>{data?.autor}</Name>
      </Header>
      <ContentView>
        <Content>
          {data.content}
        </Content>
      </ContentView>
      <Footer>
        <LikeButton>
          <Likes >{data?.likes === 0 ? '' : data?.likes}</Likes>
          <MaterialCommunityIcons name={data?.likes === 0 ? 'heart-plus-outline' : 'cards-heart'} size={20} color="#e52246" />
        </LikeButton>
        <TimePost >{formatDatePost()}</TimePost>
      </Footer>
    </Container>
  );
}
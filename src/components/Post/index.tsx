
import { Text } from 'react-native';
import { Container } from './styles';

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
  return (
    <Container>
      <Text>{data.content}</Text>
    </Container>
  );
}
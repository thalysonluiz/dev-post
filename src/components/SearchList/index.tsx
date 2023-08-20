import React from 'react';
import { Container, Name } from './styles';
import { useNavigation } from '@react-navigation/native';

export interface SearchData {
  name: string;
  id: string;
}

interface SearchProps {
  data: SearchData;
}

export function SearchList({ data }: SearchProps) {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate('PostsUser', { title: data.name, userId: data.id })}>
      <Name>{data.name}</Name>
    </Container>
  );
}
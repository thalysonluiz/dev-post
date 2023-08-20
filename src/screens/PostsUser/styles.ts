import { PostData } from "@components/Post";
import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ListPosts = styled(
  FlatList as new (props: FlatListProps<PostData>) => FlatList<PostData>
)`
  flex: 1;
  background-color: #f1f1f1;
`;

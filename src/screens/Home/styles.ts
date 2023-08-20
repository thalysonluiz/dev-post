import { PostData } from "./../../components/Post/index";
import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #36393f;
`;

export const ButtonPost = styled.TouchableOpacity`
  background-color: #202225;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 6%;
  right: 6%;
`;

export const ListPosts = styled(
  FlatList as new (props: FlatListProps<PostData>) => FlatList<PostData>
)`
  flex: 1;
  background-color: #f1f1f1;
`;

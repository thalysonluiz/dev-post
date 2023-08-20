import { SearchData } from "@components/SearchList";
import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 25px;
  background-color: #353840;
`;

export const AreaInput = styled.View`
  flex-direction: row;
  margin: 10px;
  background-color: #f1f1f1;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
`;

export const Input = styled.TextInput`
  width: 90%;
  background-color: #f1f1f1;
  height: 35px;
  padding-left: 8px;
  font-size: 17px;
  color: #121212;
`;

export const List = styled(
  FlatList as new (props: FlatListProps<SearchData>) => FlatList<SearchData>
)`
  flex: 1;
`;

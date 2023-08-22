import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #353840;
`;

export const UploadButton = styled.TouchableOpacity`
  margin-top: 20%;
  background-color: #fff;
  width: 165px;
  height: 165px;
  border-radius: 90px;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const UploadText = styled.Text`
  z-index: 9;
  position: absolute;
  font-size: 55px;
  color: #e52246;
  opacity: 0.4;
`;

export const Avatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  opacity: 0.9;
`;

export const Name = styled.Text`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 28px;
  color: #fff;
  font-weight: bold;
`;

export const Email = styled.Text`
  margin: 10px 20px;
  font-size: 20px;
  color: #ddd;
  font-style: italic;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bg};
  width: 80%;
  height: 45px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.color};
  font-size: 20px;
  font-style: italic;
`;

export const ButtonBack = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  position: absolute;
  top: 15px;
  left: 25px;
`;

export const ModalContainer = styled.View`
  width: 100%;
  height: 50%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 45px;
  border-radius: 5px;
  background-color: #ddd;
  padding: 10px;
  font-size: 20px;
  text-align: center;
`;

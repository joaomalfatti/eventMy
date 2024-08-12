import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #131016;
  padding: 24px;
`;

export const EventName = styled.Text`
  color: #FFFFFF;
  font-size: 24px;
  font-weight: bold;
  margin-top: 46%;
`;

export const EventDate = styled.Text`
  color: #6b6b6b;
  font-size: 16px;
`;

export const EventInput = styled.TextInput`
  height: 56px;
  background-color: #1F1E25;
  border-radius: 5px;
  color: #FFFFFF;
  padding: 16px;
  flex: 1;
  margin-right: 12px;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 18px;
`;

export const ButtonTouch = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 5px;
  background-color: #31CF67;
  align-items: center;
  justify-content: center;
`;

export const ViewForm = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 36px;
  margin-bottom: 42px;
`;

export const ListEmptyText = styled.View`
  color: #FFFFFF;
  font-size: 16px;
  text-align: center;
`;
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BoldText = styled.Text`
  font-family: 'open-bold';
`;

export default function AboutScreen() {
  return (
    <StyledView>
      <Text>Это лучшее приложение для личных заметок</Text>
      <Text>
        Версия приложения <BoldText>1.0.0</BoldText>
      </Text>
    </StyledView>
  );
}

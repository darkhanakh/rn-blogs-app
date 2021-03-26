import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function CreateScreen() {
  return (
    <StyledView>
      <Text>CreateScreen Component</Text>
    </StyledView>
  );
}

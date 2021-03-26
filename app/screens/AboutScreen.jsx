import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function AboutScreen() {
  return (
    <StyledView>
      <Text>AboutScreen Component</Text>
    </StyledView>
  );
}

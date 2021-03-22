import React from 'react';
import { Button, Text } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function MainScreen({ navigation }) {
  return (
    <StyledView>
      <Text>MainScreen Component</Text>
      <Button title="Go to post" onPress={() => navigation.navigate('Post')} />
    </StyledView>
  );
}

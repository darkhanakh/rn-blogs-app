import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styled from 'styled-components/native';

const PostView = styled(View)`
  margin-bottom: 15px;
  overflow: hidden;
`;

const StyledImage = styled(ImageBackground)`
  width: 100%;
  height: 200px;
`;

const TextWrapperView = styled(View)`
  background-color: rgba(0, 0, 0, 0.5);
  padding-vertical: 5px;
  width: 100%;
  align-items: center;
`;

const TitleText = styled(Text)`
  color: white;
  font-family: 'open-regular';
`;

export default function Post({ post }) {
  return (
    <PostView>
      <StyledImage
        source={{
          uri: post.img,
        }}>
        <TextWrapperView>
          <TitleText>{new Date(post.date).toLocaleDateString()}</TitleText>
        </TextWrapperView>
      </StyledImage>
    </PostView>
  );
}

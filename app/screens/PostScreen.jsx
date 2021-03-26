import React from 'react';
import { View, Button, Alert } from 'react-native';
import styled from 'styled-components/native';
import DATA from '../data';
import { THEME } from '../theme';

const StyledImage = styled.Image`
  width: 100%;
  height: 200px;
`;

const PostText = styled.Text`
  font-family: 'open-regular';
`;

const TextWrapper = styled.ScrollView`
  padding: 10px;
`;

export default function PostScreen({ navigation, route }) {
  const { postId } = route.params;
  const post = DATA.find(p => p.id === postId);

  const removePost = () => {
    Alert.alert('Удаление поста', 'Вы уверены что хотите удалить пост?', [
      {
        text: 'Отменить',
        style: 'cancel',
      },
      { text: 'Удалить', style: 'destructive', onPress() {} },
    ]);
  };

  return (
    <View>
      <StyledImage
        source={{
          uri: post.img,
        }}
      />
      <TextWrapper>
        <PostText>{post.text}</PostText>
      </TextWrapper>
      <Button title="Удалить" color={THEME.DANGER_COLOR} onPress={removePost} />
    </View>
  );
}

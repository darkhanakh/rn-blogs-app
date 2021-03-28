import React, { useEffect } from 'react';
import { View, Button, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { THEME } from '../theme';
import { deletePost } from './../store/actions/post.action';

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
  const dispatch = useDispatch();
  const { postId } = route.params;

  const post = useSelector(state =>
    state.post.allPosts.find(p => p.id === postId)
  );

  const booked = useSelector(state =>
    state.post.bookedPosts.some(post => post.id === postId)
  );

  useEffect(() => {
    navigation.setParams({ booked });
  }, [booked]);

  const removeHandler = () => {
    Alert.alert('Удаление поста', 'Вы уверены что хотите удалить пост?', [
      {
        text: 'Отменить',
        style: 'cancel',
      },
      {
        text: 'Удалить',
        style: 'destructive',
        onPress() {
          navigation.navigate('Main');

          dispatch(deletePost(postId));
        },
      },
    ]);
  };

  if (!post) {
    return null;
  }

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
      <Button
        title="Удалить"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </View>
  );
}

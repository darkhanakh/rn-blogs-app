import React, { useState } from 'react';
import {
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styled from 'styled-components/native';
import { THEME } from './../theme';
import { useDispatch } from 'react-redux';
import { createPost } from '../store/actions/post.action';

const WrapperView = styled.View`
  padding: 10px;
`;

const TitleText = styled.Text`
  font-size: 20px;
  text-align: center;
  font-family: 'open-regular';
  margin-vertical: 10px;
`;

const TextArea = styled.TextInput`
  padding: 10px;
  margin: 10px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
`;

export default function CreateScreen({ navigation }) {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const img =
    'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg';

  const createPostHandler = () => {
    const post = {
      date: new Date().toJSON(),
      booked: false,
      text,
      img,
    };
    dispatch(createPost(post));
    navigation.navigate('Main');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView>
        <WrapperView>
          <TitleText>Создай новый пост</TitleText>
          <TextArea
            placeholder="Введите текст постa"
            value={text}
            onChangeText={setText}
            multiline
          />
          <StyledImage
            source={{
              uri: img,
            }}
          />
          <Button
            title="Создать пост"
            color={THEME.MAIN_COLOR}
            onPress={createPostHandler}
          />
        </WrapperView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

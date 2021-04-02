import React, { useState } from 'react';
import { Button, Alert } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import styled from 'styled-components/native';

const Wrapper = styled.View`
  margin-bottom: 10px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 200px;
  margin-top: 10px;
`;

const askPermissions = async () => {
  const { status } = await Permissions.askAsync(
    Permissions.CAMERA,
    Permissions.CAMERA_ROLL
  );

  if (status !== 'granted') {
    Alert('Ошибка', 'Вы не дали прав на использование фото');
    return false;
  }
  return true;
};

export default function PhotoPicker({ onPick }) {
  const [image, setImage] = useState(null);
  const takePhoto = async () => {
    const hasPermissions = await askPermissions();

    if (!hasPermissions) {
      return;
    }

    const img = await ImagePicker.launchCameraAsync({
      quality: 0.8,
      allowsEditing: false,
      aspect: [16, 9],
    });

    setImage(img.uri);
    onPick(img.uri);
  };

  return (
    <Wrapper>
      <Button title="Сделать фото" onPress={takePhoto} />
      {image && <StyledImage source={{ uri: image }} />}
    </Wrapper>
  );
}

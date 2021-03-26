import React from 'react';
import { FlatList, View } from 'react-native';
import styled from 'styled-components/native';

import Post from '../components/Post';
import DATA from './../data';

const WrapperView = styled(View)`
  padding: 10px;
`;

export default function MainScreen({ navigation }) {
  const openPostHandler = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  return (
    <WrapperView>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </WrapperView>
  );
}

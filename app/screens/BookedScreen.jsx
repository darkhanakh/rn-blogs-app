import React from 'react';
import { FlatList, View } from 'react-native';
import styled from 'styled-components/native';

import Post from '../components/Post';
import DATA from './../data';

const WrapperView = styled(View)`
  padding: 10px;
`;

export default function BookedScreen({ navigation }) {
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
        data={DATA.filter(post => post.booked)}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </WrapperView>
  );
}

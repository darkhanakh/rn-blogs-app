import React from 'react';
import styled from 'styled-components/native';

import PostList from '../components/PostList';
import DATA from './../data';

export default function MainScreen({ navigation }) {
  const openPostHandler = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  return <PostList data={DATA} onOpen={openPostHandler} />;
}

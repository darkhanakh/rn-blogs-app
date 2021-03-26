import React from 'react';

import PostList from '../components/PostList';
import DATA from './../data';

export default function BookedScreen({ navigation }) {
  const openPostHandler = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  const data = DATA.filter(post => post.booked);

  return <PostList data={data} onOpen={openPostHandler} />;
}

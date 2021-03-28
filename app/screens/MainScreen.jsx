import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostList from '../components/PostList';
import { loadPosts } from './../store/actions/post.action';

export default function MainScreen({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts);
  }, [dispatch]);

  const allPosts = useSelector(state => state.post.allPosts);

  const openPostHandler = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  return <PostList data={allPosts} onOpen={openPostHandler} />;
}

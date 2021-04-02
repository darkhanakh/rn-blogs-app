import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native';

import PostList from '../components/PostList';
import { loadPosts } from './../store/actions/post.action';
import styled from 'styled-components/native';
import { THEME } from './../theme';

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function MainScreen({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const allPosts = useSelector(state => state.post.allPosts);

  const loading = useSelector(state => state.post.loading);

  if (loading) {
    return (
      <StyledView>
        <ActivityIndicator size="large" color={THEME.MAIN_COLOR} />
      </StyledView>
    );
  }

  const openPostHandler = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  return <PostList data={allPosts} onOpen={openPostHandler} />;
}

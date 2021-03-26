import React from 'react';
import { FlatList } from 'react-native';
import Post from './Post';
import styled from 'styled-components/native';

const WrapperView = styled.View`
  padding: 10px;
`;

export default function PostList({ data, onOpen }) {
  return (
    <WrapperView>
      <FlatList
        data={data}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
      />
    </WrapperView>
  );
}

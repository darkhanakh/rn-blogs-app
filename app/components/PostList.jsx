import React from 'react';
import { FlatList } from 'react-native';
import Post from './Post';
import styled from 'styled-components/native';

const WrapperView = styled.View`
  padding: 10px;
`;

const NoItemsText = styled.Text`
  font-family: 'open-regular';
  text-align: center;
  margin-vertical: 10px;
  font-size: 18px;
`;

export default function PostList({ data, onOpen }) {
  return (
    <WrapperView>
      {data.length ? (
        <FlatList
          data={data}
          keyExtractor={post => post.id.toString()}
          renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
        />
      ) : (
        <NoItemsText>Пока тут нет постов</NoItemsText>
      )}
    </WrapperView>
  );
}

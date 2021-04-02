import Database from '../../db';
import { CREATE_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED } from '../types';
import * as FileSystem from 'expo-file-system';

export const loadPosts = () => async dispatch => {
  const data = await Database.getPosts();
  dispatch({
    type: LOAD_POSTS,
    payload: data,
  });
};

export const toggleBooked = post => async dispatch => {
  await Database.updatePost(post);

  dispatch({
    type: TOGGLE_BOOKED,
    payload: post.id,
  });
};

export const deletePost = id => async dispatch => {
  await Database.removePost(id);

  dispatch({
    type: REMOVE_POST,
    payload: id,
  });
};

export const createPost = post => async dispatch => {
  const fileName = post.img.split('/').pop();
  const newPath = FileSystem.documentDirectory + fileName;

  try {
    await FileSystem.moveAsync({
      to: newPath,
      from: post.img,
    });
  } catch (e) {
    console.log(e);
  }

  const payload = { ...post, img: newPath };

  const id = Database.createPost(payload);

  payload.id = id;

  dispatch({
    type: CREATE_POST,
    payload,
  });
};

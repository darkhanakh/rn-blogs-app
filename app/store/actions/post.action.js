import { CREATE_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED } from '../types';

export const loadPosts = () => ({
  type: LOAD_POSTS,
  payload: [],
});

export const toggleBooked = id => ({
  type: TOGGLE_BOOKED,
  payload: id,
});

export const deletePost = id => ({
  type: REMOVE_POST,
  payload: id,
});

export const createPost = post => {
  post.id = '_' + Math.random().toString(36).substr(2, 9);

  return {
    type: CREATE_POST,
    payload: post,
  };
};

import DATA from '../../data';
import { LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED } from '../types';

export const loadPosts = () => ({
  type: LOAD_POSTS,
  payload: DATA,
});

export const toggleBooked = id => ({
  type: TOGGLE_BOOKED,
  payload: id,
});

export const deletePost = id => ({
  type: REMOVE_POST,
  payload: id,
});

import DATA from '../../data';
import { LOAD_POSTS, TOGGLE_BOOKED } from '../types';

export const loadPosts = () => ({
  type: LOAD_POSTS,
  payload: DATA,
});

export const toggleBooked = id => ({
  type: TOGGLE_BOOKED,
  payload: id,
});

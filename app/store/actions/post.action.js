import DATA from '../../data';
import { LOAD_POSTS } from '../types';

export const loadPosts = () => ({
  type: LOAD_POSTS,
  payload: DATA,
});

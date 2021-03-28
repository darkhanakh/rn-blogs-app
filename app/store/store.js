import { createStore } from 'redux';
import { combineReducers } from 'redux';

import { postReducer } from './reducers/post.reducer';

const rootReducer = combineReducers({
  post: postReducer,
});

export default createStore(rootReducer);

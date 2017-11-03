import { combineReducers } from 'redux';
import {
  ERROR_RECEIVED,
  POSTS_LOADING,
  POSTS_RECEIVED
} from './actions';

function loading(state = {}, action) {
  switch (action.type) {
    case POSTS_LOADING:
      return {
        ...state,
        posts: action.loading
      };
    default:
      return state;
  }
}

function posts(state = [], action) {
  switch (action.type) {
    case POSTS_RECEIVED:
      return action.posts;
    default:
      return state;
  }
}

function error(state = null, action) {
  switch (action.type) {
    case ERROR_RECEIVED:
      return action.error;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  loading,
  posts,
  error
});

export default rootReducer;

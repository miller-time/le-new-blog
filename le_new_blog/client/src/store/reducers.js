import { combineReducers } from 'redux';
import {
  ERROR_RECEIVED,
  POSTS_LOADING,
  POSTS_RECEIVED,
  USER_INFO_LOADING,
  USER_INFO_RECEIVED
} from './actions';

function loading(state = {}, action) {
  switch (action.type) {
    case POSTS_LOADING:
      return {
        ...state,
        posts: action.loading
      };
    case USER_INFO_LOADING:
      return {
        ...state,
        userInfo: action.loading
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

function userInfo(state = {}, action) {
  switch (action.type) {
    case USER_INFO_RECEIVED:
      return action.userInfo;
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
  userInfo,
  error
});

export default rootReducer;

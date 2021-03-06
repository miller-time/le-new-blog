import { combineReducers } from 'redux';
import {
  ERROR_RECEIVED,
  POSTS_LOADING,
  POSTS_RECEIVED,
  USER_INFO_LOADING,
  USER_INFO_RECEIVED,
  CREATE_POST_LOADING,
  CREATE_POST_RECEIVED,
  EDIT_POST_LOADING,
  EDIT_POST_RECEIVED
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
    case CREATE_POST_LOADING:
      return {
        ...state,
        create: action.loading
      };
    case EDIT_POST_LOADING:
      return {
        ...state,
        edit: action.loading
      };
    default:
      return state;
  }
}

function posts(state = [], action) {
  switch (action.type) {
    case POSTS_RECEIVED:
      return action.posts;
    case CREATE_POST_RECEIVED:
      return [
        action.post,
        ...state
      ];
    case EDIT_POST_RECEIVED:
      return state.map((post) => {
        if (post.id === action.post.id) {
          return action.post;
        }
        return post;
      });
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

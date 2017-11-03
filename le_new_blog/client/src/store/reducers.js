import { combineReducers } from 'redux';

function posts(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts
});

export default rootReducer;

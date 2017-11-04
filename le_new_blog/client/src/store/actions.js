export const ERROR_RECEIVED = 'ERROR_RECEIVED';

function errorReceived(error) {
  return {
    type: ERROR_RECEIVED,
    error
  };
}

export const POSTS_LOADING = 'POSTS_LOADING';
export const POSTS_RECEIVED = 'POSTS_RECEIVED';

function postsLoading(loading) {
  return {
    type: POSTS_LOADING,
    loading
  };
}

function postsReceived(posts) {
  return {
    type: POSTS_RECEIVED,
    posts
  };
}

function makeRequestForPosts() {
  return (dispatch) => {
    dispatch(postsLoading(true));

    fetch('/api/posts').then((response) => {
      if (response.ok) {
        response.json().then((jsonResponse) => {
          dispatch(postsLoading(false));
          dispatch(postsReceived(jsonResponse.posts));
        });
      } else {
        return response.text().then((error) => {
          dispatch(postsLoading(false));
          dispatch(errorReceived(error));
        });
      }
    });
  };
}

export function getPosts() {
  return (dispatch) => {
    dispatch(makeRequestForPosts());
  };
}

export const USER_INFO_LOADING = 'USER_INFO_LOADING';
export const USER_INFO_RECEIVED = 'USER_INFO_RECEIVED';

function userInfoLoading(loading) {
  return {
    type: USER_INFO_LOADING,
    loading
  };
}

function userInfoReceived(userInfo) {
  return {
    type: USER_INFO_RECEIVED,
    userInfo
  };
}

function makeRequestForUserInfo() {
  return (dispatch) => {
    dispatch(userInfoLoading(true));

    fetch('/api/user_info', { credentials: 'include' }).then((response) => {
      if (response.ok) {
        response.json().then((userInfo) => {
          dispatch(userInfoLoading(false));
          dispatch(userInfoReceived(userInfo));
        });
      } else {
        response.text().then((error) => {
          dispatch(userInfoLoading(false));
          dispatch(errorReceived(error));
        });
      }
    });
  };
}

export function getUserInfo() {
  return (dispatch) => {
    dispatch(makeRequestForUserInfo());
  };
}

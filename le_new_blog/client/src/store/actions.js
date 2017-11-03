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

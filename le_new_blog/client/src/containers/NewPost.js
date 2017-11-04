import React from 'react';

function NewPost(props) {
  return (
    <div>
      <h1>New Post</h1>
      <button onClick={() => props.history.push('/')}>
        Submit
      </button>
    </div>
  );
}

export default NewPost;

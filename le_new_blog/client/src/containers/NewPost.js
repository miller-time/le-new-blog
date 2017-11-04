import React, { Component } from 'react';
import { connect } from 'react-redux';

import Editor from '../components/Editor';
import { createPost } from '../store/actions';

class NewPostComponent extends Component {
  render() {
    return (
      <div>
        <h1>New Post</h1>
        <Editor onSubmit={(post) => this.submitPost(post)} />
      </div>
    );
  }

  submitPost(post) {
    const { dispatch, history } = this.props;
    dispatch(createPost(post.title, post.body));
    history.push('/');
  }
}

const NewPost = connect()(NewPostComponent);

export default NewPost;

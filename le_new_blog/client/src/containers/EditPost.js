import React, { Component } from 'react';
import { connect } from 'react-redux';

import Editor from '../components/Editor';
import { editPost, getPosts } from '../store/actions';

class EditPostComponent extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const post = this.props.post;

    return (
      <div>
        <h1>Edit Post</h1>
        <Editor
          post={post}
          onSubmit={(post) => this.submitPost(post)}
        />
      </div>
    );
  }

  submitPost(post) {
    this.props.onSubmit(post.title, post.body);
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { posts } = stateProps;
  const { dispatch } = dispatchProps;
  const { match, history } = ownProps;

  const id = match.params.id;
  let post;
  posts.forEach((p) => {
    if (p.id === Number(id)) {
      post = p;
    }
  });

  return {
    post,
    onLoad: () => {
      if (posts.length === 0) {
        dispatch(getPosts());
      }
    },
    onSubmit: (title, body) => {
      dispatch(editPost(id, title, body));
      history.push('/');
    }
  };
}

const EditPost = connect(
  mapStateToProps,
  null,
  mergeProps
)(EditPostComponent);

export default EditPost;

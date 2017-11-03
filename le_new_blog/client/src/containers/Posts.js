import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from '../components/Post';
import { getPosts } from '../store/actions';

class PostsComponent extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const posts = this.props.posts || [];

    return (
      <div>
        {posts.map((post, index) => (
          <Post key={index} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    error: state.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      dispatch(getPosts());
    }
  };
}

const Posts = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsComponent);

export default Posts;

import React from 'react';
import ReactMarkdown from 'react-markdown';
import * as moment from 'moment';

import './Post.css';

function Post(props) {
  const { title, body, created } = props.post;

  const dateCreated = moment(created);

  const display = moment().diff(dateCreated, 'days') < 1
    ? dateCreated.fromNow()
    : dateCreated.format('LLLL');
  const timestamp = dateCreated.format('LLLL');

  return (
    <div>
      <h3>{title}</h3>
      <div className="timestamp" title={timestamp}>{display}</div>
      <div className="post-body">
        <ReactMarkdown source={body} />
      </div>
    </div>
  );
}

export default Post;

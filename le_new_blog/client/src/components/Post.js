import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import * as moment from 'moment';

import './Post.css';

function Post(props) {
  const admin = props.admin;
  const { id, title, body, created } = props.post;

  const editUrl = `/edit/${id}`;

  const dateCreated = moment(created);

  const display = moment().diff(dateCreated, 'days') < 1
    ? dateCreated.fromNow()
    : dateCreated.format('LLLL');
  const timestamp = dateCreated.format('LLLL');

  return (
    <div>
      <div className="post-heading">
        <h3>{title}</h3>
        {admin ?
          <Link to={editUrl}>
            <span className="glyphicon glyphicon-pencil"></span>
          </Link>
        : null}
      </div>
      <div className="timestamp" title={timestamp}>{display}</div>
      <div className="post-body">
        <ReactMarkdown source={body} />
      </div>
    </div>
  );
}

export default Post;

import React from 'react';
import {Link} from 'react-router';

export default class Comment extends React.Component {
  render() {
    const comment = this.props.comment;

    return (
      <div className="comment-card">
        <Link to={`/comments/${comment.id}`} className="comment-link">
          <h3 className="comment-desc">
            {comment.name}
          </h3>
        </Link>
        <p className="comment-text">
          {comment.body}
        </p>
        <p className="comment-email">
					{comment.email}
        </p>
      </div>
    );      
  }
}
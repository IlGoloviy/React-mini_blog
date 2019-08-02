import React from 'react';
import Comment from './Comment';
import axios from 'axios';

export default class CommentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null
    }
  }
  
  render() {
    if (!this.state.comments) {
      return (
        <div className="blank-page">
          <div className="spiner"></div>
        </div>
      );
    } else {
      const comments = this.state.comments.map(com => {
        return <Comment key={com.id} comment={com}></Comment>
      });

      return (
        <div className="comment-list">
          {comments}
        </div>
      );
    }
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/comments/').then(res => {
      this.setState({comments: res.data});
    });
  }
}
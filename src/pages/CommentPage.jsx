import React from 'react';
import Comment from '../components/Comment';
import axios from 'axios';

export default class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: null
    }
  }
  
  render() {
    return (
      <div className="comment-page">
        {this.state.comment && <Comment comment={this.state.comment}/>}
      </div>
    );
  }

  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/comments/${this.props.params.commentId}`).then(res => {
      this.setState({comment: res.data});
    });
  }
}
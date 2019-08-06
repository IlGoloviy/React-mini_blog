import React from 'react';
import Comment from '../components/Comment';
import User from '../components/User';
import Post from '../components/Post';
import axios from 'axios';

export default class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: null,
      post: null,
      user: null
    }
  }
  
  render() {
    return (
      <div className="comment-page">
        {this.state.user && <User user={this.state.user} />}
        <div className="arrow">&#8658;</div>
        {this.state.post && <Post post={this.state.post} />}
        <div className="arrow"><span>&#8658;</span></div>
        {this.state.comment && <Comment comment={this.state.comment}/>}
      </div>
    );
  }

  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/comments/${this.props.match.params.commentId}`).then(res => {
      this.setState({comment: res.data});
    });
  }

  componentDidUpdate() {
    if (this.state.comment && !this.state.post) {
      const idPost = this.state.comment.postId;
      axios.get(`http://jsonplaceholder.typicode.com/posts/${idPost}`).then(res => {
        this.setState({post: res.data});
      });
    }
    if (this.state.post && !this.state.user) {
      const idUser = this.state.post.userId;
      axios.get(`http://jsonplaceholder.typicode.com/users/${idUser}`).then(res => {
        this.setState({user: res.data});
      });
    }
  }
}
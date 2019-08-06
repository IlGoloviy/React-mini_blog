import React from 'react';
import Post from '../components/Post';
import Comment from '../components/Comment';
import axios from 'axios';

export default class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      comments: null
    }
  }
  
  render() {
    let commentsPost;
    if (this.state.comments) {
      commentsPost = this.state.comments.map(com => {
        return <Comment key={com.id} comment={com} />
      });
    }

    return (
      <div className="post-page">
        {this.state.post && <Post post={this.state.post} />}
        {this.state.comments && 
          <div className="post-page-comments">
            {commentsPost}
          </div>}
      </div>
    );
  }

  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`).then(res => {
      this.setState({post: res.data});
    });
  }

  componentDidUpdate() {
    if (this.state.post && !this.state.comments) {
      const idPost = this.state.post.id;
      axios.get(`http://jsonplaceholder.typicode.com/comments/`).then(res => {
        const arrComments = res.data.filter(comment => {
          return (comment.postId === idPost);
        }); 
        this.setState({comments: arrComments});
      });
    }
  }
}
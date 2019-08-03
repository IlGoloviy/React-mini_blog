import React from 'react';
import Post from '../components/Post';
import User from '../components/User';
import axios from 'axios';

export default class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      user: null
    }
  }
  
  render() {
    
    return (
      <div className="post-page">
        {this.state.post && <Post post={this.state.post} />}
        {this.state.user && 
          <div>
            <h3>author of this post</h3>
            <User user={this.state.user} />
          </div>}
      </div>
    );
  }

  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`).then(res => {
      this.setState({post: res.data});
    });
  }

  componentDidUpdate() {
    const idUser = this.state.post.userId;
    if (idUser) {
      axios.get(`http://jsonplaceholder.typicode.com/users/${idUser}`).then(res => {
        this.setState({user: res.data});
      });
    }
  }
}
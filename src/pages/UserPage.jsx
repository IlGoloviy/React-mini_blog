import React from 'react';
import User from '../components/User';
import Post from '../components/Post';
import axios from 'axios';

export default class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      posts: null
    }
  }
  
  render() {
    let postsUser;
    if (this.state.posts) {
      postsUser = this.state.posts.map(post => {
        return <Post key={post.id} post={post} />
      });
    }

    return (
      <div className="user-page">
        {this.state.user && <User user={this.state.user}/>}
        {this.state.posts && 
          <div className="user-page-posts">
            {postsUser}
          </div>}
      </div>
    );
  }

  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/users/${this.props.math.params.userId}`).then(res => {
      this.setState({user: res.data});
    });
  }

  componentDidUpdate() {
    if (this.state.user && !this.state.posts) {
      const idUser = this.state.user.id;
      axios.get(`http://jsonplaceholder.typicode.com/posts/`).then(res => {
        const arrPosts = res.data.filter(post => {
          return (post.userId === idUser);
        }); 
        this.setState({posts: arrPosts});
      });
    }
  }
}
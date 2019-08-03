import React from 'react';
import Post from './Post';
import axios from 'axios';

export default class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null
    }
  }
  
  render() {
    if (!this.state.posts) {
      return (
        <div className="blank-page">
          <div className="spiner"></div>
        </div>
      );
    } else {
      const posts = this.state.posts.map(post => {
        return <Post key={post.id} post={post}></Post>
      });

      return (
        <div className="post-list">
          {posts}
        </div>
      );
    }
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts/').then(res => {
      this.setState({posts: res.data});
    });
  }
}
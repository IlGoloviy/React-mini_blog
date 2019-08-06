import React from 'react';
import Post from './Post';

export default class PostsList extends React.Component {
  render() {
    console.log(this.props.posts);
    if (!this.props.posts) {
      return (
        <div className="blank-page">
          <div className="spiner"></div>
        </div>
      );
    } else {
      const posts = this.props.posts.map((post, index) => {
        return <Post key={index} post={post}></Post>
      });

      return (
        <div className="post-list">
          {posts}
        </div>
      );
    }
  }
}
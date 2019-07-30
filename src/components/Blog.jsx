import React from 'react';
import Post from './Post';

class Blog extends React.Component {

  render() {
    const posts = this.props.data.map(item => {
      return (
        <Post key={item.id} post={item}></Post>
      );
    });
    

    return(
      <div className="blog">
        {posts}
      </div>
    );
  }
}

export default Blog;
import React from 'react';
import PostsList from '../components/PostsList';

export default class PostsPage extends React.Component {
  render() {
    return (
      <>
      <h1 className="desc">
        Posts
      </h1>
      { 
        (!this.props.children) 
        ?
        <PostsList></PostsList>
        :
        this.props.children
      }
      </>
    );
  }
}
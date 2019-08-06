import React from 'react';
import PostsList from '../components/PostsList';
import {Link} from 'react-router-dom';
import {getPosts} from '../actions/actionCreators';
import StorePosts from '../stores/storePosts';

export default class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null
    }
    this.onPostChange = this.onPostChange.bind(this);
  }

  onPostChange() {
    const posts = StorePosts.posts;
    this.setState({posts});
  }
  
  render() {
    return (
      <>
      <h1 className="desc">
        Posts
          <button className="btn-add_post">
            <Link to="/modal" className="link-add_post">  
              add post
            </Link>
          </button>
      </h1>
      { 
        (!this.props.children) 
        ?
        <PostsList posts={this.state.posts}></PostsList>
        :
        this.props.children
      }
      </>
    );
  }

  componentDidMount() {
    StorePosts.on('change', this.onPostChange);
    getPosts();
  }

  componentWillUnmount() {
    StorePosts.removeListener('change', this.onPostChange);
  }
}
import React from 'react';
import Post from '../components/Post';
import axios from 'axios';

export default class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    }
  }
  
  render() {
    return (
      <div className="post-page">
        {this.state.post && <Post post={this.state.post}/>}
      </div>
    );
  }

  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`).then(res => {
      this.setState({post: res.data});
    });
  }
}
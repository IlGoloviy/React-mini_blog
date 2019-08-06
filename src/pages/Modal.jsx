import React from 'react';
import axios from 'axios';
import { addPost } from '../actions/actionCreators';
import { Redirect } from 'react-router-dom';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      users: null,
      redirect: false
    }
    this.userId = React.createRef();
    this.title = React.createRef();
    this.text = React.createRef();
    this.createPost = this.createPost.bind(this);
  }

  createPost() {
    const post = {
      userId: this.userId.current.value,
      title: this.title.current.value,
      body: this.text.current.value
    };
    this.setState({post, redirect: true});
  }

  static getDerivedStateFromProps(props, state) {
    if (state.post) {
      console.log(state.post);
      addPost(state.post);
    }
    return null;
  }

  render() {
    let optionList;
    if (this.state.users) {
      optionList = this.state.users.map(user => {
        return <option key={user.id} value={user.id}>{user.name}</option>
      });
    }

    if (this.state.redirect) {
      return <Redirect to="/posts" />;
    }
    
    return (
      <>
      <h1 className="desc">adding a post</h1>
      <div className="modal-add_post">
        <label>
          user
          <select ref={this.userId}>
            {optionList}
          </select>
        </label>
        <label>
          title
          <input ref={this.title} type="text"/>
        </label>
        <label>
          text
          <textarea ref={this.text} cols="30" rows="10"></textarea>
        </label>
        <button onClick={this.createPost}>create</button>
      </div>
      </>
    );
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/users/').then(res => {
      this.setState({users: res.data});
    });
  }
}
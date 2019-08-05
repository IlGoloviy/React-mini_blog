import React from 'react';
import axios from 'axios';
import PostsPage from '../pages/PostsPage';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      users: null
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
    this.setState({post});
  }

  static getDerivedStateFromProps(props, state) {
    console.log(state);
    return null;
  }

  render() {
    let optionList;
    if (this.state.users) {
      optionList = this.state.users.map(user => {
        return <option key={user.id} value={user.id}>{user.name}</option>
      });
    }
    
    return (
      <>
      <h1 className="desc">adding a post</h1>
      <div className="modal-add_post">
        <label htmlFor="">
          user
          <select ref={this.userId} name="" id="">
            {optionList}
          </select>
        </label>
        <label htmlFor="">
          title
          <input ref={this.title} type="text"/>
        </label>
        <label htmlFor="">
          text
          <textarea ref={this.text} name="" id="" cols="30" rows="10"></textarea>
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
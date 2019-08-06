import axios from 'axios';
import dispatcher from '../dispatcher';

export function addPost(data) {
  const action = {
    type: 'ADD_POST',
    data
  }
  console.log(action);
  dispatcher.dispatch(action);
}

export function getPosts() {
  axios.get('http://jsonplaceholder.typicode.com/posts/').then(res => {
    const action = {
      type: 'GET_POSTS',
      data: res.data
    }
    dispatcher.dispatch(action);
  })
}
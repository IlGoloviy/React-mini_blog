import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from './layout/Layout';
import Main from './pages/Main';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';
import PostsPage from './pages/PostsPage';
import PostPage from './pages/PostPage';
import CommentsPage from './pages/CommentsPage';
import CommentPage from './pages/CommentPage';
import Modal from './pages/Modal';

import './style.css';

ReactDOM.render(
  <>
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main}></IndexRoute>
      <Route path="users" component={UsersPage}>
        <Route path=":userId" component={UserPage}></Route>
      </Route>
      <Route path="posts" component={PostsPage}>
        <Route path=":postId" component={PostPage}></Route>
      </Route>
      <Route path="modal" component={Modal}></Route>
      <Route path="comments" component={CommentsPage}>
        <Route path=":commentId" component={CommentPage}></Route>
      </Route>
    </Route>
  </Router>
  </>, 
  document.querySelector('#root')
)
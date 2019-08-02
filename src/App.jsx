import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from './layout/Layout';
import Main from './pages/Main';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';
import Posts from './pages/Posts';
import Comments from './pages/Comments';

import './style.css';

ReactDOM.render(
  <>
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main}></IndexRoute>
      <Route path="users" component={UsersPage}>
        <Route path=":userId" component={UserPage}></Route>
      </Route>
      <Route path="posts" component={Posts}>
        {/* <Route path=":postId" component={Post}></Route> */}
      </Route>
      <Route path="comments" component={Comments}>
        {/* <Route path=":commentId" component={Comment}></Route> */}
      </Route>
    </Route>
  </Router>
  </>, 
  document.querySelector('#root')
)
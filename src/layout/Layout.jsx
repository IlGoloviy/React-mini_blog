import React from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import {Route, Switch} from 'react-router-dom';
import Main from '../pages/Main';
import UsersPage from '../pages/UsersPage';
import UserPage from '../pages/UserPage';
import PostsPage from '../pages/PostsPage';
import PostPage from '../pages/PostPage';
import CommentsPage from '../pages/CommentsPage';
import CommentPage from '../pages/CommentPage';
import Modal from '../pages/Modal';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.src = "https://i.pravatar.cc/75?img=2";
  }

  isActive(href) {
    return window.location.pathname === href;
  }

  render() {
    return (
      <>
      <Menu src={this.src}>
        <MenuItem href="/" active={this.isActive("/")}>Main</MenuItem>
        <MenuItem href="/users" active={this.isActive("/users")}>Users</MenuItem>
        <MenuItem href="/posts" active={this.isActive("/posts")}>Posts</MenuItem>
        <MenuItem href="/comments" active={this.isActive("/comments")}>Comments</MenuItem>
      </Menu>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/users" component={UsersPage} />
          <Route path="/user/:userId" component={UserPage} />
          <Route path="/posts" component={PostsPage} />
          <Route path="/post/:postId" component={PostPage} />
          <Route path="/modal" component={Modal} />
          <Route path="/comments" component={CommentsPage} />
          <Route path="/comments/:commentId" component={CommentPage} />
        </Switch>
      </div>
      <footer className="footer">
        &copy; 2019 blog Malysha
      </footer>
      </>
    );
  }
}

export default Layout;
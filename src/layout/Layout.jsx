import React from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';

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
        {this.props.children}
      </div>
      <footer className="footer">
        &copy; 2019 blog Malysha
      </footer>
      </>
    );
  }
}

export default Layout;
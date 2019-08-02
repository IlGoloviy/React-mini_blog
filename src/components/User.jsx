import React from 'react';
import {Link} from 'react-router';

export default class User extends React.Component {
  render() {
    const u = this.props.user;

    return (
      <div className="user-card">
        <Link to={`/users/${u.id}`} className="user-card-link">
          <h3>{u.username}</h3>
        </Link>
        <h5>{u.name}</h5>
        <p className="user-card-email">
          <span>email</span>
          <span>{u.email}</span>
        </p>
        <p className="user-card-phone">
          <span>phone</span>
          <span>{u.phone}</span>
        </p>
        <p className="user-card-website">
          <span>website</span>
          <span>{u.website}</span>
        </p>
        <div className="user-card-tabledesc">
          <span>address</span>
        </div>
        <div className="user-card-tabletext">
          <span>{u.address.city}</span>
          <span>{u.address.street}</span>
          <span>{u.address.suite}</span>
        </div>
      </div>
    );
  }
}
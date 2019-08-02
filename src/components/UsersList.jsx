import React from 'react';
import User from '../components/User';
import axios from 'axios';

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    }
  }
  
  render() {
    if (!this.state.users) {
      return (
        <div className="blank-page">
          <div className="spiner"></div>
        </div>
      );
    } else {
      const users = this.state.users.map(user => {
        return <User key={user.id} user={user}></User>
      });

      return (
        <div className="user-list">
          {users}
        </div>
      );
    }
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/users/').then(res => {
      this.setState({users: res.data});
    });
  }
}
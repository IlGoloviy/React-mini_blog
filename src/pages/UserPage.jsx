import React from 'react';
import User from '../components/User';
import axios from 'axios';

export default class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }
  
  render() {
    return (
      <div className="user-page">
        {this.state.user && <User user={this.state.user}/>}
      </div>
    );
  }

  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/users/${this.props.params.userId}`).then(res => {
      this.setState({user: res.data});
    });
  }
}
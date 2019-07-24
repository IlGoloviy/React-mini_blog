import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="form">
        <input className="form-input" type="text" />
        <input className="form-input" type="password" />
        <button className="form-btn">Log-In</button>
      </div>
    );
  }
}

export default Login;
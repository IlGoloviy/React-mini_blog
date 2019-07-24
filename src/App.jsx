import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Login from './Login';
import './style.css';

class App extends React.Component {
  render() {
    const menuItems = [
      {title: "Main", href: "/"},
      {title: "About", href: "/#about"},
      {title: "Contacts", href: "/#contacts"}
    ];

    return (
      <div className="app">
        <Menu data={menuItems}></Menu>
        <Login></Login>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
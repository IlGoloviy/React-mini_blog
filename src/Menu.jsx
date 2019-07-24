import React from 'react';

class Menu extends React.Component {
  render() {
    const data = this.props.data;
    const items = data.map((item, index) => {
      return <li key={index}><a href={item.href}>{item.title}</a></li>
    })

    return (
      <div className="menu">
        <ul className="menu-ul">
          {items}
        </ul>
      </div>
    );
  }
}

export default Menu;
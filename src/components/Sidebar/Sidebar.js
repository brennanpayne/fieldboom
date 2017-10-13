import React, { Component } from 'react';
import './Sidebar.css';
import logo from 'images/logo.png'

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <div className="Sidebar__logo-container">
          <img src={logo} alt="fieldboom logo"/>
        </div>
      </div>
    );
  }
}

export default Sidebar;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TabBar.css';

class TabBar extends Component {
  render() {
    return (
      <div className="TabBar">
        {this.props.children}
      </div>
    );
  }
}

TabBar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

export default TabBar;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

class Tab extends Component {
  render() {
    return (
      <div className={`Tab ${this.props.active ? 'active' : ''}`}>
        {this.props.text}
      </div>
    );
  }
}

Tab.propTypes = {
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Tab;

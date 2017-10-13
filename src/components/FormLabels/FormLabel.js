import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FormLabel.css';
class FormLabel extends Component {

  render() {
    let content = <span>{this.props.text} {this.props.count > 0 ? `(${this.props.count})` : ''}</span>
    return (
      <div className={`FormLabel ${this.props.active ? 'FormLabel--active': ''}`}>
        {content}
      </div>
    );
  }
}
FormLabel.defaultProps = {
  active: false
}
FormLabel.propTypes = {
  text: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  active: PropTypes.bool
}

export default FormLabel;

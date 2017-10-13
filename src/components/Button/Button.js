import React, { Component } from 'react';
import './Button.css';
import PropTypes from 'prop-types';
class Button extends Component {
  render() {
    let { style } = this.props;
    return (
      <button style={style} className={`Button Button--${this.props.buttonType} Button--pill`}>
        {this.props.children}
        <span style={{verticalAlign:'middle'}}>{this.props.text}</span>
      </button>
    );
  }
}
Button.defaultProps = {
  buttonType: 'default'
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  buttonType: PropTypes.oneOf(['primary', 'default']),
  style: PropTypes.object,
  children: PropTypes.element
}

export default Button;

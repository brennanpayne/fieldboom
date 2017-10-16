import React, { Component } from 'react';
import './Button.css';
import PropTypes from 'prop-types';
class Button extends Component {
  render() {
    let { style, pill } = this.props;
    let modifier = '';
    if (pill) {
      modifier = 'Button--pill';
    }
    return (
      <button style={style} className={`Button Button--${this.props.buttonType} ${modifier}`} onClick={this.props.onClick}>
        {this.props.children}
        <span style={{verticalAlign:'middle'}}>{this.props.text}</span>
      </button>
    );
  }
}
Button.defaultProps = {
  buttonType: 'default',
  pill: false
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  buttonType: PropTypes.oneOf(['primary', 'default']),
  style: PropTypes.object,
  children: PropTypes.element,
  pill: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button;

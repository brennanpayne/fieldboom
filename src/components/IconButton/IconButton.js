import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import Icon from 'components/Icon';
import './IconButton.css';
class IconButton extends Component {
  render() {
    let { iconName, ...props } = this.props;
    return (
      <Button {...props}>
        <Icon className="IconButton__icon" iconName={iconName}/>
      </Button>
    );
  }
}

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired
}

export default IconButton;

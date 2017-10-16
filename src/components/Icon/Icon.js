import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Icon extends Component {
  render() {
    let {style} = this.props;
    style = _.assign({}, style, {verticalAlign: 'middle'});
    return (
      <i style={style} className={`fa fa-${this.props.iconName} fa-2x ${this.props.className}`} aria-hidden="true" onClick={this.props.onClick}></i>
    );
  }
}

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func
}

export default Icon;

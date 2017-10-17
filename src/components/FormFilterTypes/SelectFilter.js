import React, {Component} from 'react';
import CheckboxFilter from './CheckboxFilter';
import PropTypes from 'prop-types';
import _ from 'lodash';


class SelectFilter extends Component {


  render() {
    let options = _.reduce(this.props.answers, (memo, answer) => {
      memo[answer.content.toLowerCase()] = false;
      return memo;
    }, {});
    options = _.assign({}, options, this.props.value);
    return (
      <CheckboxFilter options={options} handleChange={this.props.handleChange} />
    )
  }
}

SelectFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.objectOf(PropTypes.bool).isRequired
}


export default SelectFilter;

import React, {Component} from 'react';
import CheckboxFilter from './CheckboxFilter';
import PropTypes from 'prop-types';
import _ from 'lodash';


class RangeFilter extends Component {

  componentWillMount() {

  }

  render() {

    let high = this.props.answers.find(answer => {
      return answer.rule === "@highRange"
    });
    let low = this.props.answers.find(answer => {
      return answer.rule === "@lowRange"
    });

    let range = _.range(low.ruleValue, high.ruleValue + 1);
    let options = _.reduce(range, (memo, value) => {
      memo[`${value}`] = false;
      return memo;
    }, {});
    options = _.assign({}, options, this.props.value);

    return (
      <CheckboxFilter options={options} handleChange={this.props.handleChange} />
    )
  }
}

RangeFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.objectOf(PropTypes.bool).isRequired
}


export default RangeFilter;

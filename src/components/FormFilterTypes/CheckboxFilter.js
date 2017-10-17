import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CheckboxFilter.css';
import _ from 'lodash';
import Checkbox from 'material-ui/Checkbox';


class CheckboxFilter extends Component {
  selectAll = (e) => {
    e.preventDefault();
    this.setAllOptionsToValue(true);
  }
  selectNone = (e) => {
    e.preventDefault();
    this.setAllOptionsToValue(false);
  }

  setAllOptionsToValue = (valueToSet) => {
    this.props.handleChange(_.reduce(this.props.options, (props, value, option) => {
      props[option] = valueToSet;
      return props;
    }, {}));
  }

  handleChecked = (e, checked) => {
    let value = e.target.name;
    this.props.handleChange(_.set(this.props.options, `${value}`, checked));
  }

  render() {
    let checkBoxes = _.map(this.props.options, (value, key) => {
      return (
        <Checkbox name={`${key}`} checked={value} label={_.capitalize(key)} key={key} onCheck={this.handleChecked} />
      );
    });
    return (
      <div className="CheckboxFilter">
        <div className="CheckboxFilter__row">
          <span className="CheckboxFilter__selectAllOrNone" onClick={this.selectAll}>Select All</span>{' / '}<span className="CheckboxFilter__selectAllOrNone" onClick={this.selectNone}>None</span>
        </div>
        {checkBoxes}
      </div>
    );
  }
}
CheckboxFilter.propTypes = {
  options: PropTypes.objectOf(PropTypes.bool).isRequired,
  handleChange: PropTypes.func.isRequired
}

export default CheckboxFilter;

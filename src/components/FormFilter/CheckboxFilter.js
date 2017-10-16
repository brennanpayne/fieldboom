import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import _ from 'lodash';


class CheckboxFilter extends Component {
  state = {
  }

  selectAll = (e) => {
    e.preventDefault();
    this.setAllOptionsToValue(true);
  }
  selectNone = (e) => {
    e.preventDefault();
    this.setAllOptionsToValue(false);
  }

  setAllOptionsToValue = (valueToSet) => {
    this.setState((oldState) => {
      return _.reduce(oldState, (memo, key, value) => {
        memo[value] = valueToSet;
        return memo;
      }, {});
    })
  }
  handleChecked = (e, checked) => {
    let value = e.target.name;
    this.setState((oldState) => {
      let newState = _.cloneDeep(oldState);
      newState[value] = oldState[value] ? false : true ;
      this.props.handleChange(_.reduce(newState, (memo, value, key) => {
        if (value) {
          memo.push(parseInt(key, 10));
        }
        return memo;
      }, []));
      return newState;
    });
  }
  componentWillMount() {
    let high = this.props.answers.find(answer => {
      return answer.rule === "@highRange"
    });
    let low = this.props.answers.find(answer => {
      return answer.rule === "@lowRange"
    });
    let range = _.range(low.ruleValue, high.ruleValue + 1);
    let state = _.reduce(range, (memo, value) => {
      memo[`${value}`] = false;
      return memo;
    }, {});
    this.setState(state);
  }
  render() {

    let options = _.map(this.state, (value, key) => {
      return (
        <Checkbox name={`${key}`} checked={value} label={key} key={key} onCheck={this.handleChecked} />
      );
    });
    return (
      <div>
        <span style={{color: "#336bea", cursor: "pointer"}} onClick={this.selectAll}>Select All</span>{' / '}<span style={{color: "#336bea", cursor: "pointer"}} onClick={this.selectNone}>None</span>
        {options}
      </div>
    );
  }
}


export default CheckboxFilter;

import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import _ from 'lodash';


class CheckboxFilter extends Component {
  state = {
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
  render() {
    let high = this.props.answers.find(answer => {
      return answer.rule === "@highRange"
    });
    let low = this.props.answers.find(answer => {
      return answer.rule === "@lowRange"
    });

    let count = low.ruleValue;
    let options = _.times(high.ruleValue - low.ruleValue + 1, (index) => {
      let option = (
        <Checkbox name={`${count}`} checked={this.state[count]} label={count} key={index} onCheck={this.handleChecked} />
      );
      count++;
      return option;
    });
    return (
      <div>
        {options}
      </div>
    );
  }
}


export default CheckboxFilter;

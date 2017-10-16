import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {textFilter} from 'utils/filters';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Popover from 'material-ui/Popover';
import TextField from 'material-ui/TextField';

import './FormFilter.css';

class FormFilter extends Component {
  state = {
    filter: '',
    isOpen: false
  }

  handleChange = (e) => {
    return this.setState({
      filter: e.target.value
    });
  }

  handleRequestClose = () => {
    this.setState({
      isOpen: false
    });
  }

  applyFilter = () => {
    return this.props.applyFilter({
      type: this.props.type,
      value: this.state.filter,
      questionId: this.props.questionId
    });
  }

  openMenu = (event) => {
    this.setState({
      isOpen: true,
      anchorEl: event.currentTarget
    });
  }

  render() {
    return (
      <div className="FormFilter">
        <Icon iconName="filter" onClick={this.openMenu} />

        <Popover
          open={this.state.isOpen}
          anchorEl={this.state.anchorEl}
          onRequestClose={this.handleRequestClose}
          className="FormFilter__popover"
        >
          <div>Must Contain:</div>
          <Filter handleChange={this.handleChange} value={this.state.filter}/>
          <br />
          <div>
            <Button pill={false} text={"Apply"} buttonType="primary" onClick={this.applyFilter} style={{marginRight: '6px'}}/>
            <Button pill={false} text={"Cancel"} buttonType="default" onClick={this.handleRequestClose}/>
          </div>
        </Popover>
      </div>
    );
  }
}

function Filter(props) {
  return (
    <div>
      <TextField onChange={props.handleChange} value={props.value} type="text"/>
    </div>
  );
}

FormFilter.defaultProps = {

}

FormFilter.propTypes = {

}

export default FormFilter;

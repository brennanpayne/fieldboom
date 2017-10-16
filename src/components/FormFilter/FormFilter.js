import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import Icon from 'components/Icon';
import Popover from 'material-ui/Popover';
import CheckboxFilter from './CheckboxFilter';
import TextFilter from './TextFilter';

import './FormFilter.css';

class FormFilter extends Component {
  state = {
    filter: null,
    isOpen: false
  }

  handleChange = (filter) => {
    return this.setState({
      filter
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
    let filter = '';
    switch (this.props.type) {
      case 'input':
        filter = <TextFilter id={this.props.questionId} handleChange={this.handleChange} value={this.state.filter}/>;
        break;
      case 'range':
        filter = <CheckboxFilter answers={this.props.answers} handleChange={this.handleChange} value={this.state.filter}/>
        break;

      default:
        // select
        filter = '';
        break;
    }
    return (
      <div className={`FormFilter ${this.props.active ? 'FormFilter--active' : ''}`}>
        <Icon iconName="filter" onClick={this.openMenu} />

        <Popover
          open={this.state.isOpen}
          anchorEl={this.state.anchorEl}
          onRequestClose={this.handleRequestClose}
          className="FormFilter__popover"
        >
          {filter}
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

FormFilter.defaultProps = {

}

FormFilter.propTypes = {
  applyFilter: PropTypes.func,
  type: PropTypes.string,
  questionId: PropTypes.number,
  active: PropTypes.bool
}

export default FormFilter;

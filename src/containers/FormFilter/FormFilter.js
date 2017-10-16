import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {textFilter} from 'utils/filters';
import Button from 'components/Button';
// import './FormFilter.css';
class FormFilter extends Component {
  handleChange = (e) => {
    return this.setState({
      filter: e.target.value
    });
  }
  applyFilter = () => {
    console.warn('applying', this.state.filter);
    return this.props.applyFilter({
      type: this.props.type,
      value: this.state.filter,
      questionId: this.props.questionId
    });
  }
  state = {
    filter: ''
  }
  render() {
    return (
      <div className="FormFilter">
        <Filter handleChange={this.handleChange} value={this.state.filter}/>
        <Button pill={false} text={"Apply"} buttonType="primary" onClick={this.applyFilter}/>
      </div>
    );
  }
}

function Filter(props) {
  return (
    <div>
      <input onChange={props.handleChange} value={props.value} type="text"/>
    </div>
  );
}

FormFilter.defaultProps = {

}

FormFilter.propTypes = {

}

export default FormFilter;

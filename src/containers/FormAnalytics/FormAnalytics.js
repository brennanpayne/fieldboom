import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormLabels from 'components/FormLabels';
import './FormAnalytics.css';
class FormAnalytics extends Component {

  render() {
    return (
      <div className="FormAnalytics">
        <FormLabels labels={this.props.labels} formResponsesCount={this.props.formResponsesCount} />
      </div>
    );
  }
}
FormAnalytics.defaultProps = {
  formResponsesCount: 0,
  labels: []
}
FormAnalytics.propTypes = {
  labels: PropTypes.array,
  formResponsesCount: PropTypes.number
}

export default FormAnalytics;

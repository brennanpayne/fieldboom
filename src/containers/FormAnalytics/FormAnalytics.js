import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormLabels from 'components/FormLabels';
import FormResponses from 'components/FormResponses';
import './FormAnalytics.css';
class FormAnalytics extends Component {

  render() {
    return (
      <div className="FormAnalytics">
        <div className="FormAnalytics__labels">
          <FormLabels labels={this.props.labels} formResponsesCount={this.props.formResponsesCount} />
        </div>
        <div className="FormAnalytics__content">
          <FormResponses formResponses={this.props.formResponses} form={this.props.form} />
        </div>
      </div>
    );
  }
}
FormAnalytics.defaultProps = {
  formResponsesCount: 0,
  labels: [],
  formResponses: [],
  form: {
    questions: []
  }
}
FormAnalytics.propTypes = {
  labels: PropTypes.array,
  formResponses: PropTypes.arrayOf(PropTypes.object),
  formResponsesCount: PropTypes.number,
  form: PropTypes.object
}

export default FormAnalytics;

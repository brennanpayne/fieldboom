import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FormLabel from './FormLabel';
class FormLabels extends Component {

  render() {
    let labels = _.chain(this.props.labels)
      .sortBy('count')
      .reverse()
      .map(label => {
        return (
          <FormLabel key={label.id} text={label.name} count={label.count} />
        );
      })
      .value();
    let allResponses = <FormLabel active text="All Responses" count={this.props.formResponsesCount} />
    return (
      <div className="FormLabels">
        {allResponses}
        {labels}
      </div>
    );
  }
}
FormLabels.propTypes = {
  labels: PropTypes.array.isRequired,
  formResponsesCount: PropTypes.number.isRequired
}

export default FormLabels;

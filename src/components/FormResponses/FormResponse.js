import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class FormResponse extends Component {

  render() {
    let answers = _.get(this.props, 'responses', [])
    return _.map(answers, (answer) => {
      return <span key={answer.id}>{answer.content}</span>
    });
  }
}

FormResponse.propTypes = {
  formResponse: PropTypes.object.isRequired
}


export default FormResponse;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// import './FormResponses.css';

class FormResponses extends Component {

  render() {
    let responses = _.map(this.props.formResponses, (response) => {
      return <div key={response.id}>{response.id} </div>
    });
    return (
      <div className={`FormResponses`}>
        {responses}
      </div>
    );
  }
}

FormResponses.propTypes = {
  formResponses: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default FormResponses;

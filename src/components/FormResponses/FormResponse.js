import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// import './FormResponse.css';

class FormResponse extends Component {

  render() {
    let responses = _.map(this.props.formResponses, (response) => {
      return <div key={response.id}>{response.id} </div>
    });
    return (
      <div className={`FormResponse`}>
        {responses}
      </div>
    );
  }
}

FormResponse.propTypes = {
  formResponses: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default FormResponse;

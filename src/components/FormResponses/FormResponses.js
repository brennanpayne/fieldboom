import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './FormResponses.css';
import FormResponse from './FormResponse';
import Table from 'components/Table';

class FormResponses extends Component {

  render() {
    let questions = _.get(this.props.form, 'questions', []).map(question => question.content);
    let columns = _.concat([''], questions);
    let responses = _.map(this.props.formResponses, (response) => {
      return <div key={response.id}>{response.id} </div>
    });
    let rows = _.map(this.props.formResponses, (formResponse) => {
      return buildRow(formResponse);
    });
    return (
      <div className={`FormResponses`}>
        <Table rows={rows} columns={columns} />
      </div>
    );
  }
}

function buildRow(formResponse) {
  let answers = _.get(formResponse, 'responses', [])
  let row = _.map(answers, (answer) => {
    return <span key={answer.id}>{answer.content}</span>
  });
  row.unshift(<input type="checkbox" />);
  return row;
}

FormResponses.propTypes = {
  form: PropTypes.object.isRequired,
  formResponses: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default FormResponses;

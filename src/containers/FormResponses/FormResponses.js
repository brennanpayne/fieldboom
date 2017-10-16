import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './FormResponses.css';
import Table from 'components/Table';
import Icon from 'components/Icon';

class FormResponses extends Component {

  render() {
    let questions = _.get(this.props.form, 'questions', []).map(question => question.content);

    let columns = _.concat([''], questions);

    let rows = _.map(this.props.formResponses, (formResponse) => {
      let data = buildRow(formResponse);
      let row = {
        data,
        metadata: {
          read: formResponse.read,
          responseId: formResponse.id
        }
      };
      return row;
    });
    return (
      <div className={`FormResponses`}>
        <Table rows={rows} columns={columns} />
      </div>
    );
  }
}

/*
  Expected output:
  [{
    id: id,
    content: content,
    narrow: boolean
  }]
*/
function buildRow(formResponse) {
  let answers = _.get(formResponse, 'responses', []);
  let row = _.map(answers, (answer, index) => {
    return {
      id: `row-${answer.id}-${index}`,
      content: answer.content,
      narrow: false,
    }
  });
  // debugger
  row.unshift({
    id: `row-${formResponse.id}-id`,
    content: `#${formResponse.order || formResponse.id}`,
    narrow: true
  });
  let iconName = formResponse.starred ? "star" : 'star-o'
  row.unshift({
    id: `row-${formResponse.id}-star`,
    content: <Icon iconName={iconName} style={{fontSize: '1.5em'}}/>,
    narrow: true
  });
  row.unshift({
    id: `row-${formResponse.id}-checkbox`,
    content: <input type="checkbox" />,
    narrow: true
  });
  return row;
}

FormResponses.propTypes = {
  form: PropTypes.object.isRequired,
  formResponses: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default FormResponses;

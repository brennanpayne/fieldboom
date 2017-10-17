import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './FormResponses.css';
import FormFilter from 'containers/FormFilter';
import Table from 'components/Table';
import Icon from 'components/Icon';
import Checkbox from 'material-ui/Checkbox';

import {textFilter, rangeFilter} from 'utils/filters';


class FormResponses extends Component {
  state = {
    filter: {
      questionId: 0,
      type: '',
      value: ''
    }
  }

  applyFilter = (filter) => {
    this.setState({
      filter
    });
  }

  render() {
    let questions = _.get(this.props.form, 'questions', []).map(question => question.content);
    let columns = _.concat([''], questions);

    let filters = _.get(this.props.form, 'questions', []).map(question => {
      let active = this.state.filter.questionId === question.id;
      return (
        <FormFilter active={active} questionId={question.id} answers={question.answers} type={question.answerType} applyFilter={this.applyFilter}/>
      )
    });
    filters = _.concat([''], filters);

    let rows = _.chain(this.props.formResponses)
      .reduce((memo, formResponse) => {
        let filteredQuestion = _.find(formResponse.responses, (response) => response.questionId === this.state.filter.questionId );
        if (!filteredQuestion || filterResponses(filteredQuestion.content, this.state.filter)) {
          let data = buildRow(formResponse);
          let row = {
            data,
            metadata: {
              read: formResponse.read,
              responseId: formResponse.id
            }
          };
          memo.push(row);
        }
        return memo;
      }, []).value();

    return (
      <div className={`FormResponses`}>
        <Table rows={rows} columns={columns} filters={filters}>
        </Table>
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
    content: <Checkbox />,
    narrow: true
  });
  return row;
}


function filterResponses(responseContent, filter) {
  if (!filter) {
    return true;
  }
  switch (filter.type) {
    case 'input':
      return textFilter(responseContent, filter.value)
    case 'range':
      return rangeFilter(responseContent, filter.value)
    default:
  }
  return true;
}

FormResponses.propTypes = {
  form: PropTypes.object.isRequired,
  formResponses: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default FormResponses;

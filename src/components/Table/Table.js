import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './Table.css';

class Table extends Component {

  render() {
    return (
      <div className="Table">
        <div>
          {this.props.tableControls}
        </div>
        <div className="Table__content">
          <div className="Table__headers">
            <div className="TableRow TableRow--headers">
              {_.map(this.props.columns, (column, index) => {
                return (
                  <TableHeader key={`headers-${index}`} column={column} filters={this.props.filters} index={index} />
                );
              })}
            </div>
          </div>
          <div className="Table__rows">
            {_.map(this.props.rows, (row, index) => {
              let {data, metadata} = row;
              return <TableRow metadata={metadata} data={data} key={metadata.responseId} index={index} />
            })}
          </div>
        </div>
      </div>
    );
  }
}

function TableHeader(props) {
  return (
    <div className="TableHeader">
      <div className="TableHeader__content">
        {props.column}
      </div>
      <div className="TableHeader__filter">
        {props.filters[props.index]}
      </div>
    </div>
  );
}

function TableRow(props) {
  let row = _.map(props.data, (data, cellIndex) => {
    return <span key={`cell-${props.index}-${cellIndex}`} className={`TableRow__cell ${data.narrow ? 'TableRow__cell--narrow' : ''}`}>{data.content}</span>
  });
  return (
    <div className={`TableRow ${props.metadata.read ? '': 'TableRow--unread'}`}>
      {row}
    </div>
  )
}

Table.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  tableControls: PropTypes.element
}


export default Table;

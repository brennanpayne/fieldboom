import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './Table.css';

class Table extends Component {

  render() {
    return (
      <div className="Table">
        <div className="Table__headers">
          <div className="TableRow">
            {_.map(this.props.columns, (column) => {
              return <div className="TableRow__cell">{column}</div>
            })}
          </div>
        </div>
        <div className="Table__rows">
          {_.map(this.props.rows, (row) => {
            return TableRow(row)
          })}
        </div>
      </div>
    )
  }
}
function TableRow(props) {
  let row = _.map(props, (data) => {
    return <span className="TableRow__cell">{data}</span>
  });
  return (
    <div className="TableRow">
      {row}
    </div>
  )
}

Table.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array
}


export default Table;

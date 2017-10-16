import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './Table.css';

class Table extends Component {

  render() {
    return (
      <div className="Table">
        <div className="Table__headers">
          <div className="TableRow TableRow--headers">
            {_.map(this.props.columns, (column, index) => {
              return <div key={`headers-${index}`} className="TableRow__cell">{column}</div>
            })}
          </div>
        </div>
        <div className="Table__rows">
          {_.map(this.props.rows, (row, index) => {
            return <TableRow data={row} key={`tr-${index}`} index={index} />
          })}
        </div>
      </div>
    )
  }
}
function TableRow(props) {
  let row = _.map(props.data, (data, cellIndex) => {
    return <span key={`cell-${props.index}-${cellIndex}`} className="TableRow__cell">{data}</span>
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
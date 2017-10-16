import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './Table.css';

class Table extends Component {

  render() {
    return (
      <div className="Table">
        <div className="Table__filters">
          <div className="TableRow TableRow--filters">
            {_.map(this.props.filters, (filter, index) => {
              let narrow = _.includes([0, 1, 2], index);
              return (
                <div key={index} className={`TableRow__cell ${narrow ? 'TableRow__cell--narrow' : ''}`}>
                  {filter}
                </div>
              );
            })}
          </div>
        </div>
        <div className="Table__headers">
          <div className="TableRow TableRow--headers">
            {_.map(this.props.columns, (column, index) => {
              return <div key={`headers-${index}`} className="TableRow__cell">{column}</div>
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
    )
  }
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
}


export default Table;

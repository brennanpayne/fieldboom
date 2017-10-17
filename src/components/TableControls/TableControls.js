import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Checkbox from 'material-ui/Checkbox';
import Button from 'components/Button';
import './TableControls.css';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import Clear from 'material-ui/svg-icons/content/clear';

class TableControls extends Component {

  render() {
    return (
      <div className="TableControls">
        <div className="TableControls__left-controls">
          <div className="TableControls__select-all">
            <Checkbox label={<ArrowDropDown />}/>
          </div>
        </div>
        <div className="TableControls__right-controls">
          {this.props.showClearFiltersButton &&
            <div className="TableControls__clear-filter">
              <span style={{verticalAlign: 'middle'}} onClick={()=>{ this.props.clearFilter() }}>Clear Filters</span> <Clear style={{verticalAlign: 'middle'}} />
            </div>
          }
          <div className="TableControls__pagination">
            <strong>1</strong>-<strong>18</strong> of <strong>18</strong>
          </div>
        </div>
      </div>
    );
  }
}


TableControls.propTypes = {
  clearFilter: PropTypes.func,
  showClearFiltersButton: PropTypes.bool
}


export default TableControls;

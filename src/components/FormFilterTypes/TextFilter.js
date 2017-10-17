
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

class TextFilter extends Component {
  render() {
    return (
      <div>
        <div>Must Contain:</div>
        <TextField id={this.props.id} onChange={(e) => this.props.handleChange(e.target.value)} value={this.props.value} type="text"/>
      </div>
    );
  }
}
TextFilter.propTypes = {
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default TextFilter;

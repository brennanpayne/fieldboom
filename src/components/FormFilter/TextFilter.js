
import React from 'react';
import TextField from 'material-ui/TextField';

export default function TextFilter(props) {
  return (
    <div>
      <div>Must Contain:</div>
      <TextField id={props.questionId} onChange={(e) => props.handleChange(e.target.value)} value={props.value} type="text"/>
    </div>
  );
}

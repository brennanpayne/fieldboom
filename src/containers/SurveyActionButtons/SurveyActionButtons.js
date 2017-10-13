import React, { Component } from 'react';
import IconButton from 'components/IconButton';
class SurveyActionButtons extends Component {

  render() {
    return (
      <div className="SurveyActionButtons">
        <IconButton style={{marginRight: '15px'}} buttonType="default" text="Edit Form" iconName="pencil-square-o" />
        <IconButton text="View Form" buttonType="primary" iconName="eye" />
      </div>
    );
  }
}

export default SurveyActionButtons;

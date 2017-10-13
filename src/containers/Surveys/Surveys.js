import React, { Component } from 'react';
import api from 'api/api';
import SurveysTabBar from 'containers/SurveysTabBar';
import SurveyActionButtons from 'containers/SurveyActionButtons';
import './Surveys.css';

class Surveys extends Component {
  state = {

  }
  componentDidMount() {
    api.fetchSurveyAnalytics()
      .then((response) => {
        this.setState(response.analytics);
      });
  }
  render() {
    return (
      <div className="Surveys">
        <div className="Surveys__header">
          <SurveysTabBar />
          <SurveyActionButtons />
        </div>
      </div>
    );
  }
}

export default Surveys;

import React, { Component } from 'react';
import api from 'api/api';

class Surveys extends Component {
  state = {

  }
  componentDidMount() {
    api.fetchSurveyAnalytics()
      .then((response) => {
        this.setState(response.analytics);
      })
  }
  render() {
    return (
      <div className="Surveys">

      </div>
    );
  }
}

export default Surveys;

import React, { Component } from 'react';
import Sidebar from 'components/Sidebar';
import PageHeader from 'components/PageHeader';
import Surveys from 'containers/Surveys';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="App__content">
          <PageHeader />
          <Surveys />
        </div>
      </div>
    );
  }
}

export default App;

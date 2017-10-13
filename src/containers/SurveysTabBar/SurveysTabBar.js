import React, { Component } from 'react';
import TabBar from 'components/TabBar';
import Tab from 'components/TabBar/Tab';

class SurveysTabBar extends Component {

  render() {
    return (
      <div className="SurveysTabBar">
        <TabBar>
          <Tab text="Responses" active={true} />
          <Tab text="Reports" active={false} />
        </TabBar>
      </div>
    );
  }
}

export default SurveysTabBar;

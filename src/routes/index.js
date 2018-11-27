import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StaffingRequestContainer from '../containers/StaffingRequestContainer';

export default () => (
  <div>
    <Router>
      <div>
        <Route exact path="/staffing-request" component={StaffingRequestContainer} />
      </div>
    </Router>
  </div>
);

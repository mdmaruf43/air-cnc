import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
import ReviewHouse from './Component/ReviewHouse/ReviewHouse';
import Coming from './Component/Coming/Coming';
import Confirm from './Component/Confirm/Confirm';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ReviewHouse />
        </Route>
        <Route path="/coming">
          <Coming />
        </Route>
        <Route path="/confirm">
          <Confirm />
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

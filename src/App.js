import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NotFound />
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

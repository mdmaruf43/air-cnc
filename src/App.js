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
import GoogleMaps from './Component/GoogleMap/GoogleMap';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import ApartDetails from './Component/ApartDetails/ApartDetails';
import Login from './Component/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/review">
          <ReviewHouse />
        </Route>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
        <Route path="/login">
          <Navbar />
          <Login />
        </Route>
        <Route path="/coming">
          <Coming />
        </Route>
        <Route path="/home">
          <Navbar />
          <ApartDetails />
        </Route>
        <Route path="/confirm">
          <Confirm />
        </Route>
        <Route path="/maps">
          <GoogleMaps />
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

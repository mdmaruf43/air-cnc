import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ApartDetails from './components/ApartDetails/ApartDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Navbar></Navbar>
        <ApartDetails></ApartDetails>
        </Route>
        <Route path="/users">
        </Route>
        <Route path="/">
          <Navbar></Navbar>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';

import { Switch, Link, Route, Router } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Landing from './components/Landing';
import LogIn from './components/LogIn';
import Register from './components/Register';

import './App.css';

function App() {
  return ( 
    <Router>
      <Link to="/login">Login</Link>
      <Link to="/landing">Home</Link>
      <Link to="/register">Register</Link>
      <Switch>
        <PrivateRoute exact path="/landing" component={Landing} />
        <Route path="/login" component={LogIn} />
        <Route component={LogIn} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;

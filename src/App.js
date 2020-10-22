import React from 'react';

import { Switch, Link, Route, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Landing from './components/Landing';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Funding from './components/Funding'

import './App.css';

function App() {
  return ( 
    <BrowserRouter>
      <Link to="/login">Login</Link>
      <Link to="/landing">Home</Link>
      <Link to="/register">Register</Link>
      
      <Switch>
        <PrivateRoute exact path="/landing" component={Landing}  />
        <Route path="/login" component={LogIn} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Funding} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

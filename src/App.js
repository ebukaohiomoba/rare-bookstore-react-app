import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import LoginForm from './components/signin';
import UserTable from './components/usertable';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  

return (
  <Router>
  <Switch>
    <Route exact path="/login" component={LoginForm}></Route>
    <Route exact path="/table" component={UserTable}></Route>
  </Switch>
  </Router>
);
}
export default App;

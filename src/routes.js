import React from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import UserTable from './components/usertable';
import LoginForm from './components/signin';

const Routes = () => (
    
    <Router>
            <Route exact path="/" component={LoginForm} />
            <Route path="/aboutus" component={UserTable} />
    </Router>
);

export default Routes;
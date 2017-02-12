// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'

import App from './components/App';
import Test from './components/Ex/testing.js'
// import About from './components/About';
// import coba from './components/coba';
import TidakDitemukan from './components/NotFound/404.js';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/ex" component={Test}/>
    <Route path="*" component={TidakDitemukan} />
    
  </Router>
);

export default Routes;

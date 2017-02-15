// src/routes.js
import React from 'react';
import {Router, Route,IndexRedirect} from 'react-router'

import App from './components/App';
import Test from './components/Ex/Test.js';
import Welcome from './components/hal-awal/Welcome';
// import About from './components/About'; import coba from './components/coba';
import TidakDitemukan from './components/NotFound/404.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


const Routes = (props) => (
  <Router {...props}>

    <Route path="/" component={Welcome}>
      <IndexRedirect to = "/selamat-datang" />
      <Route path="*" component={TidakDitemukan}/>
    </Route>
  </Router>
);

export default Routes;

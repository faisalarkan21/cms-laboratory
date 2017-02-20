// src/routes.js
import React from 'react';
import {Router, Route, IndexRedirect} from 'react-router';

import App from './components/App';
import Test from './components/Ex/Test';
import Welcome from './components/hal-awal/Welcome';
import Database from './components/hal-awal/Setting-Database';
import settingUser from './components/hal-awal/Setting-User';
// import About from './components/About'; import coba from './components/coba';
import TidakDitemukan from './components/NotFound/404.js';

const Routes = (props) => (
  <Router {...props}>

    <Route path="/">
      <IndexRedirect to="/selamat-datang"/>
      <Route path="test" component={Test}/>

    </Route>
    <Route path="selamat-datang" component={Welcome}/>
    <Route path="setting-database" component={Database}/>
    <Route path="setting-user" component={settingUser}/>
    <Route path="*" component={TidakDitemukan}/>

  </Router>
);

export default Routes;

// src/routes.js
import React from 'react';
import {Router, Route, IndexRedirect} from 'react-router';

// import App from './components/App';
import Test from './components/Ex/Test';
import Welcome from './components/hal-awal/Welcome';
import Database from './components/hal-awal/Setting-Database';
import selesai from './components/hal-awal/selesai';

import Login from './components/login/Login';
import DashboardAdmin from './components/dashboard/dashboardAdmin.js';
import DashboardPengajar from './components/dashboard/dashboardPengajar.js';

// import About from './components/About'; import coba from './components/coba';
import TidakDitemukan from './components/NotFound/404.js';

// temp
import InputDatabase from './modify-components/Komponen-Input/InputDatabase.js';




const Routes = (props) => (
  <Router {...props}>

    <Route path="/">
      <IndexRedirect to="/selamat-datang"/>
      <Route path="test" component={Test}/>

    </Route>
    <Route path="selamat-datang" component={Welcome}/>
    <Route path="setting-database" component={Database}/>
    <Route path="selesai" component={selesai}/>
    <Route path="login" component={Login}/>
    <Route path="dashboard-admin" component={DashboardAdmin}/>
    <Route path="dashboard-pengajar" component={DashboardPengajar}/>
    <Route path="*" component={TidakDitemukan}/>


  </Router>
);

export default Routes;

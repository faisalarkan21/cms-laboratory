// src/routes.js
import React from 'react';
import {Router, Route, IndexRedirect} from 'react-router';

// import App from './components/App';
import Test from './components/Ex/Test';
import Welcome from './components/hal-awal/Welcome';
import Database from './components/hal-awal/Setting-Database';
import Selesai from './components/hal-awal/selesai';

import Login from './components/login/Login';
import DashboardAdmin from './components/dashboard/dashboardAdmin.js';
import DashboardPengajar from './components/dashboard/dashboardPengajar.js';

// import About from './components/About'; import coba from './components/coba';
import TidakDitemukan from './components/NotFound/404.js';

// temp
import InputDatabase from './modify-components/Komponen-Input/InputDatabase.js';

import Daftar from './components/daftar/Daftar';


//temp2
import auth from './auth/auth.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

function requireAuthAdmin(nextState, replace) {
  if (auth.loggedInAdmin() == undefined) {
    replace({
      pathname: '/login',
      state: {
        nextPathname: nextState.location.pathname
      }
    })
  }
}

function requireAuthUser(nextState, replace) {
  // console.log("ini user -> : "  +  auth.loggedInUser());
  if (auth.loggedInUser() == undefined) {
    replace({
      pathname: '/login',
      state: {
        nextPathname: nextState.location.pathname
      }
    })
  } 
}


function checkLogin(nextState, replace) {
  if (auth.loggedInAdmin() != undefined) {
    replace({
      pathname: '/dashboard-admin',
      state: {
        nextPathname: nextState.location.pathname
      }
    })
  } else if (auth.loggedInUser() != undefined) {
    replace({
      pathname: '/dashboard-pengajar',
      state: {
        nextPathname: nextState.location.pathname
      }
    })
  }

}


const Routes = (props) => (
  <Router {...props}>

    <Route path="/">
      <IndexRedirect to="/selamat-datang"/>
      <Route path="test" component={Test}/>

    </Route>
    <Route path="selamat-datang" component={Welcome}/>
    <Route path="setting-database" component={Database}/>
    <Route path="selesai" component={Selesai}/>
    <Route path="submit" component={Daftar}/>
    <Route path="login" component={Login} onEnter={checkLogin}/>
    <Route
      path="dashboard-admin"
      component={DashboardAdmin}
      onEnter={requireAuthAdmin}/>
    <Route
      path="dashboard-pengajar"
      component={DashboardPengajar}
      onEnter={requireAuthUser}/>
    <Route path="*" component={TidakDitemukan}/>

  </Router>
);

export default Routes;

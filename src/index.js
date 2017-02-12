import React from 'react';
import ReactDOM from 'react-dom';
// import App from '.components/App/';
import { browserHistory } from 'react-router';

import Routes from './routes';

import './index.css';

ReactDOM.render(
  <Routes  history={browserHistory} />,
  document.getElementById('root')
);

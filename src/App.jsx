import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import Layout from './layout/Layout';

import './style.css';

ReactDOM.render(
  <>
  <Router>
    <Layout />
  </Router>
  </>, 
  document.querySelector('#root')
)
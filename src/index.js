import React from 'react';
import {createRoot} from 'react-dom/client'
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { store } from 'redux/store';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router basename="/">
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
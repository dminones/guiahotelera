import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import configuration from './config';
import config from 'react-global-configuration';
import App from './App';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

config.set(configuration);

const AppClient = () => (
  <Router basename="/guiahotelera" >
    <App />
  </Router>
);

ReactDOM.render(<AppClient />, document.getElementById('root'));
registerServiceWorker();
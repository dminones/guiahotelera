import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import './index.css';
import registerServiceWorker from './registerServiceWorker';


const AppClient = () => (
  <Router>
    <App />
  </Router>
);


ReactDOM.render(<AppClient />, document.getElementById('root'));
registerServiceWorker();

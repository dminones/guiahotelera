import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const getLocationHomepage = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};
const l = getLocationHomepage(process.env.PUBLIC_URL);

const AppClient = () => (
  <Router basename={l.pathname}>
    <App />
  </Router>
);


ReactDOM.render(<AppClient />, document.getElementById('root'));
registerServiceWorker();

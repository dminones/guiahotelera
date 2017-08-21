import React, { Component } from 'react';
import './css/style.css';
import './css/colors/blue.css';
import './css/icons.css';

import './App.css';
import header from './images/Buenos-Aires-4.jpg';
import { NavBar, TitleBar, Footer, Header, Filtering, Listing } from './components/'

let destination = { name: 'Mar del Plata' }

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <NavBar />
        <Header src={ header } title={ destination.name }  />
        {/* <TitleBar destination={ destination.name } /> */}
        <Listing destination={destination} />
        <Footer />
        <div id="backtotop"><a href="listings-list-with-sidebar.html#"></a></div>
      </div>
    );
  }
}

export default App;

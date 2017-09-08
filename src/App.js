import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'
import { SingleItem, NoMatch, Destination, Home } from './containers/'
import { NavBar, TitleBar, Footer, Header } from './components/'

import './css/icons.css';
import './css/style.css';
import './css/colors/green.css';

import './App.css';
import hostelHeader from './images/IL-hi-chicago-gallery-02.jpg';

function Hostels({match}) {
  return(
    <div>
      <Header src={ hostelHeader } title={ 'Hostels' }  />
      <TitleBar title={ 'Hostels en Argentina' } subtitle={'Pagina con listado de destinos en los que hay hostels y hostels recomendados'} />
    </div>
  )
}

function DestinationRouter({match}) {
  return(
    <Switch>
      <Route exact path={match.url} render={() => (
        <Destination slug={match.params.slug} />
      )}/>   
      <Route component={NoMatch}/>
    </Switch>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/hostel" component={Hostels} />
          <Route path={`/hotel/:slug`} component={SingleItem}/>
          <Route path="/d/:slug" component={DestinationRouter} />
          <Route component={NoMatch}/>
        </Switch>
        <Footer />
        <div id="backtotop"><a href="listings-list-with-sidebar.html#"></a></div>
      </div>
    );
  }
}

export default App;
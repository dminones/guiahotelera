import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'
import { NavBar, TitleBar, Footer, Header, Filtering, Listing, SingleItem } from './components/'

import './css/icons.css';
import './css/style.css';
import './css/colors/blue.css';

import './App.css';
import header from './images/Buenos-Aires-4.jpg';
import hostelHeader from './images/IL-hi-chicago-gallery-02.jpg';

let destination = { name: 'Mar del Plata' }

function Destination({match}) {
  return(
    <Switch>
      <Route path={`${match.url}/:slug`} component={SingleItem}/>
      <Route exact path={match.url} render={() => (
        <div>
          <Header src={ header } title={ destination.name } headerFixed={true} />
          {/* <TitleBar destination={ destination.name } /> */}
          <Listing destination={destination} />
        </div>
      )}/>   
    </Switch>
  )
}

function Hostels({match}) {
  return(
    <div>
      <Header src={ hostelHeader } title={ 'Hostels' }  />
      <TitleBar title={ 'Hostels en Argentina' } subtitle={'Pagina con listado de destinos en los que hay hostels y hostels recomendados'} />
    </div>
  )
}

function Otro({match}) {
  return(
    <TitleBar destination={ destination.name } />
  )
}

function NoMatch({match}) {
  return(
    <div className="container">
      <div className="row">
        <div>
          <div className="col-md-12">
            <section id="not-found" className="center">
              <h2>404 <i className="fa fa-question-circle"></i></h2>
              <p>La página que estás buscando no existe.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <NavBar />
        <Switch>
          <Route exact path="/" component={Destination} />
          <Route path="/hotel" component={Destination} />
          <Route exact path="/hostel" component={Hostels} />
          <Route exact path="/mar-del-plata" component={Otro} />
          <Route component={NoMatch}/>
        </Switch>
        <Footer />
        <div id="backtotop"><a href="listings-list-with-sidebar.html#"></a></div>
      </div>
    );
  }
}

export default App;
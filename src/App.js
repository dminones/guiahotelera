import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
  console.log ((props) => PageShell(Destination)({ 
                                                  ...props, 
                                                  slug:match.params.slug
                                            }))
  return(
    <Switch>
      {/*<Route exact path={match.url} render={() => PageShell(
        <Destination slug={match.params.slug} />
      )}/>*/}
      <Route exact path={match.url} render={(props) => PageShell(Destination)({ 
                                                  ...props, 
                                                  slug:match.params.slug
                                            })}/>
      <Route component={PageShell(NoMatch)}/>
    </Switch>
  )
}

const PageShell = Page => {
  return props =>
    <div className="page">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={ 'SlideIn'}
      >
        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>;
};

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <NavBar />
        <Switch>
          <Route exact path="/" component={PageShell(Home)} />
          <Route exact path="/hostel" component={PageShell(Hostels)} />
          <Route path={`/hotel/:slug`} component={PageShell(SingleItem)}/>
          <Route path="/d/:slug" component={PageShell(DestinationRouter)} />
          <Route component={PageShell(NoMatch)}/>
        </Switch>
        <Footer />
        <div id="backtotop"><a href="listings-list-with-sidebar.html#"></a></div>
      </div>
    );
  }
}

export default App;
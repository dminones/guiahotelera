import React, { Component } from 'react';
import './css/style.css';
import './css/colors/blue.css';
import './App.css';
import header from './images/Buenos-Aires-4.jpg';
import banner from './images/ad_350x350.jpg'
import { NavBar, TitleBar, Footer, Header } from './components/'

let destination = { name: 'Mar del Plata' }

function Filtering() {
  return(
    <div className="margin-bottom-30">
      <h3 className="margin-top-0 margin-bottom-30">Filtrar</h3>

      <div className="row with-forms">
        <div className="col-md-12">
          <input type="text" placeholder="What are you looking for?" value=""/>
        </div>
      </div>

      <div className="row with-forms">
        <div className="col-md-12">
          <select data-placeholder="All Categories" className="chosen-select" >
            <option>Hotel 5*</option> 
            <option>Hotel 4*</option>
            <option>Hotel 3*</option>
            <option>Hotel 2*</option>
            <option>Hotel 1*</option>
            <option>Hosteria</option>
            <option>Hostel</option>
          </select>
        </div>
      </div>
      <button className="button fullwidth margin-top-25">Update</button>
    </div>
  )
}

function Sorting() {
  return(
    null
  )
}

function ResultListItem({ item }) {
  return(
    <div className="col-lg-12 col-md-12">
      <div className="listing-item-container list-layout">
        <a href={ item.web } className="listing-item">         
          <div className="listing-item-image">
            <img src={ item.thumbnail } alt={ item.name } />
            <span className="tag">{ item.category }</span>
          </div>        
          <div className="listing-item-content">
            <div className="listing-item-inner">
              <h3>{ item.name }</h3>
              <span>{ item.address }</span>
              <div className="star-rating" data-rating="3.5">
                <div className="rating-counter">(12 reviews)</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

function ResultList({ results }) {
  return(
    <div className="row">
      <div className="col-lg-12 col-md-12">
        <h3 className="margin-top-0 margin-bottom-30">Alojamientos en { destination.name } </h3>
      </div>
      {results.map((item) => (
        <ResultListItem key={item.id} item={item} />
      )) }
    </div>
  )
}

class Listing extends Component {

  constructor() {
    super()
    this.state = {
      results : []
    }
  }

  updateHotels() {
    let self = this
    fetch('/data/hotels.json')  
      .then(function(response) {
        response.json().then(function(json) {
          console.log(json)
          self.setState({
            results : json.data
          })
        })
    })
  }

  componentDidMount() {
    this.updateHotels()
  }

  render() {

    return(
      <div className="container margin-top-30" >
        <div className="row">
          <div className="col-lg-9 col-md-8 padding-right-30">
            <Sorting />
            <ResultList results={this.state.results} />
          </div>
          <div className="col-lg-3 col-md-4">
            <Filtering />
            {[1,2,3].map((item) => (
              <img key={item} src={ banner } style={ { marginBottom:'10px'} } /> 
            )) }
          </div>
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <NavBar />
        <Header src={ header } title={ destination.name }  />
        {/* <TitleBar destination={ destination.name } /> */}
        <Listing />
        <Footer />
        <div id="backtotop"><a href="listings-list-with-sidebar.html#"></a></div>
      </div>
    );
  }
}

export default App;

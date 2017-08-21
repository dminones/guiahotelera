import React, { Component } from 'react';
import { Filtering } from './index'
import banner from '../images/ad_350x350.jpg'
import '../css/icons.css';
import './Listing.css';

function Sorting() {
  return(
    null
  )
}

function ResultListItem({ item }) {
  return(
    <div className="col-lg-12 col-md-12">
      <div className="listing-item-container list-layout">
        <a href="/hotel/dsada" className="listing-item">         
          <div className="listing-item-image">
            <img src={ item.thumbnail } alt={ item.name } />
            <span className="tag">{ item.category }</span>
          </div>        
          <div className="listing-item-content">
            <div className="listing-item-inner">
              <h3>{ item.name }</h3>
              <span><i className="im im-icon-Location-2" style={{fontSize:'20px', marginRight:'10px'}} ></i>{ item.address }
              <br/><i className="im im-icon-Telephone" style={{fontSize:'20px', marginRight:'10px'}} ></i>{ item.phone }</span>
              <br/>
              <span>
                <a href={ item.web } target="_blank" className="Icon-link">
                  <i className="sl sl-icon-link" style={{marginRight:'10px'}}></i>
                  {item.web}
                </a>
                </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

function ResultList({ results, destination }) {
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

export default class Listing extends Component {

  constructor() {
    super()
    this.state = {
      results : []
    }
  }

  updateHotels() {
    let self = this
    fetch(process.env.PUBLIC_URL+'/data/hotels.json')  
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
    console.log(this.props)
    return(
      <div className="container margin-top-30" >
        <div className="row">
          <div className="col-lg-9 col-md-8 padding-right-30">
            <Sorting />
            <ResultList results={this.state.results} destination={this.props.destination} />
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

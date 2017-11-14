import React, { Component } from 'react';
import { Filtering, ResultListItem } from './index'
import config from '../config'
import banner from '../images/ad_350x350.jpg'
import '../css/icons.css';
import './Components.css';

function Sorting() {
  return(
    null
  )
}

function ResultList({ results, destination }) {
  return(
    <div className="row">
      <div className="col-lg-12 col-md-12">
        <h3 className="margin-top-0 margin-bottom-30">Alojamientos en { destination.name } </h3>
      </div>
      {results.map((item) => (
        <ResultListItem key={item._id} item={item} />
      )) }
    </div>
  )
}

export default class Listing extends Component {

  constructor(props) {
    super(props)
    this.state = {
      results : [],
      banners: [],
      filter: { _destination: this.props.destination._id }
    }

    this.onChangeFilter = this.onChangeFilter.bind(this)
    this.updateHotels = this.updateHotels.bind(this)
    this.getBanners = this.getBanners.bind(this)
  }

  onChangeFilter(filter) {
    this.setState({
      filter : filter
    })
    
    this.updateHotels(filter)
  }
  
  getBanners() {
    let self = this

    fetch(config.apiUrl+'/banner?_destination='+this.props.destination._id)  
      .then(function(response) {
        response.json().then(function(json) {
            self.setState({
              banners: json
            })
        })
    })
  }

  updateHotels(newFilter) {
    let self = this
    const filter = newFilter ? newFilter : this.state.filter
    var url = new URL(config.apiUrl+'/item')
    if(filter) {
      Object.keys(filter).forEach(key => url.searchParams.append(key, filter[key]))
    }

    fetch(url).then(function(response) {
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.includes("application/json")) {
        return response.json();
      }
      throw new TypeError("Oops, we haven't got JSON!");
    })
    .then(function(json) { 
      if(json.error) { throw new TypeError(json.error.message); }
      self.setState({
        results : json
      })
    })
    .catch(function(error) { console.log(error); });
  }

  componentDidMount() {
    this.updateHotels()
    this.getBanners()
  }

  render() {
    return(
      <div className="container margin-top-30" >
        <div className="row">
          <div className="col-lg-9 col-md-8 padding-right-30">
            <Sorting />
            <ResultList results={this.state.results} destination={this.props.destination} />
          </div>
          <div className="col-lg-3 col-md-4">
            <Filtering filter={this.state.filter} onChange={ this.onChangeFilter }/>
            {
              this.state.banners.map((item) => (
                <a href={ item.link } target={ item.target } >
                  <img key={item.id} src={ item.src } style={ { marginBottom:'10px'} } /> 
                </a>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

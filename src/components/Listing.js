import React, { Component } from 'react';
import { Filtering } from './index'
import { Link } from 'react-router-dom'
import slugify from '../utils/Slugify'
import config from '../config'
import banner from '../images/ad_350x350.jpg'
import '../css/icons.css';
import './Components.css';

function Sorting() {
  return(
    null
  )
}

function ResultListItemCategory({category}) {
  console.log(category)

  if(!category)
    return null

  return(<span className="tag">{ category.name }</span>)
}

function ResultListImage({item}) {
  if(!item.destacado) {
    return null
  }

  return(
    <div className="listing-item-image">
      <img src={ item.thumbnail } alt={ item.name } />
      <ResultListItemCategory category={item._category} />
    </div>
  )
}

function ResultListItemSimpleCategory({category}) {
  console.log(category)

  if(!category)
    return null

  return(<span style={{position:'static', float:'left'}} className="tag">{ category.name }</span>)
}

function ResultListItemContactData({item}) {

  return(
    <span>
      {item.address &&
        <div>
          <i  className="fa fa-map-marker" 
              style={{fontSize:'20px', marginRight:'10px'}} ></i>
                  { item.address }<br/>
          </div>
      }
      {item.phone &&
        <div>
          <i  className="im im-icon-Telephone" 
            style={{fontSize:'20px', marginRight:'10px'}} ></i>
          { item.phone }
        </div>
      }
    </span>
  )
}

function ResultListItemSimple({item}) {
  return(
    <div className="col-lg-12 col-md-12">
      <div className="listing-item-container list-layout item-simple">
        <div className="listing-item-content-simple">
            <div className="listing-item-inner-simple">
              <h3 style={{float:'left', marginRight:'10px'}}>{ item.name }</h3>
              <ResultListItemSimpleCategory category={item._category} />
              <div style={{ clear:'both'}} ></div>
              <ResultListItemContactData item={item} /> 
            </div>
          </div>
      </div>
    </div>
  )
}

function ResultListItemBig({item}) {
  return(
    <div className="col-lg-12 col-md-12">
      <div className="listing-item-container list-layout">
        <Link to={ '/hotel/'+slugify(item.name) } className="listing-item">         
          <ResultListImage item={item} />
          <div className="listing-item-content">
            <div className="listing-item-inner">
              <h3>{ item.name }</h3>
              <span>
                <i  className="fa fa-map-marker" 
                    style={{fontSize:'20px', marginRight:'10px'}} ></i>
                { item.address }<br/>
                <i  className="im im-icon-Telephone" 
                    style={{fontSize:'20px', marginRight:'10px'}} ></i>
                { item.phone }
              </span>
              {/*
                <br/>
              <span>
                <a href={ item.web } target="_blank" className="Icon-link">
                  <i className="sl sl-icon-link" style={{marginRight:'10px'}}></i>
                  {item.web}
                </a>
                </span>
              */}
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

function ResultListItem({ item }) {
  if(item.destacado) {
    return (<ResultListItemBig item={item} />)
  } else {
    return (<ResultListItemSimple item={item} />)
  }
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
      filter: { _destination: this.props.destination._id }
    }

    this.onChangeFilter = this.onChangeFilter.bind(this)
    this.updateHotels = this.updateHotels.bind(this)
  }

  onChangeFilter(filter) {
    console.log("onChangeFilter", filter)
    

    this.setState({
      filter : filter
    })
    
    this.updateHotels(filter)
  }

  updateHotels(newFilter) {
    let self = this
    const filter = newFilter ? newFilter : this.state.filter
    var url = new URL(config.apiUrl+'/item')
    if(filter) {
      Object.keys(filter).forEach(key => url.searchParams.append(key, filter[key]))
    }

    console.log(url)
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
      console.log(json)
    })
    .catch(function(error) { console.log(error); });
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
            <ResultList results={this.state.results} destination={this.props.destination} />
          </div>
          <div className="col-lg-3 col-md-4">
            <Filtering filter={this.state.filter} onChange={ this.onChangeFilter }/>
            
            {/*
              Banners de publicidad
            } 
            {[1,2,3].map((item) => (
              <img key={item} src={ banner } style={ { marginBottom:'10px'} } /> 
            )) }
            {*/}
          </div>
        </div>
      </div>
    )
  }
}

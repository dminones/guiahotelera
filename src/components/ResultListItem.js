import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import slugify from '../utils/Slugify'

function ResultListItemCategory({accommodationType}) {
  if(!accommodationType)
    return null

  return(<span className="tag">{ accommodationType.name }</span>)
}

function ResultListImage({item}) {
  console.log(item)
  return(
    <div className="listing-item-image">
      <img src={ item.thumbnail } alt={ item.name } />
      <ResultListItemCategory accommodationType={ item._accommodationType } />
    </div>
  )
}

function ResultListItemSimpleCategory({accommodationType}) {
  if(!accommodationType)
    return null

  return(<span style={{position:'static', float:'left'}} className="tag">{ accommodationType.name }</span>)
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
              <ResultListItemSimpleCategory accommodationType={ item._accommodationType } />
              <div style={{ clear:'both'}} ></div>
              <ResultListItemContactData item={item} /> 
            </div>
          </div>
      </div>
    </div>
  )
}

function ResultListItemAddress({address}) {
  if(!address){
    return null
  }

  return (
    <span>
      <i  className="fa fa-map-marker" 
          style={{fontSize:'20px', marginRight:'10px'}} ></i>
          { address }<br/>
    </span>
  )
}


function ResultListItemPhone({phone}) {
  if(!phone){
    return null
  }

  return (
    <span>
      <i  className="im im-icon-Telephone" 
        style={{fontSize:'20px', marginRight:'10px'}} ></i>
        { phone }
    </span>
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
                <ResultListItemAddress address={item.address} />
                <ResultListItemPhone phone={item.phone} />
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

export default function ResultListItem({ item }) {
  if(item.publicationType) {
    return (<ResultListItemBig item={item} />)
  } else {
    return (<ResultListItemSimple item={item} />)
  }
}
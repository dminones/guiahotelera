import React, { Component } from 'react'
import _ from 'lodash';

import slugify from '../utils/Slugify'
import config from '../config'
import {Header, SingleItemMap } from '../components'
import scrollToComponent from 'react-scroll-to-component'

function PhoneDetail({phone}) {
  if(phone == null){ return null }

  return(<li key="phone"><i className="sl sl-icon-phone"></i> { phone }</li>)
}

function WebDetail({web}) {
  if(web == null){ return null }

  return(
    <li key="web">
      <i className="sl sl-icon-globe"></i> 
      <a href={ web } target="_blank">{ web }</a>
    </li>
  )
}

function EmailDetail({email}) {
  if(email == null){ return null }

  return(
    <li key="email">
      <i className="fa fa-envelope-o"></i> 
      <a href={ 'mailto:'+email }>{ email }</a>
    </li>
  )
}


function AddressDetail({address}) {
  if(!address){ return null }

  return(
    <li key="address">
       <i className="sl sl-icon-location" ></i>
        { address} 
    </li>
  )
}

class Book extends Component {

  constructor(){
    super()
    this.state = {
      sending: false,
      errors : []
    }
    this.handleSubjectTextChange = this.handleSubjectTextChange.bind(this)
    this.handleNameTextChange = this.handleNameTextChange.bind(this)
    this.handleEmailTextChange = this.handleEmailTextChange.bind(this)
    this.handleMessageTextChange = this.handleMessageTextChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.send = this.send.bind(this)
  }

  handleSubjectTextChange(ev){
    this.setState({
      subject: ev.target.value
    })
  }

  handleNameTextChange(ev){
    this.setState({
      name: ev.target.value
    })
  }

  handleEmailTextChange(ev){
    this.setState({
      email: ev.target.value
    })
  }

  handleMessageTextChange(ev){
    this.setState({
      message: ev.target.value
    })
  }

  validate(data, callback) {
    function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    var errors = []
    if(!this.state.subject || this.state.subject === '')
    {
      errors.push('subject')
    }

    if(!this.state.name || this.state.name === '') {
      errors.push('name')
    }

    if(!this.state.message || this.state.message === '')
    {
      errors.push('message')
    }

    if( !this.state.email || 
        this.state.email === '' ||
        !validateEmail(this.state.email)) {
      errors.push('email')
    }

    this.setState({
      errors: errors
    },callback)
  }

  send(data) {
    let self = this

    this.setState({
      sending : true
    },function(){
      fetch(config.apiUrl+'/book', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
      }).then(function(response) {
        response.json().then(function(json) {
          if(json.error) {
            self.setState({
              sending: false,
              error: json.error,
              success: null
            })
          } else {
            self.setState({
              name: '',
              email: '',
              message: '',
              subject: '',
              sending: false,
              success: json.response,
              error: null
            })
          }
        })
      })
    })
  }

  onSubmit(ev){
    this.validate(this.state, function() {
      if(_.isEmpty(this.state.errors)) {
        this.send(this.state)
      }
    })    
  }

  render() {
    let errorStyle = { border: 'red 1px solid'} 
    return(
      <div className="boxed-widget">
        <h3>Reservar</h3>

        <div className="row with-forms">
          <div className="col-md-12">
            <input  type="text" 
                    placeholder="Nombre"  
                    value={this.state.name}
                    onChange={this.handleNameTextChange}
                    style={_.includes(this.state.errors,'name') ? errorStyle : null } />
          </div>
        </div>
        <div className="row with-forms">
          <div className="col-md-12">
            <input  type="text" 
                    placeholder="Email"  
                    value={this.state.email}
                    onChange={this.handleEmailTextChange}
                    style={_.includes(this.state.errors,'email') ? errorStyle : null } />
          </div>
        </div>
        <div className="row with-forms">
          <div className="col-md-12">
            <input  type="text" 
                    placeholder="Asunto"  
                    value={this.state.subject}
                    onChange={this.handleSubjectTextChange}
                    style={_.includes(this.state.errors,'subject') ? errorStyle : null } />
          </div>
        </div>
        <div className="row with-forms">
          <div className="col-md-12">
            <textarea placeholder="Mensaje"                     
                      onChange={this.handleMessageTextChange}
                      value={this.state.message}
                      style={_.includes(this.state.errors,'message') ? errorStyle : null } >
             
            </textarea>
          </div>
        </div>
        { this.state.success && (<div className="margin-top-15">{this.state.success}</div>)}
        { this.state.error && (<div style={{color: 'red'}} className="margin-top-15">{this.state.error}</div>)}
        <button onClick={ this.onSubmit } 
                className="button fullwidth margin-top-15"
                disabled={this.state.sending}
                 >{ this.state.sending ? 'Enviando...' : 'Enviar '}</button>

      </div>
    )
  }
}

function AccommodationType({accommodationType}) {
  if(!accommodationType) {
    return null
  }

  return (
    <span className="listing-tag">{ accommodationType.name }</span>
  )
}

function Content({item}) {
  var content = {}
  const linkStyle = {cursor:'pointer'}

  if(item == null ){
    return null
  }

  return(
    <div id="titlebar" className="listing-titlebar">
      <div className="listing-titlebar-title">
        <h2>{ item.name } <AccommodationType accommodationType={item._accommodationType} /></h2>
      </div>
      <div id="listing-nav" className="listing-nav-container margin-top-30">
        <ul className="listing-nav">
          { 
            item.overview &&
            (<li><a style={linkStyle} onClick={() => scrollToComponent(content.Description) } >Descripción</a></li>) 
          }
          { 
            item.location &&
            (<li><a style={linkStyle} onClick={() => scrollToComponent(content.Location) }>Ubicación</a></li>) 
          }
          <li><a style={linkStyle} onClick={() => scrollToComponent(content.Contact) }>Contacto</a></li>
        </ul>
      </div>
      { 
        item.overview && 
        (<div ref={(section) => { content.Description = section; }}>{item.overview}</div>)
      }
      { 
        item.location &&
        (<div ref={(section) => { content.Location = section; }} id="listing-location" className="listing-section">
          <h3 className="listing-desc-headline margin-top-60 margin-bottom-30">Ubicación</h3>
          <div id="singleListingMap-container">
            <SingleItemMap item={ item } />
          </div>
        </div>)
      }

      <div ref={(section) => { content.Contact = section; }} className="row">
        <h3 className="listing-desc-headline margin-top-60 margin-bottom-30">Contacto</h3>
        <ul className="listing-details-sidebar col-md-8">
          <AddressDetail address={item.address} />
          <PhoneDetail phone={item.phone} />
          <WebDetail web={item.web} />
          <EmailDetail email={item.email} />   
        </ul>
        <ul className="listing-details-sidebar social-profiles col-md-4">
          <li><a href="listings-single-page.html#" className="facebook-profile"><i className="fa fa-facebook-square"></i> Facebook</a></li>
          <li><a href="listings-single-page.html#" className="twitter-profile"><i className="fa fa-twitter"></i> Twitter</a></li>
        </ul>
      </div>
    </div>
  )
}

class Booking extends Component {

  render(){

    return(
        <div>
          <ins  className="bookingaff" 
                data-aid="1341342" 
                data-target_aid="1340103" 
                data-prod="rw" 
                data-width="0" 
                data-height="0" 
                data-lang="en-US" 
                data-show_rw_logo="1" 
                data-show_rw_badge="1" 
                data-show_rw_text="1" 
                data-show_rw_border="1" 
                data-right_align_rw="1" 
                data-hid="26210">
            <a href="//www.booking.com?aid=1340103">Booking.com</a>
          </ins>
        </div>
    )
  }
}

export default class SingleItem extends Component {

  constructor() {
    super()
    this.state = {
      hotel: null, 
    }
  }

  componentDidMount() {
    this.getHotel = this.getHotel.bind(this)
    this.getHotel()
  }

  getHotel() {
    let self = this
    fetch(config.apiUrl+"/item")  
      .then(function(response) {
        response.json().then(function(json) {
          var found = json.filter(function(item) { 
            return slugify(item.name) === self.props.match.params.slug;
          });
         
          if (found.length > 0) {
            self.setState({
              hotel : found[0]
            })
          }
        })
    })
  }

  Sidebar({item}) {
    return(
      <div>
        <Book item={item} />
        <Booking />
      </div>
    )
  }

  render() {
    return(
      <div>
        { (this.state.hotel !== null) && ( this.state.hotel.thumbnail ) ? (<Header src={ this.state.hotel.thumbnail } headerSize="Big" gallery={this.state.hotel.gallery} />) : null }
        {/*<TitleBar title={ 'Hotel '+this.state.hotel.name } subtitle={this.state.hotel.name} />*/}
        <div className="container">
          <div className="row sticky-wrapper">
            <div className="col-lg-8 col-md-8 padding-right-30">
                <Content item={this.state.hotel} />              
            </div>
            <div className="col-lg-4 col-md-4 margin-top-75 sticky">
                { (this.state.hotel !== null) ? (<this.Sidebar item={this.state.hotel} />) : null }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

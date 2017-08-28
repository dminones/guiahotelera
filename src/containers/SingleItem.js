import React, { Component } from 'react'
import slugify from '../utils/Slugify'
import config from '../config'
import {Header, SingleItemMap } from '../components'
import scrollToComponent from 'react-scroll-to-component'

function PhoneDetail({phone}) {
  if(phone == null){ return null }

  return(<li><i className="sl sl-icon-phone"></i> { phone }</li>)
}

function WebDetail({web}) {
  if(web == null){ return null }

  return(
    <li>
      <i className="sl sl-icon-globe"></i> 
      <a href={ web } target="_blank">{ web }</a>
    </li>
  )
}

function EmailDetail({email}) {
  if(email == null){ return null }

  return(
    <li>
      <i className="fa fa-envelope-o"></i> 
      <a href={ 'mailto:'+email }>{ email }</a>
    </li>
  )
}

function Contact({item}) {
  return(
    <div className="boxed-widget">
      <h3><i className="sl sl-icon-pin"></i> Contacto</h3>
      <ul className="listing-details-sidebar">
        <PhoneDetail phone={item.phone} />
        <WebDetail web={item.web} />
        <EmailDetail email={item.email} />   
      </ul>

      <ul className="listing-details-sidebar social-profiles">
        <li><a href="listings-single-page.html#" className="facebook-profile"><i className="fa fa-facebook-square"></i> Facebook</a></li>
        <li><a href="listings-single-page.html#" className="twitter-profile"><i className="fa fa-twitter"></i> Twitter</a></li>
      </ul>
    </div>
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
        <h2>{ item.name }  <span className="listing-tag">{ item.category} </span></h2>
        <span>
          <a style={linkStyle} onClick={() => scrollToComponent(content.Description) } className="listing-address">
            <i className="fa fa-map-marker"></i>
            { item.address} 
          </a>
        </span>
      </div>
      <div id="listing-nav" className="listing-nav-container margin-top-30">
        <ul className="listing-nav">
          <li><a style={linkStyle} onClick={() => scrollToComponent(content.Description) } >Descripción</a></li>
          <li><a style={linkStyle} onClick={() => scrollToComponent(content.Location) }>Ubicación</a></li>
          <li><a style={linkStyle} onClick={() => scrollToComponent(content.Book) }>Reservar</a></li>
        </ul>
      </div>
      <div ref={(section) => { content.Description = section; }}>{item.overview}</div>
      <div ref={(section) => { content.Location = section; }} id="listing-location" className="listing-section">
        <h3 className="listing-desc-headline margin-top-60 margin-bottom-30">Ubicación</h3>
        <div id="singleListingMap-container">
          <SingleItemMap item={ item } />
        </div>
      </div>
      <div ref={(section) => { content.Book = section; }}>
        <h3 className="listing-desc-headline margin-top-60 margin-bottom-30">Reservar</h3>
        <p>Formulario de reserva</p>
      </div>
    </div>
  )
}

export default class SingleItem extends Component {

  constructor() {
    super()
    this.state = {
      hotel: null, 
    }
  }

  getHotel() {
    let self = this
    fetch(config.apiUrl+"/hotels")  
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

  componentDidMount() {
    this.getHotel()
  }

  Sidebar({item}) {
    /*
    var __html = `
    <ins class="bookingaff" data-aid="1341342" data-target_aid="1340103" data-prod="rw" data-width="0" data-height="0" data-lang="en-US" data-show_rw_logo="1" data-show_rw_badge="1" data-show_rw_text="1" data-show_rw_border="1" data-right_align_rw="1" data-hid="26210">
    <!-- Anything inside will go away once widget is loaded. -->
    <a href="//www.booking.com?aid=1340103">Booking.com</a>
      </ins>
      <script type="text/javascript">
          (function(d, sc, u) {
            var s = d.createElement(sc), p = d.getElementsByTagName(sc)[0];
            s.type = 'text/javascript';
            s.async = true;
            s.src = u + '?v=' + (+new Date());
            p.parentNode.insertBefore(s,p);
            })(document, 'script', '//aff.bstatic.com/static/affiliate_base/js/flexiproduct.js');
      </script>`
    { __html: __html }; */

    var template = null;

    return(
      <div>
        <Contact item={item} />
        <div dangerouslySetInnerHTML={ template } />
      </div>
    )
  }

  render() {
    return(
      <div>
        { (this.state.hotel !== null) ? (<Header src={ this.state.hotel.thumbnail } headerSize="Big" gallery={this.state.hotel.gallery} />) : null }
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

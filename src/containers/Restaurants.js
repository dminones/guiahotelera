import React, { Component } from 'react'
import config from '../config'
import {Header, Listing } from '../components'
import headerImage from '../images/restaurants.jpg';

export default class Restaurants extends Component {

	render() {
		return(
			<div>
			  <Header src={ headerImage } title={ 'Restaurantes' }  />
			  <Listing category={'Restaurant'} showBanners={false} />
			</div>
		)
	}
}
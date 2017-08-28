import React, { Component } from 'react'
import config from '../config'
import {Header, Listing } from '../components'

export default class Destination extends Component {

	constructor() {
		super()
		this.state = {
		  destination: null, 
		}
	}

	getDestination() {
		let self = this
		fetch(config.apiUrl+'/destinations')  
		  .then(function(response) {
		    response.json().then(function(json) {
		      	var found = json.filter(function(item) { 
		      		return (item.slug === self.props.slug)
		      	});

		      	if (found.length > 0) {
		        	self.setState({
		          		destination : found[0]
		        	})
		      	}
		    })
		})
	}

	componentDidMount() {
		this.getDestination()
	}

	render() {
		let destination = this.state.destination
		if(!destination) {
			return (null)
		}

		return(
			<div>
			  <Header src={ destination.image } title={ destination.name } headerFixed={true} />
			  <Listing destination={destination} />
			</div>
		)
	}
}

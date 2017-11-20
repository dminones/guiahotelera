import React, { Component } from 'react'
import config from '../config'
import {Header, Listing } from '../components'
import queryString from 'query-string'
import styled, { keyframes } from 'styled-components';

export default class Destination extends Component {

	constructor(props) {
		super(props)
		const parsed = queryString.parse(this.props.location.search);
		
		this.state = {
		  destination: null,
		  category: parsed.category ? parsed.category : 'Alojamiento'
		}

		this.getDestination = this.getDestination.bind(this)
	}

	getDestination() {
		let self = this
		fetch(config.apiUrl+'/destination')  
		  .then(function(response) {
		    response.json().then(function(json) {
		      	var found = json.filter(function(item) { 
		      		return (item.slug === self.props.slug)
		      	});

		      	if (found.length > 0) {
		      		var destination = found[0]
		        	self.setState({
		          		destination : destination,
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
			return (
				<div>
					<LoadingHeader  />
					<LoadingBody />
				</div>
			)
		}
		return(
			<div>
			  <Header src={ destination.image } title={ destination.name } headerFixed={true} />
			  <Listing destination={destination} category={this.state.category} />
			</div>
		)
	}
}

const fadeIn = keyframes`
	0% {
		background: #c4cfcf;
		opacity: 0.3;
	}
    50%  {
    	background: #a0bfc0;
    	opacity: 0.5;
  	}
    100% {
		background: #c4cfcf;
		opacity: 0.3;
	}
`;

const LoadingHeader = styled.div`
  animation: ${fadeIn} 2s ease-in-out infinite;
  height:300px;
  width:100%;
`

const LoadingBody = styled.div`
  min-height:500px;
`

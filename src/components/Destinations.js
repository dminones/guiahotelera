import React, {Component} from 'react';
import config from '../config/'
import {
  Link
} from 'react-router-dom'

function ImageBox({destination}) {
	return (
		<Link to={"/d/"+destination.slug} className="img-box" >
			<div className="img-box-content visible">
				<h4>{destination.name}</h4>
			</div>
			<div className="img-box-background" style={
				{
					backgroundImage: 'url('+destination.image+')'
				}} ></div>
		</Link>
	)
}

export default class Destinations extends Component {

	constructor(props) {
	    super(props)
	    this.state = {
	      results : [],
	      page: props.page
	    }
	 }

	updateDestinations() {
		let self = this

		var url = new URL(config.apiUrl+'/destination')
		var params =  { site:self.props.site };

		if (self.props.destination) {
			params = { ...{ parent:self.props.destination.id, onlyOrdered:1 }}
		}
		
		Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
		fetch(url)
		  .then(function(response) {
		    response.json().then(function(json) {
		      self.setState({
		        results : json
		      })
		    })
		})
	}

	componentDidMount() {
		this.updateDestinations()
		this.getMore = this.getMore.bind(this)
	}

	getMore() {
		this.setState({
			page: this.state.page + this.props.page
		})
	}


	getMoreButton() {
		if(this.state.results.length <= this.state.results.slice(0, this.state.page).length) {
			return null
		}

		return (
			<div className="col-md-12">
            	<a className="button border" onClick={this.getMore} >Más Destinos</a>
            </div>
		)
	}

	render() {
		return(
			<div className="container">
		  		<div className="row" style={{textAlign:'center'}} >
					<div className="col-md-12">
						<h3 className="headline centered margin-bottom-35 margin-top-70">
							Destinos Populares 
							<span>Explora hoteles en destinos populares</span>
						</h3>
					</div>
					
					{this.state.results.slice(0, this.state.page).map((item, index) => (
						<div key={item._id} className="col-md-4" >
		              		<ImageBox destination={item}/>
		              	</div>
		            )) }

					{ this.getMoreButton() }
		           
				</div>
			</div>
		)
	}
}
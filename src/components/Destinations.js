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

	constructor() {
	    super()
	    this.state = {
	      results : []
	    }
	 }

	updateDestinations() {
		let self = this
		fetch(config.apiUrl+'/destinations')  
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
					
					{this.state.results.slice(0, 6).map((item, index) => (
						<div key={item._id} className="col-md-4" >
		              		<ImageBox destination={item}/>
		              	</div>
		            )) }

		            <a className="button border" >Más Destinos</a>
				</div>
			</div>
		)
	}
}
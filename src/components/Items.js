import React, {Component} from 'react';
import config from '../config/'
import {
  Link
} from 'react-router-dom'
import slugify from '../utils/Slugify'

class Item extends Component {
	render() {
		return(
			<div className="col-lg-3 col-md-6">
				<Link 	to={ '/hotel/'+slugify(this.props.item.name)} 
						className="listing-item-container compact"  >
					<div className="listing-item">
						<img src={this.props.item.thumbnail} 
							 alt={this.props.item.name} />
						<div className="listing-item-content"
							 style={{paddingRight:'32px'}}>
							{ this.props.item._accommodationType && (<span className="tag">{this.props.item._accommodationType.name }</span>) }
							<h3>{this.props.item.name}</h3>
							<span>{this.props.item._destination && this.props.item._destination.name}</span>
						</div>
					</div>
				</Link>
			</div>
		)
	}
}

export default class Items extends Component {

	constructor() {
		super()
	    this.state = {
	      results : []
	    }
	}

	updateItems() {
		let self = this
		var url = new URL(config.apiUrl+'/item')
		var params = { publicationType:"Premium", site:this.props.site}
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
		this.updateItems()
	}


	render() {
			console.log(this.state.results)

		 return (
			<section 	className="fullwidth margin-top-65 padding-top-75 padding-bottom-70" 
						style={{backgroundColor:"#f8f8f8"}}>

				<div className="container">
					<div className="row">

						<div className="col-md-12">
							<h3 className="headline centered margin-bottom-45">
								Hoteles más visitados
								<span>Descubrí los mejores hoteles en tus destinos favoritos</span>
							</h3>
						</div>
					</div>
				</div>
				<div className="container">

					{this.state.results.map((item) => (
						<Item key={item._id} item={item} />
		            )) }
			    </div>
			</section>
		)
	}
}
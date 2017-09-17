import React from 'react';
import { Header, Destinations, Search, Items } from '../components'
import { getRandomImage } from '../data';


function SearchContainer() {
	return (
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-push-2">
						<h1 style={{  color:'white' }} >Encontra Hoteles en Bolivia</h1>
						<h4 style={{  color:'white' }} >Expolora los mejores destinos, hoteles y más</h4>

						<Search />
					</div>
				</div>
			</div>
	)
}

export default function Home () {
	return (
		<div>
			<Header src={ getRandomImage() } headerSize="Big" headerFixed={false} >
				<SearchContainer />
			</Header>
			<Destinations page={6} />
			<Items />
		</div>
	)
}
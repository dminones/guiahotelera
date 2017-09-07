import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={10}
    defaultCenter={props.markers[0].position}
    onClick={props.onMapClick}
  >
  	{props.markers.map(marker => (
      <Marker key={ marker.key }
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

export default class SingleItemMap extends Component {
	constructor({item}) {
		super()
	}

	handleMapLoad = this.handleMapLoad.bind(this);

	handleMapLoad(map) {
		this._mapComponent = map;
		if (map) {
		  console.log(map.getZoom());
		}
	}

	render() {
		return(
			<GettingStartedGoogleMap
	            containerElement={
	              <div id="singleListingMap" />
	            }
	            mapElement={
	              <div style={{ height: `100%` }} />
	            }
	            onMapLoad={this.handleMapLoad}
	            markers={[
					{
						position: this.props.item.location,
						key: this.props.item.id,
					}
				]}
	            defaultCenter={this.props.item.location}
	          />
		)
	}
}




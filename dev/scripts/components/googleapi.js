import React from 'react';
import GoogleMapReact from 'google-map-react';
// googlemaps api key = 'AIzaSyDqKXF7pYJO8yZQEmmjHhHQZ0zJvfMGWZw'

export default class SimpleMap extends React.Component {
	constructor() {
		super();
		this.state = {
			center: {lat: 59.95, lng: 30.33},
			zoom: 11
		}
	}
	render() {
		return (
			<div className="map">
				<GoogleMapReact
					defaultCenter={this.state.center}
					defaultZoom={this.state.zoom}
				>
				</GoogleMapReact>
			</div>
		)
	}
}


import React from 'react';

export default class SimpleMap extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: this.props.lat,
			lng: this.props.lng,
			boundaries: this.props.boundaries,
			i: this.props.i
		}
	}
	render() {
		return (
			<div className="map-container">
				<div className="map__single" id={this.state.i}>
					
				</div>
			</div>
		)
	}
	componentDidMount() {
		const initMap = () => {
			const geocoder = new google.maps.Geocoder();
			// making sure each map has a unique id 
			const map = new google.maps.Map(document.getElementById(`${this.state.i}`), {
				zoom: 12,
				center: {lat: this.state.lat, lng: this.state.lng}
			});
			const customMarker = {
				url: '../../icons/school-pin.svg',
				size: new google.maps.Size(50, 70),
				anchor: new google.maps.Point(0, 70),
				scaledSize: new google.maps.Size(50, 70)
			}
			const marker = new google.maps.Marker({
				position: {lat: this.state.lat, lng: this.state.lng},
				map: map,
				icon: customMarker
			});
			// boundaries are passed in
			const boundaries = new google.maps.Polygon({
				paths: this.state.boundaries,
				strokeColor: '#696969',
				strokeOpacity: 0.8,
				strokeWeight: 3,
				fillColor: '#c0c0c0',
				fillOpacity: 0.35
			});
			boundaries.setMap(map);
		}
		initMap();
	}
}
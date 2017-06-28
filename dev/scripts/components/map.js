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
			let geocoder = new google.maps.Geocoder();

			let map = new google.maps.Map(document.getElementById(`${this.state.i}`), {
				zoom: 18,
				center: {lat: this.state.lat, lng: this.state.lng}
			});
			let marker = new google.maps.Marker({
				position: {lat: this.state.lat, lng: this.state.lng},
				map: map
			})
		}
		initMap();
	}
}
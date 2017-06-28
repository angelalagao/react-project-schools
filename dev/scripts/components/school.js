import React from 'react';
import ReactDOM from 'react-dom';
import {ajax} from 'jquery';
import SimpleMap from './map.js';
// Make an api call that will store into an array of objects with the following:
// name of school
// level
// type
// language
// area
// need address for marker placement
// need boundaries lat long for drawing it out on map

export default class School extends React.Component {
	constructor() {
		super();
		this.state = {
			schools: []
		}
	}
	componentDidMount() {
		ajax({
			url: 'http://www.scholarhood.ca/dev-test.json',
			method: 'GET',
			dataType: 'json'
		})
		.then((res) => {
			console.log(res);
			let schools = res.map((school) => {
				let boundariesArray = school.boundaries.secondary[0];
				return {
					name: school.name,
					level: school.level[0],
					type: school.type,
					language: school.language,
					latitude: school.latitude,
					longitude: school.longitude,
					boundaries: boundariesArray.map((boundary) => {
						return {
							lat: boundary[0],
							lng: boundary[1]
						}
					})
				}
			});

			console.log(schools);
			this.setState({
				schools
			})
		});
	}
	render() {
		return (
			<div>
				<h1>Featured schools</h1>
				<Card about={this.state.schools} />
			</div>
		)
	}
}

const Card = (props) => {
	return (
		<div>
			{props.about.map((school, i) => {
				return (
					<div key={`school-${i}`} className="school__card">
						<SimpleMap 
							lat={school.latitude}
							lng={school.longitude}
							boundaries={school.boundaries}
							i={`school-${i}`} 
						/>
						<h3>{school.name}</h3>
						<h4>{school.level}</h4>
						<p>{school.type} | {school.language}</p>
						<div className="keyline"></div>
					</div>
				)
			})}
		</div>
	)
}

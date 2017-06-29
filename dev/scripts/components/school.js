import React from 'react';
import {ajax} from 'jquery';
import Card from './card.js';
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
			let boundariesArray;
			let boundaries;
			let schools = res.map((school) => {
				if (school.boundaries.secondary[1]) {
					boundariesArray = [...school.boundaries.secondary[0], ...school.boundaries.secondary[1]];
				} else {
					boundariesArray = school.boundaries.secondary[0];
				}

				if (school.boundaries.secondary && school.boundaries.elementary) {
					let boundariesConcat = [...school.boundaries.secondary, ...school.boundaries.elementary];
					let boundariesConcatFinal = [...boundariesConcat[0], ...boundariesConcat[1], ...boundariesConcat[2]];
					boundaries = boundariesConcatFinal.map((boundary) => {
						return {
							lat: boundary[0],
							lng: boundary[1]
						}
					});
				} else { 
					boundaries = boundariesArray.map((boundary) => {
					return {
						lat: boundary[0],
						lng: boundary[1]
					}
				})}
				return {
					name: school.name,
					level: school.level[0],
					type: school.type,
					language: school.language,
					latitude: school.latitude,
					longitude: school.longitude,
					boundaries: boundaries,
					slug: school.slug,
					id: school.id
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


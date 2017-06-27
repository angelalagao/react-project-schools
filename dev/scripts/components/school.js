import React from 'react';
import ReactDOM from 'react-dom';
import {ajax} from 'jquery';

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
				return {
					name: school.name,
					level: school.level[0],
					type: school.type,
					language: school.language
					// store boundaries and address
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
			</div>
		)
	}
}

const Card = (props) => {
	return (
		<div>
			
		</div>
	)
}

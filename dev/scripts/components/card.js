import React from 'react';
import {
	BrowserRouter as Router,
	Link,
	Route
} from 'react-router-dom';
import SimpleMap from './map.js';


export default class Card extends React.Component {
	constructor() {
		super();

	}
	render() {
		return (
			<div>
				{this.props.about.map((school) => {
					return (
						<Link key={school.id} to={`/${school.slug}`}>
							<div className="school__card">
								<SimpleMap 
									lat={school.latitude}
									lng={school.longitude}
									boundaries={school.boundaries}
									i={`map-${school.id}`} 
								/>
								<h3>{school.name}</h3>
								<h4>{school.level}</h4>
								<p>{school.type} | {school.language}</p>
								<div className="keyline"></div>
							</div>
						</Link>
					)
				})}
				<Route path="/:school"/>
			</div>
		)
	}
}

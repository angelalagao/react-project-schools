import React from 'react';
import {
	BrowserRouter as Router,
	Link,
	Route
} from 'react-router-dom';
import SimpleMap from './map.js';


export default class Card extends React.Component {
	render() {
		return (
			<div>
				{this.props.about.map((school) => {
					return (
						<div id={`card-${school.id}`} key={`card-${school.id}`}>
							{/*<Carousel>*/}
							<Link to={`/${school.slug}`}>
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
							{/*</Carousel>*/}
						</div>
					)
				})}
				<Route exact path="/:school" component={SchoolName} />
			</div>
		)
	}
}

export class SchoolName extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			school: this.props.match.params.school.replace(/[_-]/g, " ")
		}
	}
	render() {
		return (
			<div>
				<h1>{this.state.school.toUpperCase()}</h1>
			</div>
		)
	}
}

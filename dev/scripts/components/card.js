import React from 'react';
import {toggleClass} from 'jquery';
import {
	BrowserRouter as Router,
	Link,
	Route
} from 'react-router-dom';
import SimpleMap from './map.js';


export default class Card extends React.Component {
	constructor() {
		super();
		this.state = {
			cards: [],
			currentCard: 0
		}
		this.handleClickLeft = this.handleClickLeft.bind(this);
		this.handleClickRight = this.handleClickRight.bind(this);
		this.getCards = this.getCards.bind(this);
	}
	getCards() {

	}
	handleClickLeft() {
		if (this.state.currentCard === 0) {
			this.setState({
				currentCard: this.getCards().length - 1
			});
		} else {
			this.setState({
				currentCard: this.state.currentCard - 1
			});
		}
	}
	handleClickRight() {
		if (this.state.currentCard === this.state.cards.length) {
			this.setState({
				currentCard: 0
			});
		} else {
			this.setState({
				currentCard: this.state.currentCard + 1
			});
		}
	}
	render() {
		return (
			<div className="carousel">
				<button onClick={this.handleClickLeft}>
					<i className="fa fa-chevron-circle-left left-arrow" aria-hidden="true"></i>
				</button>
				{this.props.about.map((school) => {
					return (
						<Link to={`/${school.slug}`} id={`card-${school.id}`} key={`card-${school.id}`}>
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
				<button onClick={this.handleClickRight}>
					<i className="fa fa-chevron-circle-right right-arrow" aria-hidden="true"></i>
				</button>
				<Route exact path="/:school" component={SchoolName} />
			</div>
		)
	}
	componentDidMount() {

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

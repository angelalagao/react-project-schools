import React from 'react';

// generate prev and next arrows to be displayed on the page
// each card should be pushed into an array or have their id represented in an array
// on click of prev button - will -1 to the index of the current displayed card in the array
// on click of next button - will +1 to the index of the current displayed card in the array

// incomplete
export default class Carousel extends React.Component {
	constructor() {
		super();
		this.state = {
			cards: [],
			currentCard: 0,
			
		}
	}
	render() {
		return (
			<div>
				
			</div>
		)
	}
}
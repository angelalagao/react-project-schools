import React from 'react';
import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg';

export default class Display extends React.Component {
	constructor() {
		super();
		this.state = {
			about: [
			{
				svg: '../../icons/hamburger.svg',
				title: 'Hamburger',
				content: 'Spicy jalapeno bacon ipsum dolor amet dolore jowl tempor consequat flank ribeye. Voluptate tri-tip ex exercitation nisi rump ball tip short ribs labore ipsum.'
			},
			{
				svg: '../../icons/diamond.svg',
				title: 'Diamonds',
				content: 'Id ex pariatur sausage eu boudin nulla, tempor lorem do jowl swine. Excepteur corned beef proident kevin sirloin do. In non tri-tip ham shankle bone picanhavelit.'
			},
			{
				svg: '../../icons/puzzle.svg',
				title: 'Extreme Puzzling',
				content: 'Bacon tail ribeye esse shank short ribs, rump ut elit. Beef filet mignon tongue brisket. Do short ribs magna culpa frankfurter fugiat.'
			}
			]
		}
	}
	render() {
		return (
			<div>
				<h1>Bacon Ipsum</h1>
				<p>Consectetur in ground round landjaeger. Tempor ut sausage spare ribs cupim brisket biltong cupim jerky meatloaf in lorem.</p>
				<div className="about">
					{this.state.about.map((about, i) => {
						return (
							<Single 
								key={`about-${i}`} 
								svg={about.svg} 
								title={about.title} 
								content={about.content} />
						)
					})}
				</div>
			</div>
		)
	}
}

const Single = (props) => {
	return (
		<div className="about__single">
			<ReactSVG path={props.svg} />
			<h3>{props.title}</h3>
			<p>{props.content}</p>
		</div>
	)
}
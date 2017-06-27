import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/display.js';
import School from './components/school.js';

class App extends React.Component {
	render() {
		return (
			<div>
				<Display />
				<School />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
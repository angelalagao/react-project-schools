import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Link,
	Route
} from 'react-router-dom';
import Display from './components/display.js';
import School from './components/school.js';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Display />
					<School />
					<Route exact path="/"/>
				</div>
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
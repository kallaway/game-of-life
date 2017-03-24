var React = require('react');

import HeaderGL from './header-gl';
import Controls from './controls';
import Board from './board';
import Settings from './settings';
// import Header from './header';
import FooterGL from './footer-gl';

class App extends React.Component {
	constructor(props) {
		super(props);
		// should be aware of status of the game?
		// should be aware if someone presses Clear?
		// should be aware of which generation it is
		// should be aware of current size of the board
		// should be aware of current speed of the game
		this.state = {
			generation: 0,

		}
	}

	render() {
		return (
			<div className="app-component">
				<p>Light React Boilerplate</p>
				<HeaderGL />
				<Controls />
				<Board />
				<Settings />
				<FooterGL />
			</div>
		);
	}
}


export default App;
// module.exports = App;
// {
// 	App
// }

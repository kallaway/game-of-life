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
			rows: 70,
			cols: 50,
			testArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		}
	}

	render() {
		return (
			<div className="app-component">
				<p>Light React Boilerplate</p>
				<HeaderGL />
				<Controls />
				<Board rows={this.state.rows} cols={this.state.cols} testArr={this.state.testArr}/>
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

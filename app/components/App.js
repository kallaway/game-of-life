var React = require('react');

import HeaderGL from './header-gl';
import Controls from './controls';
import Board from './board';
import Settings from './settings';
// import Header from './header';
import FooterGL from './footer-gl';

class App extends React.Component {
	render() {
		return (
			<div>
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

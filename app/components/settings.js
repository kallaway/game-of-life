var React = require('react');
// var ReactDOM = require('react-dom');

class Settings extends React.Component {
	constructor(props) {
		super(props);
	}

	// setGameSpeed() {
	//
	// }
	// handleClick(speed) {
	// 	this.props.setSpeed(speed)
	// }
	changeSpeed(speed) {
		this.props.setSpeed(speed);
	}

	render() {
		return (
			<div className="settings-component">
				<div className="board-sizes">
					<p>Board size:</p>
					<button>Size: 50x30</button>
					<button>Size: 70x50</button>
					<button>Size: 100x80</button>
				</div>
				<div className="game-speeds">
					<p>Game speed:</p>
					{/* <button onClick={this.handleClick(100)}>Slow</button> */}
					<button onClick={() => { this.props.setSpeed(250) }}>Slow</button>
					<button onClick={() => { this.props.setSpeed(50) }}>Medium</button>
					<button onClick={() => { this.props.setSpeed(10) }}>Fast</button>
				</div>
			</div>
		)
	}
}

Settings.PropTypes = {
	setSpeed: React.PropTypes.func.isRequired,
	changeSize: React.PropTypes.func.isRequired
}

export default Settings;

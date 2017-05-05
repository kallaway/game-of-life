var React = require('react');
// var ReactDOM = require('react-dom');

class Settings extends React.Component {
	constructor(props) {
		super(props);
	}

	//  73 5 = 365

	render() {
		return (
			<div className="settings-component">
				<div className="board-sizes settings-row">
					<p>Board size:</p>

					<button onClick={() => this.props.changeSize(50, 30) }>50x30</button>
					<button onClick={() => this.props.changeSize(70, 50) }>70x50</button>
					<button onClick={() => this.props.changeSize(100, 80) }>100x80</button>
				</div>
				<div className="game-speeds settings-row">
					<p>Speed:</p>
					{/* <button onClick={this.handleClick(100)}>Slow</button> */}
					<button onClick={() => { this.props.setSpeed(250) }}>Thrusters</button>
					<button onClick={() => { this.props.setSpeed(50) }}>Impulse</button>
					<button onClick={() => { this.props.setSpeed(10) }}>Warp</button>
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

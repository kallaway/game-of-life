var React = require('react');
var ReactDOM = require('react-dom');

class Controls extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="controls-component">
				<button onClick={this.props.turnGameOn}>Run</button>
				<button onClick={this.props.pauseGame}>Pause</button>
				<button onClick={this.props.clearGame}>Clear</button>
				<p>Generation: {this.props.generation}</p>
			</div>
		)
	}
}

export default Controls;

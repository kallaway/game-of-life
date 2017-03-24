var React = require('react');
var ReactDOM = require('react-dom');

class Controls extends React.Component {
	render() {
		return (
			<div className="controls-component">
				<p>Controls</p>
				<button>Run</button>
				<button>Pause</button>
				<button>Clear</button>
				<p>Generation: Number</p>
			</div>
		)
	}
}

export default Controls;

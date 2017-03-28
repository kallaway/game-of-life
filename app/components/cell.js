var React = require('react');
var ReactDOM = require('react-dom');

class Cell extends React.Component {
	constructor(props) {
		super(props);
		// should gets its coordinates and the isAwake parameter
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.toggleCell(this.props.id);
	}

	render() {
		// should be aware of its surroundings
		// should have a color
		if (this.props.isAwake === true) {
			return (
				<div
					className="cell-component awake"
					onClick={this.handleClick}></div>
			)
		} else {
			return (
				<div
					className="cell-component asleep"
					onClick={this.handleClick}></div>
			)
		}

	}
}

export default Cell;

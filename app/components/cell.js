var React = require('react');
var ReactDOM = require('react-dom');

class Cell extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		// should be aware of its surroundings
		// should have a color
		return (
			<div className="cell-component"></div>
		)
	}
}

export default Cell;

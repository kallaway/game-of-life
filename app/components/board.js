var React = require('react');
// import '../css/board.css';
// var ReactDOM = require('react-dom');
// require('../sass/board.scss');
// import '../css/board.scss';

import Cell from './cell.js';

class Board extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="board-component">
				{
					this.props.testArr.map(function(cell) {
						return <Cell key={cell} />
					})
				}
			</div>
		)
	}
}

Board.propTypes = {
	rows: React.PropTypes.number,
	cols: React.PropTypes.number,
	testArr: React.PropTypes.array
}

// maybe include default props?

export default Board;

var React = require('react');

import HeaderGL from './header-gl';
import Controls from './controls';
import Board from './board';
import Settings from './settings';
// import Header from './header';
import FooterGL from './footer-gl';

import Cell from './cell';

class App extends React.Component {
	constructor(props) {
		super(props);
		// should be aware of status of the game?
		// should be aware if someone presses Clear?
		// should be aware of which generation it is
		// should be aware of current size of the board
		// should be aware of current speed of the game
		this.state = {
			isGameOn: true,
			generation: 0,
			rows: 30,
			cols: 50,
			testArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			speed: 50,
			cells: []
		}

		this.generateCells();

		// For the Settings
		this.setGameSpeed = this.setGameSpeed.bind(this);
		this.changeBoardSize = this.changeBoardSize.bind(this);
		this.runOneCycle = this.runOneCycle.bind(this);
		this.turnGameOn = this.turnGameOn.bind(this);
		this.pauseGame = this.pauseGame.bind(this);
		this.clearGame = this.clearGame.bind(this);
		this.changeCellState = this.changeCellState.bind(this);
	}

	componentWillMount() {
		// randomly generate either ON cells or OFF cells
		// this.generateCells();
	}

	componentDidMount() {
		setTimeout(this.turnGameOn, 500);
	}

	turnGameOn() {
		// should be activated when the game starts
		console.log('the game is on');
		this.setState({
			isGameOn: true
		});
		this.runOneCycle();
	}

	pauseGame() {
		console.log("Pause Game Runs");
		this.setState({
			isGameOn: false,
		});
	}

	clearGame() {
		// make sure to set all the cells to false;
		this.setState({
			generation: 0,
			isGameOn: false
		});
	}

	runOneCycle() {
		this.state.generation++;
		// make cells decide
		let cells = this.state.cells;
		// let oldCellsState
		let vStep = 50; //change to somethingl like this.rows;
		let hStep = 1;

		let newCellsState = [];

		this.state.cells.forEach(function(cell, index) {
			let cellState = false;
			let score = 0;

			// top
			if (cells[index-vStep]) { score++ }
			// top right
			if (cells[index-vStep+hStep]) { score++ }
			// right
			if (cells[index+hStep]) { score++ }
			// bottom right
			if (cells[index+vStep+hStep]) { score++ }
			// bottom
			if (cells[index+vStep]) { score++ }
			// bottom left
			if (cells[index+vStep-hStep]) { score++ }
			// left
			if (cells[index-hStep]) { score++ }
			// top left
			if (cells[index-vStep-hStep]) {score++}

			//console.log('Score of cell at index:' + index + ' is ' + score);

			// based on the score, make a decision of whether to keep the cell awake, or make it sleep
			switch(score) {
				case 2:
					if (cells[index]) { cellState = true; }
					break;
				case 3:
					if (cells[index]) { cellState = true; } else {
						cellState = true;
					}
					break;

				default:
			}


			newCellsState.push(cellState);
		});

		this.setState({
			cells: newCellsState
		})

		// rerender?
		// update Generation
		// after a delay
		if (this.state.isGameOn) {
			setTimeout(this.runOneCycle, 50);
		}
		// setTimeout(this.runOneCycle, this.state.speed).bind(this);
	}

	// as soon as it loads it should start playing
	generateCells() {
		let overall = this.state.rows * this.state.cols;

		for (var i = 0, isAwakeVar; i < overall; i++) {
			isAwakeVar = Boolean(Math.round(Math.random()));
			// console.log('This cell is ON? ' + isAwakeVar);
			this.state.cells.push(isAwakeVar);
		}
		console.log('CELLS!');
		console.log(this.state.cells);
	}

	runCellLifecycle() {

	}


	setGameSpeed(speed) {
		this.setState({
			speed: speed
		})
	}

	changeBoardSize(rows, cols) {

		this.setState({
			rows: rows,
			cols: cols
		})
	}

	changeCellState(index) {
		let cellsToModify = this.state.cells;
		cellsToModify[index] = !cellsToModify[index];
		this.setState({
			cells: cellsToModify
		})
	}

	render() {
		return (
			<div className="app-component">
				{/* <p>Light React Boilerplate</p> */}
				<HeaderGL />
				<Controls
					generation={this.state.generation}
					turnGameOn={this.turnGameOn}
					pauseGame={this.pauseGame}
					clearGame={this.clearGame}
				/>
				<div className="board-component">
					{
						this.state.cells.map((isCellAwake, index) => {
							return <Cell
								key={index}
								id={index}
								isAwake={isCellAwake}
								toggleCell={this.changeCellState}
							/>
						})
					}
				</div>
				{/* <Board rows={this.state.rows} cols={this.state.cols} testArr={this.state.testArr}/> */}
				<Settings setSpeed={this.setGameSpeed} changeSize={this.changeBoardSize} />
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

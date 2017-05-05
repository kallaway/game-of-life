// should be able to clear the board
// fix the bug on stop
//

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
			boardClass: 'board-70-50',
			cellClass: 'cells-70-50',
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
		this.setGameSpeed = this.setGameSpeed.bind(this);
		this.setBoardStyle = this.setBoardStyle.bind(this);
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
		setTimeout(this.runOneCycle, 50); // find a better way to handle this.
		//this.runOneCycle(); // this runs before the state has the time to adapt
	}

	pauseGame() {
		console.log("Pause Game Runs");
		this.setState({
			isGameOn: false,
		});
	}

	setBoardStyle(currentClass) {
		let boardEl = document.getElementById('board-component');
		// boardClass
		boardEl.classList.remove()
		boardEl.classList.add(currentClass);

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
		let vStep = 50; //change to something like this.rows;
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

		// update Generation
		// after a delay
		if (this.state.isGameOn) {
			console.log("the cycle repeats");
			setTimeout(this.runOneCycle, this.state.speed);
		}
	}

	// as soon as it loads it should start playing
	generateCells() {
		let overall = this.state.rows * this.state.cols;

		for (var i = 0, isAwakeVar; i < overall; i++) {
			isAwakeVar = Boolean(Math.round(Math.random()));
			this.state.cells.push(isAwakeVar);
		}
		console.log('CELLS!');
		console.log(this.state.cells);
	}

	setGameSpeed(speed) {
		this.setState({
			speed: speed
		})
		console.log("changing speed gets run");
	}

	changeBoardSize(rows, cols) {
		this.setState({
			rows: rows,
			cols: cols
		});

		var classToSet;
		switch (rows) {
			case 50:
				classToSet = 'cells-50-30';
		}


		// remove previously created cells

		// check?
		this.generateCells();
	}

	changeCellState(index) {
		let cellsToModify = this.state.cells;
		cellsToModify[index] = !cellsToModify[index];
		this.setState({
			cells: cellsToModify
		})
	}

	setGameSpeed(speed) {
		this.setState({
			speed: speed
		});
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
				<div id="board-component" className={this.state.boardClass}>
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

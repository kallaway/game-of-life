var React = require('react');
// var ReactDOM = require('react-dom');

class Settings extends React.Component {
	render() {
		return (
			<div class="settings-component">
				<p>Settings</p>
				<div class="board-sizes">
					<p>Board size:</p>
					<button>Size: 50x30</button>
					<button>Size: 70x50</button>
					<button>Size: 100x80</button>
				</div>
				<div class="game-speeds">
					<p>Board size:</p>
					<button>Slow</button>
					<button>Medium</button>
					<button>Fast</button>
				</div>
			</div>
		)
	}
}

export default Settings;

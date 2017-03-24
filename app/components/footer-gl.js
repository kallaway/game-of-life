var React = require('react');
var ReactDOM = require('react-dom');

class FooterGL extends React.Component {
	render() {
		return (
			<div className="footer-gl-component">
				<p>Instructions</p>
				<p>Feel free to add cells while it's running. The cells in light red are younger, dark red are older. Enjoy!</p>
			</div>
		)
	}
}

export default FooterGL;

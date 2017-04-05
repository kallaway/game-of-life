var React = require('react');
var ReactDOM = require('react-dom');

// this should be a stateless functional component

const HeaderGL = () => {
	return (
		<div className="header-gl">
			<a target="_blank" href="https://www.math.cornell.edu/~lipa/mec/lesson6.html">
				ReactJS Game of Github (click to learn more)
			</a>
			<p>Add something fun here -> about person's progress on GitHub</p>
		</div>
	);
}

// class HeaderGL extends React.Component {
// 	render() {
// 		return (
// 			<div>HeaderGL</div>
// 		)
// 	}
// }

export default HeaderGL;

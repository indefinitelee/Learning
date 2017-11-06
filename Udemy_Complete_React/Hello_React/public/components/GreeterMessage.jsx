var React = require('react');

var GreeterMessage = React.createClass({
	render: function () {
		var name = this.props.name;
		var pmessage = this.props.pmessage;

		return (
			<div>
				<h1>Hello {name} !</h1>
				<p>{pmessage}</p>
			</div>
		)
	}
});

module.exports = GreeterMessage

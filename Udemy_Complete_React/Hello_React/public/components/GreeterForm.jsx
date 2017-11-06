var React = require('react');

var GreeterForm = React.createClass({
	onFormSubmit: function (e) {
		e.preventDefault();

		var updates = {}
		var name = this.refs.name.value;
		var message = this.refs.message.value;

		if (name.length > 0) {
			this.refs.name.value = "";
			updates.name = name;
			this.props.onNewData(updates);
		}

		if (message.length > 0) {
			this.refs.message.value = "";
			updates.message = message;
		}
	},
	render: function () {
		return (
			<form onSubmit={this.onFormSubmit}>
		      	<div>
			      	<div>
				      	<input type="text" ref="name"/>
				      </div>
				      <div>
				      	<button>Submit</button>
				      </div>
				      <div>
				      	<textarea ref="message" placeholder="enter message"></textarea>
				      </div>
		      	</div>
		   </form>
			)
	}
});


module.exports = GreeterForm;

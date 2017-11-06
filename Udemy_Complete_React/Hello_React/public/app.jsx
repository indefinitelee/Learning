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

var GreeterForm = React.createClass({
	onFormSubmit: function (e) {
		e.preventDefault();

		var updates = {}
		var name = this.refs.name.value;
		var message = this.refs.message.value;

		if (name.length > 0) {
			this.refs.name.value = "";
			updates.name = name;
			this.props.onNewName(updates);
		}

		if (message.length > 0) {
			this.refs.message.value = "";
			updates.message = message;
		}
	},
	render: function () {
		return (
			<form onSubmit={this.onFormSubmit}>
		      	<input type="text" ref="name"/>
		      	<button>Set Name</button>
		      	<textarea ref="message" placeholder="enter message"></textarea>
		   </form>
			)
	}
});

var Greeter = React.createClass({
	getDefaultProps: function() {
		return {
			name: 'React',
			message: 'This is the default message'
		}
	},

	getInitialState: function () {
		return {
			name: this.props.name
			message: this.props.message
		};
	},

	handleNewName: function (updates) {
		this.setState(updates);
	},

	render: function () {
		var name = this.state.name;
		var message = this.state.message;
		return (
			<div>
		      <GreeterMessage name={name} message={pmessage}/>
		      <GreeterForm onNewName={this.handleNewName}/>
			</div>
		);
	}
});

var firstName ="Lee";

ReactDOM.render(
	<Greeter name={firstName}/>,
  document.getElementById('app')
  );

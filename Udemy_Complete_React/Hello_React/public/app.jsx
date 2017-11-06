var GreeterMessage = React.createClass({
	render: function () {
		return (
			<div>
				<h1>something h1</h1>
				<p>ptag</p>
			</div>)
	}
});

var GreeterForm = React.createClass({
	onFormSubmit: function (e) {
		e.preventDefault();

		var name = this.refs.name.value;

		if (name.length > 0) {
			this.refs.name.value = "";
			this.props.onNewName(name);
		}
	},
	render: function () {
		return (
			<form>
		      	<input type="text" ref="name"/>
		      	<button>Set Name</button>
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
		};
	},

	handleNewName: function (name) {
		this.setState({
			name: name
		});

	},

	render: function () {
		var name = this.state.name;
		var message = this.props.message;
		return (
			<div>
		      <h1>Hello {name}</h1>
		      <p>{message + "!!!!"}</p>

		      <GreeterMessage/>
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

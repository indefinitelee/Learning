var React = require('react');

var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

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
          <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});
module.exports = greeter;


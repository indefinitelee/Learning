// controller code
/* Our index.js holds what we might deem “controller” code. It contains the handler, which AWS invokes as the main function of the Lambda. We load a config file and our main code and in exports.handler we invoke a function we’re about to write, handleRequest, passing it event (a JS object containing the JSON-decoded request body), config (a JS object loaded from our config file) and a Node-style callback of the form function (err, responseObject). */

var package = require("./package.json");
var myNewApi = require("./lib/my_new_api.js");
console.log("loaded" + package.name + ", version " + package.version);

exports.handler = function (event, context) {
  myNewApi.handleRequest(event, context.done);
}

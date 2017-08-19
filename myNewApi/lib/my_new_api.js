// a request handler which invokes its given callback with a wrapped version of its input data:

exports.handleRequest = function (requestData, callback) {
  var responseData = {received_as_input: requestData};
  callback(null, responseData);
}

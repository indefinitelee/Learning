var assert = require("chai").assert;
var myNewApi = require("../lib/my_new_api", function() {
  it("exports handleRequest", function() {
    assert.typeOf(myNewApi.handleRequest, "function");
  });
});



// doesn't like brackets in URL
// curl -X POST -d '{"hi": "mom"}' https://td0dhwlzgl.execute-api.us-east-2.amazonaws.com/prod{"received_as_input":{"hi":"mom"}}

var assert = require("chai").assert;
var myNewApi = require("../lib/myNewApi", function() {
  it("exports handleRequest", function() {
    assert.typeOf(myNewApi.handleRequest, "function");
  });
});

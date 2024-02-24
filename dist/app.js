"use strict";

require("reflect-metadata");
var _express = _interopRequireDefault(require("express"));
var _routeDocorator = require("./project_modules/decorators/route-docorator");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();

// console.log(Get);
app.listen(3000, function (err, resp) {
  if (err) {
    throw err;
  } else {
    console.log("Server started");
  }
});
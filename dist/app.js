"use strict";

var _express = _interopRequireDefault(require("express"));
var _hello = _interopRequireDefault(require("./hello"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import { Get } from "./project_modules/decorators/route-docorator";
var app = (0, _express["default"])();
console.log(_hello["default"]);
app.listen(3000, function (err, resp) {
  if (err) {
    throw err;
  } else {
    console.log("Server started");
  }
});
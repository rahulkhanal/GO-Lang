"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Get = Get;
exports.Post = Post;
var _require = require("tsyringe"),
  container = _require.container;
function Get(route) {
  return function (target, key, descriptor) {
    var router = container.resolve("Router");
    router.get(route, descriptor.value);
  };
}
function Post(route) {
  return function (target, key, descriptor) {
    var router = container.resolve("Router");
    router.post(route, descriptor.value);
  };
}

// export { GetRouteDecorator as Get };
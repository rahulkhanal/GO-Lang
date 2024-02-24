"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _dec, _dec2, _dec3, _class, _class2;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
var _require = require("tsyringe"),
  injectable = _require.injectable;
// const {
//   Get,
//   Post,
// } = require("../../project_modules/decorators/route-docorator");
var ProductController = (_dec = injectable(), _dec2 = Get("/products"), _dec3 = Post("/products"), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function ProductController() {
    _classCallCheck(this, ProductController);
  }
  _createClass(ProductController, [{
    key: "getProduct",
    value: function getProduct(req, res) {
      res.send("GET request to /products");
    }
  }, {
    key: "addProduct",
    value: function addProduct(req, res) {
      res.send("POST request to /products");
    }
  }]);
  return ProductController;
}(), (_applyDecoratedDescriptor(_class2.prototype, "getProduct", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "getProduct"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "addProduct", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "addProduct"), _class2.prototype)), _class2)) || _class);
module.exports = ProductController;
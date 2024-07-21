"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAcessToken = createAcessToken;
var _config = require("../config.js");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function createAcessToken(payload) {
  return new Promise(function (resolve, reject) {
    _jsonwebtoken["default"].sign(payload, _config.TOKEN_SECRET, {
      expiresIn: "1d"
    }, function (err, token) {
      if (err) reject(err);
      resolve(token);
    });
  });
}
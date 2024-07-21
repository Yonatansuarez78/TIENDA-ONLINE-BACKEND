"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TOKEN_SECRET = exports.PORT = exports.MONGODB_URI = void 0;
var PORT = exports.PORT = process.env.PORT || 4000;
var MONGODB_URI = exports.MONGODB_URI = "mongodb+srv://yonatansuarez78:1061530108@cluster0.vetq3zl.mongodb.net/mongodb?retryWrites=true&w=majority";
var TOKEN_SECRET = exports.TOKEN_SECRET = 'some_secret_key';
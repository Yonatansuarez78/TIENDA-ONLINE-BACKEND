"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
var welcomeMessage = '¡Bienvenido al backend!';
app.get('/', function (req, res) {
  res.send(welcomeMessage);
});
app.use((0, _cors["default"])({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  // origin: process.env.CORS_ORIGIN || 'https://tienda-online-frontend.vercel.app',

  credentials: true
}));
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use((0, _cookieParser["default"])());
app.use("/api", _authRoutes["default"]);
var _default = exports["default"] = app;
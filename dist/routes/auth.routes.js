"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _authController = require("../controllers/auth.controller.js");
var _validateToken = require("../middlewares/validateToken.js");
var _validatorMiddleware = require("../middlewares/validator.middleware.js");
var _authSchema = require("../schemas/auth.schema.js");
var _orderController = require("../controllers/order.controller.js");
var router = (0, _express.Router)();
router.post('/register', (0, _validatorMiddleware.validateSchema)(_authSchema.registerSchema), _authController.register);
router.post('/login', (0, _validatorMiddleware.validateSchema)(_authSchema.loginSchema), _authController.login);
router.post('/logout', _authController.logout);
router.get('/verify', _authController.verifyToken);
router.get('/profile', _validateToken.authRequired, _authController.profile);
router.put('/updateProfile', _validateToken.authRequired, _authController.updateUser);
router.post('/orders', _orderController.createOrder);
router.get('/orders', _validateToken.authRequired, _orderController.getOrdersByUser);
var _default = exports["default"] = router;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerSchema = exports.loginSchema = void 0;
var _zod = require("zod");
var registerSchema = exports.registerSchema = _zod.z.object({
  username: _zod.z.string({
    required_error: 'Nombre de usuario es requedrido'
  }),
  email: _zod.z.string({
    required_error: 'Correo electronico es requerido'
  }).email({
    required_error: 'Correo invalido'
  }),
  password: _zod.z.string({
    required_error: 'Contraseña es requerida'
  }).min(6, {
    message: 'Contraseña minimo de 6 caracteres'
  })
});
var loginSchema = exports.loginSchema = _zod.z.object({
  email: _zod.z.string({
    required_error: 'Correo electronico es requerido'
  }).email({
    message: 'Correo invalido'
  }),
  password: _zod.z.string({
    required_error: 'Contraseña es requerida'
  }).min(6, {
    message: 'Contraseña minimo de 6 caracteres'
  })
});
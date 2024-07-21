"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSchema = void 0;
var validateSchema = exports.validateSchema = function validateSchema(schema) {
  return function (req, res, next) {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      console.log(error);
      res.status(400).json(error.errors.map(function (error) {
        return error.message;
      }));
    }
  };
};

// export const validateSchema = (schema) => (req, res, next) => {
//     try {
//         schema.parse(req.body);
//         next();
//     } catch (error) {
//         return res
//             .status(400)
//             .json({ message: error.errors.map((error) => error.message) });
//     }
// };
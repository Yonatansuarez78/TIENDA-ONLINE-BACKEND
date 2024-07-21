"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Definición del esquema de un pedido
var orderSchema = new _mongoose["default"].Schema({
  id_pedido: {
    type: String,
    required: true
  },
  // O usa { type: mongoose.Schema.Types.ObjectId, required: true } si es un ObjectId
  id_usuario: {
    type: String,
    required: true
  },
  nombre_usuario: {
    type: String,
    required: true
  },
  correo_electronico: {
    type: String,
    required: true
  },
  productos: [{
    id_producto: {
      type: String,
      required: true
    },
    cantidad: {
      type: Number,
      required: true
    }
  }],
  infoProduct: [{
    _id: {
      type: String,
      required: true
    },
    // Cambiado a String
    name: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    description: {
      type: String
    },
    price: {
      type: Number,
      required: true
    },
    countInStock: {
      type: Number
    },
    rating: {
      type: Number
    },
    numReviews: {
      type: Number
    }
  }],
  direccion: {
    pais: {
      type: String,
      required: true
    },
    ciudad: {
      type: String,
      required: true
    },
    direccion: {
      type: String,
      required: true
    }
  },
  metodo_pago: {
    type: String,
    required: true
  },
  precioTotal: {
    type: String,
    required: true
  },
  totalConIva: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Crear y exportar el modelo de pedido
var Order = _mongoose["default"].model('Order', orderSchema);
var _default = exports["default"] = Order;
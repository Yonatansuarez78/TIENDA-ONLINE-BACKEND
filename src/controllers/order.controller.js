import Order from '../models/order.model.js';  // Asegúrate de que la ruta sea correcta
import mongoose from 'mongoose';


export const createOrder = async (req, res) => {
    try {
        const { id_usuario, nombre_usuario, correo_electronico, productos, direccion, metodo_pago, infoProduct, precioTotal, totalConIva } = req.body;

        const id_pedido = new mongoose.Types.ObjectId();  // Solo si id_pedido es un ObjectId, si es String, puedes omitir esto

        const order = new Order({
            id_pedido: id_pedido.toString(),
            id_usuario,
            nombre_usuario,
            correo_electronico,
            productos: productos.map(product => ({
                id_producto: product.id_producto,
                cantidad: product.cantidad
            })),
            infoProduct,
            direccion,
            metodo_pago,
            precioTotal,
            totalConIva
        });

        await order.save();
        res.status(200).json({ message: 'Pedido creado exitosamente', order });
    } catch (error) {
        console.error('Error al crear el pedido:', error);
        res.status(500).json({ message: 'Error al crear el pedido' });
    }
};





export const getOrdersByUser = async (req, res) => {
    try {
        const userId = req.user.id; // Extraído del token
        // Buscar pedidos del usuario autenticado
        const orders = await Order.find({ id_usuario: userId });

        if (orders.length === 0) {
            return res.status(200).json({ message: 'No se encontraron pedidos para este usuario.' });
        }

        res.status(200).json(orders);
    } catch (error) {
        console.error('Error al obtener pedidos:', error);
        res.status(500).json({ message: 'Error al obtener pedidos' });
    }
};

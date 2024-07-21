import Order from '../models/order.model.js';  // Asegúrate de que la ruta sea correcta
import mongoose from 'mongoose';


export const createOrder = async (req, res) => {
    try {
        const { id_usuario, nombre_usuario, correo_electronico, productos, direccion, metodo_pago, infoProduct } = req.body;

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
            metodo_pago
        });

        await order.save();
        res.status(200).json({ message: 'Pedido creado exitosamente', order });
    } catch (error) {
        console.error('Error al crear el pedido:', error);
        res.status(500).json({ message: 'Error al crear el pedido' });
    }
};

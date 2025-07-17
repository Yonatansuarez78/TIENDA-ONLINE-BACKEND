import Order from '../../models/order.model.js';

// Obtener estadísticas para las gráficas
export const getEstadisticas = async (req, res) => {
    try {
        const orders = await Order.find();

        const ventasPorMes = {};
        const productosVendidos = {};

        orders.forEach(order => {
            const fecha = new Date(order.createdAt);
            const mes = fecha.toLocaleString('es-ES', { month: 'long' });
            const anio = fecha.getFullYear();
            const claveMes = `${mes} ${anio}`; // Ej: 'enero 2025'

            ventasPorMes[claveMes] = (ventasPorMes[claveMes] || 0) + parseFloat(order.precioTotal);

            order.infoProduct.forEach(product => {
                productosVendidos[product.name] = (productosVendidos[product.name] || 0) + (product.countInStock || 1);
            });
        });

        // === Filtrar últimos 5 meses ===
        const mesesOrdenados = Object.keys(ventasPorMes)
            .map(label => ({ label, date: new Date(label.split(' ')[1], new Date(Date.parse(label.split(' ')[0] + " 1, 2020")).getMonth()) }))
            .sort((a, b) => a.date - b.date)
            .map(m => m.label)
            .slice(-5);

        const ventasUltimos5Meses = {};
        mesesOrdenados.forEach(mes => {
            ventasUltimos5Meses[mes] = ventasPorMes[mes];
        });

        // === Top 5 productos más vendidos ===
        const productosTop = Object.entries(productosVendidos)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);

        const productosVendidosTop = {};
        productosTop.forEach(([producto, cantidad]) => {
            productosVendidosTop[producto] = cantidad;
        });

        res.json({
            ventasPorMes: ventasUltimos5Meses,
            productosVendidos: productosVendidosTop,
            ingresosPorCategoria: {}, // Si no lo usas, lo puedes eliminar
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener estadísticas' });
    }
};

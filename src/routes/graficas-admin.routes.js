import express from 'express';
import { getEstadisticas } from '../controllers/admin/graficas-admin.controller.js';

const router = express.Router();

router.get('/estadisticas', getEstadisticas);

export default router;

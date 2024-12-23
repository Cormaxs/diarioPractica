import express from 'express';
import {mostrarFormulario, recibirFormulario} from '../constrollers/apiController.js';

const router = express.Router();

router.get('/crearnoticia', mostrarFormulario);
router.post('/recibirNoticia',recibirFormulario );




export default router;
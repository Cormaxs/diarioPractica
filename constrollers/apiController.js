//import {datosRecibidos, traerUltimaNoticia} from '../repositories/repository.js';
import {recibirFormularioApiServices, mostrarFormularioApiServices} from '../services/servicesApi.js';

export async function recibirFormulario(req, res) {
    const requerimientos = req.body;
    try {
        const { parametros } = await recibirFormularioApiServices(requerimientos);

        // Si no hay parámetros, se muestra un error
        if (!parametros) {
            return res.status(400).send('Error: No se encontraron los parámetros esperados.');
        }

        // Si los parámetros existen, se confirma el agregado correcto
        return res.send('Agregado correctamente');
    } catch (error) {
        console.error('Error al procesar el formulario:', error);
        return res.status(500).send('Hubo un error al procesar el formulario.');
    }
}



//agregar noticia formulario mostar
export async function mostrarFormulario(req, res) {
    const {ultNoticia} = await mostrarFormularioApiServices();
   res.render('layout', {title: 'crear noticia', content: 'formularios/noticia', ultNoticia});
}
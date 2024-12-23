//import {todasLasNoticias, buscarNoticia, traerUltimaNoticia} from '../repositories/repository.js'
import { obtenerTodasLasSecciones, politicaServices, finanzasServices, tecnologiaServices, actualidadServices, crearNoticiaServices} from '../services/services.js';

export async function todasLasSecciones(req, res) {
    try {
        
        const { politica, finanzas, actualidad, tecnologia, ultNoticia } = await obtenerTodasLasSecciones();

        res.render('layout', {
            title: 'secciones',
            content: 'secciones/todasLasSecciones',
            politica,
            finanzas,
            actualidad,
            tecnologia,
            ultNoticia,
        });
    } catch (error) {
        console.error('Error al obtener las secciones:', error);
        res.status(500).send('Error interno del servidor');
    }
}
//muestra s seccion con todos las noticias pertenecientes a esa seccion
export async function politica(req, res) {
    const {noticias, ultNoticia } = await politicaServices();
   res.render('layout', {title: 'politica', content: 'secciones/politica', noticias,ultNoticia});
}
export async function finanzas(req, res) {
    const {noticias, ultNoticia } = await finanzasServices();
   res.render('layout', {title: 'finanzas', content: 'secciones/finanzas', noticias,ultNoticia});
}
export async function actualidad(req, res) {
    const {noticias, ultNoticia } = await actualidadServices();
    res.render('layout', {title: 'actualidad', content: 'secciones/actualidad', noticias,ultNoticia});
}
export async function tecnologia(req, res) {
    const {noticias, ultNoticia } = await tecnologiaServices();
   res.render('layout', {title: 'tecnologia', content: 'secciones/tecnologia', noticias,ultNoticia});
}




//noticias renderizar al clickear, busca el id de la noticia y carga en otra pagina toda la noticia
export async function crearNoticia(req, res) {
    const {id} = req.params;
    const {recuperarDatos, ultNoticia} = await crearNoticiaServices(id);
   res.render('layout', {title: recuperarDatos.titular, content: 'plantilla_noticia/noticiasGeneral', recuperarDatos, ultNoticia});
}


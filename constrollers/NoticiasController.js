import {todasLasNoticias, buscarNoticia} from '../repositories/repository.js'

//muestra todas las secciones
export async function todasLasSecciones(req, res) {
    const politica = await todasLasNoticias('politica');
    const finanzas = await todasLasNoticias('finanzas');
    const actualidad = await todasLasNoticias('actualidad');
    const tecnologia = await todasLasNoticias('tecnologia');
    res.render('layout', {title: 'seciones', content: 'secciones/todasLasSecciones', politica, finanzas,  actualidad, tecnologia})
}
//muestra s seccion con todos las noticias pertenecientes a esa seccion
export async function politica(req, res) {
    const noticias = await todasLasNoticias('politica');
   res.render('layout', {title: 'politica', content: 'secciones/politica', noticias});
}
export async function finanzas(req, res) {
    const noticias = await todasLasNoticias('finanzas');
   res.render('layout', {title: 'finanzas', content: 'secciones/finanzas', noticias});
}
export async function actualidad(req, res) {
     const noticias = await todasLasNoticias('actualidad');
    res.render('layout', {title: 'actualidad', content: 'secciones/actualidad', noticias});
}
export async function tecnologia(req, res) {
    const noticias = await todasLasNoticias('tecnologia');
   res.render('layout', {title: 'tecnologia', content: 'secciones/tecnologia', noticias});
}




//noticias renderizar al clickear, busca el id de la noticia y carga en otra pagina toda la noticia
export async function crearNoticia(req, res) {
    const {id} = req.params;
    const recuperarDatos = await buscarNoticia(id);
   res.render('layout', {title: recuperarDatos.titular, content: 'plantilla_noticia/noticiasGeneral', recuperarDatos});
}





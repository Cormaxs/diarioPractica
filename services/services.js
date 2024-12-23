import {todasLasNoticias, buscarNoticia, traerUltimaNoticia} from '../repositories/repository.js'

export async function obtenerTodasLasSecciones() {
    const politica = await todasLasNoticias('politica');
    const finanzas = await todasLasNoticias('finanzas');
    const actualidad = await todasLasNoticias('actualidad');
    const tecnologia = await todasLasNoticias('tecnologia');
    const ultNoticia = await traerUltimaNoticia();

    return { politica, finanzas, actualidad, tecnologia, ultNoticia };
}


export async function politicaServices() {
    const noticias = await todasLasNoticias('politica');
    const ultNoticia = await traerUltimaNoticia();
    return {noticias, ultNoticia}
}

export async function finanzasServices() {
    const noticias = await todasLasNoticias('finanzas');
    const ultNoticia = await traerUltimaNoticia();
    return {noticias, ultNoticia}
}

export async function tecnologiaServices() {
    const noticias = await todasLasNoticias('tecnologia');
    const ultNoticia = await traerUltimaNoticia();
    return {noticias, ultNoticia}
}

export async function actualidadServices() {
    const noticias = await todasLasNoticias('actualidad');
    const ultNoticia = await traerUltimaNoticia();
    return {noticias, ultNoticia}
}


export async function crearNoticiaServices(id) {
    const recuperarDatos = await buscarNoticia(id);
    const ultNoticia = await traerUltimaNoticia();
    return {recuperarDatos, ultNoticia};
}
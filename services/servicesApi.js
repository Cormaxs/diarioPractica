import {datosRecibidos, traerUltimaNoticia} from '../repositories/repository.js';

export async function recibirFormularioApiServices(req) {
    const parametros = await datosRecibidos(req);
    return {parametros};
}

export async function mostrarFormularioApiServices() {
    const ultNoticia = await traerUltimaNoticia();
    return {ultNoticia};
}
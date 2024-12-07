import {datosRecibidos, traerUltimaNoticia} from '../repositories/repository.js';


export async function recibirFormulario(req, res) {
    const parametros = await datosRecibidos(req.body);
    if(!parametros){
        res.send('agregado correctamente')
    }
}


//agregar noticia formulario mostar
export async function mostrarFormulario(req, res) {
    const ultNoticia = await traerUltimaNoticia();
   res.render('layout', {title: 'crear noticia', content: 'formularios/noticia', ultNoticia});
}
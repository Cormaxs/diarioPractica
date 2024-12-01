import {datosRecibidos} from '../repositories/repository.js';


export async function recibirFormulario(req, res) {
    const parametros = await datosRecibidos(req.body);
    if(!parametros){
        res.send('agregado correctamente')
    }
}


//agregar noticia formulario mostar
export async function mostrarFormulario(req, res) {
   res.render('layout', {title: 'crear noticia', content: 'formularios/noticia'});
}
import noticia from "../models/noticia.js";
import mongoose from "mongoose";

export async function datosRecibidos(datos) { // Manejo de formularios
    try {
        // Crea un nuevo documento con los datos del formulario
        const nuevaNoticia = new noticia({
            titular: datos.titular,
            subtitulo: datos.subtitulo,
            entrada: datos.entrada,
            cuerpo: datos.cuerpo,
            cierre: datos.cierre,
            autor: datos.autor,
            categoria: datos.categoria,
            imagen: datos.imagen
        });

        // Guarda el documento en la base de datos
        await nuevaNoticia.save();

        // Devuelve un objeto con los datos de la noticia guardada
        return {
            titular: nuevaNoticia.titular,
            subtitulo: nuevaNoticia.subtitulo,
            entrada: nuevaNoticia.entrada,
            cuerpo: nuevaNoticia.cuerpo,
            cierre: nuevaNoticia.cierre,
            autor: nuevaNoticia.autor,
            categoria: nuevaNoticia.categoria,
            imagen: nuevaNoticia.imagen
        };

    } catch (error) {
        console.error('Error al guardar la noticia:', error);
        throw new Error('No se pudo guardar la noticia');
    }
}


export async function todasLasNoticias(seccion) {//busca y devuelve todas las noticias de una categoria especifica
    return await noticia.find({categoria: seccion});
}


export async function buscarNoticia(id) {
    return  await noticia.findById(id);    
    
}

export async function traerUltimaNoticia() {
  return await noticia.findOne().sort({ fechaPublicacion: -1 }).catch(console.error); 
}
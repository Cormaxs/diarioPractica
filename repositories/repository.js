import noticia from "../models/noticia.js";
import mongoose from "mongoose";

export async function datosRecibidos(datos) {//manejo de formularios
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
    await nuevaNoticia.save();
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
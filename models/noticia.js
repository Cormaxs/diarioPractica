// models/Noticia.js
import mongoose from "mongoose";

const noticiaSchema = new mongoose.Schema({
    titular: { 
        type: String, 
        required: true, 
        trim: true 
    }, // Titular: Frase principal breve e impactante
    subtitulo: { 
        type: String, 
        required: true, 
        trim: true 
    }, // Subtítulo o bajada: Resumen breve
    entrada: { 
        type: String, 
        required: true, 
        trim: true 
    }, // Entrada o Lead: Primer párrafo clave
    cuerpo: { 
        type: String, 
        required: true 
    }, // Cuerpo: Desarrollo detallado
    cierre: { 
        type: String, 
        required: true, 
        trim: true 
    }, // Cierre: Frase final significativa
    autor: { 
        type: String, 
        required: true, 
        trim: true 
    }, // Autor de la noticia
    fechaPublicacion: { 
        type: Date, 
        default: Date.now 
    }, // Fecha de publicación
    categoria: { 
        type: String, 
        required: true, 
        trim: true 
    }, // Categoría: Actualidad, Política, etc.
    imagen: { 
        type: String 
    } // Imagen: Ruta o URL a la imagen asociada
});

export default mongoose.model("Noticia", noticiaSchema, 'Noticiasinfonoa24'); //Noticias es la colleccion que quiero que se guarden los datos

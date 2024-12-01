import express from 'express';
import { finanzas,politica,actualidad,tecnologia, crearNoticia, todasLasSecciones } from '../constrollers/NoticiasController.js';


const routerIndex = express.Router();

routerIndex.get('/secciones', todasLasSecciones);//muestra todas las secciones

routerIndex.get('/finanzas', finanzas);//muestra el inicio de finanzas
routerIndex.get('/tecnologia', tecnologia);//muestra el inicio de tecnologia
routerIndex.get('/actualidad', actualidad); //muestra el inicio de actualidad
routerIndex.get('/politica', politica); //muestra el inicio de politica

//renderizar noticia al darle click
routerIndex.get('/finanzas/:id', crearNoticia);
routerIndex.get('/tecnologia/:id', crearNoticia);
routerIndex.get('/actualidad/:id', crearNoticia);
routerIndex.get('/politica/:id', crearNoticia);


export default routerIndex;
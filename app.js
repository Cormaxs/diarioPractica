import express from 'express';
import router from './routes/apiRoutes.js';
import routerIndex from './routes/indexRoutes.js'
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import {connectDB} from './config/db.js';

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();
app.use(express.json());//para darle formato json
app.set('view engine', 'ejs'); // Usa EJS como motor de vistas
app.set('views', path.resolve('./views'));//Define el directorio raíz de las vistas estatico
app.use(expressEjsLayouts);//middleware de layout
app.set('layout', 'layout');//archivo base para los layout es layout
app.use(express.static(path.resolve('./public')));//busca todo lo estatico en public, como los css
app.use(express.urlencoded({ extended: true }));  // Para formularios con método POST

app.get('/', (req, res)=>{
    res.send('funciona');
})
app.use('/api', router);//rutas api
app.use('/seccion', routerIndex);//rutas secciones

app.use((req, res) => {
    res.status(404).send({mensaje: "Ruta no encontrada"});
});


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
}); 
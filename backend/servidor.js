const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectionBDPostgres, connectionBDMongo,  pool } = require ('./config/basesDatos')
const createTableProyectos = require('./model/proyectosSQL');
const createTableActividades = require('./model/actividadesSQL');
const controladorProyectos = require('./controller/controladorProyecto');
const controladorActividades = require('./controller/controladorActividades');


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectionBDMongo();
connectionBDPostgres();

//Crear tablas en la base de datos Postgres
async function crearTablasSQL() { 
    await createTableProyectos(); 
    await createTableActividades(); }

crearTablasSQL();

//Rutas proyectos
app.post('/proyectos', controladorProyectos.crearProyecto);
app.get('/proyectos', controladorProyectos.obtenerProyectos);
app.get('/proyectosSQL', controladorProyectos.obtenerProyectosSQL);

//Rutas actividades
app.get('/:proyectoId', controladorActividades.traerActividades);
app.post('/:proyectoId', controladorActividades.agregarActividad);

app.use((req, res, next) => {
    res.status(404).json({ mensaje: 'Ruta no encontrada' });
});


app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).json({ mensaje: 'Error en el servidor', error: error.message});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
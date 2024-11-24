const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Pool } = require('pg');

// Configuración del entorno
dotenv.config();

//Conexion con Mongo BD
const connectionBDMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Base de datos conectada a MongoDB Atlas ');
    } catch (error) {
        console.log('Error en la conexión a MongoDB Atlas: ',error);
        process.exit();
    }
};

// Conexion con Postgres BD
const pool = new Pool({
    user: process.env.POSTGRES_USER ,
    host: process.env.POSTGRES_HOST ,
    database: process.env.POSTGRES_DB ,
    password: process.env.POSTGRES_PASSWORD ,
    port: process.env.POSTGRES_PORT 

});

const connectionBDPostgres = async () => {

    try {

        await pool.connect();
        console.log('Conexión exitosa a PostgreSQL');

    } catch (error) {

        console.error('Error al conectar a PostgreSQL:', error.message);

    }

};

module.exports = { connectionBDPostgres, connectionBDMongo,  pool };
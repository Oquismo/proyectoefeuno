const express  = require ('express');
const bunyan = require ('bunyan');
const cors = require ('cors');

require('dotenv').config();


const usuarios = require ('./router/usuariosRouter');
const escuderia = require ('./router/escuderiaRouter');
const Logger = require('bunyan');
kg



const logger = bunyan.createLogger({name: 'Servidor'});

const app = express();

app.use(cors());

app.use(express.json());


app.use('/usuarios', usuarios);
app.use('/escuderia', escuderia);


app.listen(process.env.PUERTO, () => {
    logger.info('Servidor levantado');
})

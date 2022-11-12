const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const parvuloRoutes = require('./routes/parvuloRoutes');

app.use(cors())
app.use(express.json());
app.options('*', cors());
app.use('/api', parvuloRoutes);

const ApoderadoRoutes = require('./routes/ApoderadoRoutes');

app.use(cors())
app.use(express.json());
app.options('*', cors());
app.use('/api', ApoderadoRoutes);

const AsistenteParvuloRoutes = require('./routes/AsistenteParvuloRoutes');

app.use(cors())
app.use(express.json());
app.options('*', cors());
app.use('/api', AsistenteParvuloRoutes);



app.listen(process.env.PORT,  () => {
    console.log('El servidor corre en el puerto ->', process.env.PORT)
});

mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.DB, (err) => {
    if (err) {
        return console.log('Error al conectar con la base de datos -> ', err)
    }
    return console.log('Conectado a la base de datos')
});

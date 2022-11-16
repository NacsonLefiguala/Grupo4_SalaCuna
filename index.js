const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();

const EducadoraParvuloRoutes = require('./routes/EducadoraParvuloRoutes');

app.use(cors())
app.use(express.json());
app.options('*', cors());
app.use('/api', EducadoraParvuloRoutes);

const parvuloRoutes = require('./routes/ParvuloRoutes');

app.use(cors())
app.use(express.json());
app.options('*', cors());
app.use('/api', parvuloRoutes);

const AsistenteParvuloRoutes = require('./routes/AsistenteParvuloRoutes');

app.use(cors())
app.use(express.json());
app.options('*', cors());
app.use('/api', AsistenteParvuloRoutes);

const ApoderadoRoutes = require('./routes/ApoderadoRoutes');

app.use(cors())
app.use(express.json());
app.options('*', cors());
app.use('/api', ApoderadoRoutes);

app.listen(process.env.PORT, () => {
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

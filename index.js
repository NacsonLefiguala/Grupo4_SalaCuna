const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();


app.use(cors())
app.use(express.json());
app.options('*', cors());

const EducadoraParvuloRoutes = require('./routes/EducadoraParvuloRoutes');
const parvuloRoutes = require('./routes/ParvuloRoutes');
const AsistenteParvuloRoutes = require('./routes/AsistenteParvuloRoutes');
const ApoderadoRoutes = require('./routes/ApoderadoRoutes');
const AsistenciaRoutes = require('./routes/AsistenciaRoutes');

app.use('/api', parvuloRoutes);
app.use('/api', AsistenteParvuloRoutes);
app.use('/api', ApoderadoRoutes);
app.use('/api', EducadoraParvuloRoutes);
app.use('/api', AsistenciaRoutes);

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

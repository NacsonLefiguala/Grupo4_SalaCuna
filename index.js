const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();

/*/function isAdmin(req, res, next) {
    if (req.body.isAdmin) {
        next();
    } else {
        res.status(403).send(`Acceso denegado ${req.url}`);
    }
}*/

app.use(cors())
app.use(express.json());
app.options('*', cors());
//app.use(isAdmin); 

const ApoderadoRoutes = require('./routes/apoderadoRoutes');
const AsistenciaRoutes = require('./routes/AsistenciaRoutes');
const AsistenteParvuloRoutes = require('./routes/AsistenteParvuloRoutes');
const EducadoraParvuloRoutes = require('./routes/EducadoraParvuloRoutes');
const ParvuloRoutes = require('./routes/parvuloRoutes');

app.use('/api', ApoderadoRoutes);
app.use('/api', AsistenciaRoutes);
app.use('/api', AsistenteParvuloRoutes);
app.use('/api', EducadoraParvuloRoutes);
app.use('/api', ParvuloRoutes);

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

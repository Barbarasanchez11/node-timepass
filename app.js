const express = require('express');
const app = express();
const port = 3000;

const horaMiddleware = require('./middlewares/horaMiddleware');
const validarHora = require('./middlewares/validarHora');

const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

// Middleware para obtener la hora actual
app.use(horaMiddleware);
app.use('/', indexRouter);
app.use('/endroute', validarHora, endrouteRouter);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

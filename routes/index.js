const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const mensaje = req.query.mensaje || '';// si no pide mensaje se asigana ''
    res.send(`
        <h1>Bienvenido!</h1>
        <p>La hora actual es: ${res.locals.horaActual}</p>
        <p style="color: red">${mensaje}</p>
        <a href="/endroute"><button>Ir a la ruta final</button></a>
    `);
});

module.exports = router;
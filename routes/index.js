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

router.use ((req,res) => {
    res.status(404).send(`<h1>Page not found</h1><a href="/endroute></a>`)
})

module.exports = router;
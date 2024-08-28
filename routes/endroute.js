const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <h1>Bienvenido a la ruta final!</h1>
        <p>Estás en /endroute</p>
    `);
});

module.exports = router;

const horaMiddleware = (req, res, next) => {
    req.horaActual = new Date()
    console.log(req.horaActual.toLocaleTimeString())
    res.locals.horaActual = req.horaActual.toLocaleTimeString();//locals se asigna a res
//facilita el paso de datos sin tener que usar funciones o métodos por separado
    
    next();
};

module.exports = horaMiddleware;
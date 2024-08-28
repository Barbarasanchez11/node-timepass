

const horaMiddleware = (req, res, next) => {
    req.horaActual = new Date();
    res.locals.horaActual = req.horaActual.toLocaleTimeString();
    next();
};

module.exports = horaMiddleware;
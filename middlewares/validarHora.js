

const validarHora = (req, res, next) => {
  const hora = req.horaActual.getHours();
  if (hora < 12) {
      res.locals.mensaje = `Aún no son las 12 de la mañana, espera hasta las 12:00 para entrar`;
      return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
  }
  next();
};

module.exports = validarHora;


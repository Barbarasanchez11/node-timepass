

const validarHora = (req, res, next) => {
  const hora = req.horaActual.getHours();
  if (hora < 12) {
      res.locals.mensaje = `Aún no son las 12 de la mañana, espera hasta las 00:00 para entrar`;
      return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
  }
  next();
};

module.exports = validarHora;


 //res.redirect:es un método que se utiliza para redirigir a un cliente
 //(generalmente un navegador) a una URL diferente. Cuando se llama a este método, 
 //el servidor envía una respuesta HTTP con un código de estado de redirección
 //(por lo general un código 302,etc.) junto con la URL a la que el cliente debe ser enviado.

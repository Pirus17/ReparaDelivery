exports.login = passport.authenticate('google', { scope: ['profile', 'email'] });

exports.callback = passport.authenticate('google', { failureRedirect: '/login' },

function(req, res) {
    // Autenticación exitosa, redirigir a la página de perfil del usuario
    res.redirect('/profile');
  });

exports.profile = function(req, res) {
  // Verificar si el usuario está autenticado
  if(req.isAuthenticated()) {
    res.send('Bienvenido ' + req.user.displayName);
  } else {
    res.redirect('/login');
  }
};

exports.logout = function(req, res){
  req.logout();
  res.redirect('/');
};

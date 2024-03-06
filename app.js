var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productoRouter = require('./routes/producto');
var compraRouter = require('./routes/compra');
var busquedaRouter = require('./routes/busqueda');
var filtrarRouter = require('./routes/filtrar');
var usuarioRouter = require('./routes/usuario');
var loginRouter = require('./routes/login');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var session = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'secreto', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productoRouter);
app.use('/compras', compraRouter);
app.use('/busqueda', busquedaRouter);
app.use('/filtrar', filtrarRouter);
app.use('/usuario', usuarioRouter);
app.use('/login', loginRouter);

// Ruta de inicio de sesión de Google
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Ruta de retorno de Google después de la autenticación
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Autenticación exitosa, redirigir a la página de perfil del usuario
    res.redirect('/profile');
  });

  // Ruta de perfil del usuario
app.get('/profile', function(req, res) {
  // Verificar si el usuario está autenticado
  if(req.isAuthenticated()) {
    res.send('Bienvenido ' + req.user.displayName);
  } else {
    res.redirect('/login');
  }
});

// Ruta de cierre de sesión
app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


// Configurar la estrategia de autenticación de Google
passport.use(new GoogleStrategy({
  clientID: 'TU_CLIENT_ID',
  clientSecret: 'TU_CLIENT_SECRET',
  callbackURL: 'http://localhost:3000/auth/google/callback'
},

function(accessToken, refreshToken, profile, done) {
  // Aquí puedes guardar o buscar el usuario en tu base de datos
  return done(null, profile);
}
));

// Serializar y deserializar el usuario
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers');

// Ruta de inicio de sesión de Google
router.get('/google', authControllers.login);

// Ruta de retorno de Google después de la autenticación
router.get('/google/callback', authControllers.callback);

// Ruta de perfil del usuario
router.get('/profile', authControllers.profile);

// Ruta de cierre de sesión
router.get('/logout', authControllers.logout);

module.exports = router;
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { register, login } = require('../controllers/auth.controller');

// Middleware para validar login clásico
function validateLoginFields(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email y contraseña son requeridos' });
  }
  next();
}

// Rutas tradicionales
router.post('/register', register);
router.post('/login', validateLoginFields, login);

// 🔐 RUTA: Inicia el login con Google
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// 🔐 RUTA: Callback de Google (después del login)
router.get('/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/login-error' }),
  (req, res) => {
    // Generar JWT personalizado
    const token = jwt.sign({
      id: req.user._id,
      email: req.user.email
    }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    // Redirigir al frontend con el token (como query param)
res.redirect(`http://127.0.0.1:5500/frontend/chat.html?token=${token}`);
  }
);

module.exports = router;

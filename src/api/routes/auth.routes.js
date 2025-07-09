const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth.controller');

function validateLoginFields(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email y contraseña son requeridos' });
  }
  next();
}

router.post('/register', register);
router.post('/login', validateLoginFields, login);

module.exports = router;
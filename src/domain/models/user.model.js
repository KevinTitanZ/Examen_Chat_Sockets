const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: function () {
      return !this.googleId; // Solo requiere password si NO es usuario de Google
    }
  },
  googleId: {
    type: String // ID que devuelve Google
  },
  name: {
    type: String // Puedes guardar el nombre desde el perfil de Google
  }
});

module.exports = mongoose.model('User', UserSchema);

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../../domain/models/user.model');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // Buscar si el usuario ya existe por su googleId
    let user = await User.findOne({ googleId: profile.id });

    if (!user) {
      // Si no existe, lo creamos
      user = new User({
        email: profile.emails[0].value,
        googleId: profile.id,
        name: profile.displayName // 👈 también puedes guardar el nombre si quieres
      });

      await user.save();
    }

    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
}));

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const keys = require('../config/keys');
const User = mongoose.model("User");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    User.findById(id).then((user, err) => {
        done(err, user);
    });
});

const strategy = passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: keys.callbackURL,
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id }).then((user, err) => {
        if(user) {
            return done(err, user);
        } else {
            new User({ googleId: profile.id }).save().then((newUser, error) => {
                return done(error, newUser);
            });
        }
    });
}));

module.exports = strategy;
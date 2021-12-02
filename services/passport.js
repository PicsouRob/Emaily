const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const keys = require('../config/keys');
const User = mongoose.model('User');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((err, user) => {
        done(user, err);
    })
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
    .then((err, existUser) => {
        // console.log("existUser:" + existUser);
        // console.log("err:" + err);
        if(existUser) {
            return done(err, existUser);
        } else {
            new User({ googleId: profile.id }).save()
            .then((user) => done(null, user));
        }
    });
}));
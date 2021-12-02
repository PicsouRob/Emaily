const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');

const keys = require('./config/keys');

// INITIALIZE THE APP...
const app = express();

// MIDDLEWARE ....
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
}));
app.use(passport.initialize());
app.use(passport.session());
require('./models/user');
require('./services/passport');

// CONNECT MONGODB ....
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('connect to mongoDb'))
.catch(err => console.log(err));

// APP ROUTES ...
require('./routes/authRoutes')(app);

// RUNNING THE SERVER ....
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server running'));
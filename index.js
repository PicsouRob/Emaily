const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

const keys = require('./config/keys');
require('./models/user');
require('./models/survey');
require('./services/passport');

// INITIALIZE THE APP...
const app = express();

// MIDDLEWARE ....
app.use(bodyParser.json());
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
}));
app.use(passport.initialize());
app.use(passport.session());

// CONNECT MONGODB ....
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('connect to mongoDb');
}).catch((error) => {
    console.log(error);
});

// APP ROUTES ...
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveysRoutes')(app);

if(process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // Like our main.js file, or main.css file!

    app.use(express.static('client/build'));

    // Express will serve the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.get('/', (req, res) => {
    res.send('Emaily');
});

// RUNNING THE SERVER ....
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('server running'));
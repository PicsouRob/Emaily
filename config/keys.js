// keys.js figure out what set of credentials to return
if(process.env.NODE_ENV === 'production') {
    // We are in production - return set of dev keys
    module.exports = require('./prod');
} else {
    // We are in development - return set of dev keys
    module.exports = require('./dev');
}

// mongodb+srv://picsou:<password>@cluster0.ufhav.mongodb.net/emaily-prod?retryWrites=true&w=majority

// 1022741791890-cgcajbk1t4i4ohrkg2bespe9u8pjadji.apps.googleusercontent.com

// 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
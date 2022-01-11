const keys = require('../../config/keys');

module.exports = (survey) => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3 style="font-weight: bold; font-size: 20px">I'd like your inpout!</h3>
                    <p style="">Please answer the following question:</p>
                    <p style="">${survey.body}</p>
                    <div style="padding: 10px 20px; margin: 10px;">
                        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
                    </div>
                    <div style="padding: 10px 20px; margin: 10px;">
                        <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
                    </div>
                </div>
            </body>
        </html>
    `;
}
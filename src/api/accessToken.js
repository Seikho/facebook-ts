var request = require('request');
var settings = require('./settings');
var logger = require('ls-logger');
var storedToken = '';
function authCallback(result) {
    try {
        var errorObject = JSON.parse(result);
        if (!!errorObject.error) {
            logger.error("Failed to generate Application Auth Token: " + errorObject.error.message);
            return null;
        }
        logger.error("Failed to generate Application Auth Token: Unexpected error: " + errorObject);
    }
    catch (ex) {
        var split = result.split('=');
        return split[1];
    }
}
module.exports = function tokenRequest(usedStoredToken) {
    if (usedStoredToken === void 0) { usedStoredToken = true; }
    if (usedStoredToken && storedToken.length > 0)
        return Promise.resolve(storedToken);
    var options = {
        client_id: settings.getClientId(),
        client_secret: settings.getSecret(),
        grant_type: 'client_credentials'
    };
    var tokenPromise = new Promise(function (resolve, reject) {
        request
            .post('https://graph.facebook.com/oauth/access_token', { form: options }, function (error, response, body) {
            if (error)
                return reject(error);
            var token = authCallback(body);
            if (token == null)
                return reject('Failed to generate auth token');
            storedToken = token;
            resolve(token);
        });
    });
    return tokenPromise;
};
//# sourceMappingURL=accessToken.js.map
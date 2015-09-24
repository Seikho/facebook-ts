var request = require('request');
var accessToken = require('./accessToken');
function debugToken(userToken, appToken) {
    var url = "https://graph.facebook.com/debug_token?input_token=" + userToken + "&access_token=" + appToken;
    var promise = new Promise(function (resolve, reject) {
        request.get(url, {}, function (err, res, body) {
            if (err)
                return reject(err);
            if (typeof body === 'string')
                body = JSON.parse(body);
            if (body.data.error)
                return reject(body.data.error);
            resolve(body);
        });
    });
    return promise;
}
module.exports = function verify(userStatus) {
    return accessToken()
        .then(function (token) { return debugToken(userStatus.authResponse.accessToken, token); })
        .catch(function () { return accessToken(false); })
        .then(function (token) { return debugToken(userStatus.authResponse.accessToken, token); });
};
//# sourceMappingURL=verifyToken.js.map
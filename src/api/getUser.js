var request = require('request');
var accessToken = require('./accessToken');
module.exports = function getUser(userId) {
    var resolve, reject;
    var promise = new Promise(function (res, rej) {
        resolve = res;
        reject = rej;
    });
    accessToken()
        .then(function (token) {
        var url = "https://graph.facebook.com/v2.4/" + userId + "?access_token=" + token;
        request.get(url, {}, function (err, res, body) {
            if (err)
                return reject(err);
            if (typeof body === 'string')
                body = JSON.parse(body);
            if (!body.name || !body.id)
                return reject('Unable to retrieve user');
            resolve(body);
        });
    });
    return promise;
};
//# sourceMappingURL=getUser.js.map
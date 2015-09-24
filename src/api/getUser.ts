import request = require('request');
import accessToken = require('./accessToken');
import * as Types from '../../index.d.ts';

export = function getUser(userId: number | string): Promise<Types.User> {
    var resolve, reject;
    var promise = new Promise<Types.User>((res, rej) => {
        resolve = res;
        reject = rej;
    });

    accessToken()
        .then(token => {
            var url = `https://graph.facebook.com/v2.4/${userId}?access_token=${token}`;
            request.get(url, {}, (err, res, body) => {
                if (err) return reject(err);
                if (typeof body === 'string') body = JSON.parse(<string>body);         
                if (!body.name || !body.id) return reject('Unable to retrieve user');
                               
                resolve(body);
            })
        })
        
    return promise;
}

import request = require('request');
import accessToken = require('./accessToken');
import * as Types from '../../index.d.ts';

export = function verify(userStatus: Types.Status) {
    return accessToken()
        .then(token => debugToken(userStatus.authResponse.accessToken, token))
}

function debugToken(userToken: string, appToken: string): Promise<Types.TokenStatus> {
    var url = `https://graph.facebook.com/debug_token?input_token=${userToken}&access_token=${appToken}`;
    
    var promise = new Promise<Types.TokenStatus>((resolve, reject) => {
        request.get(url, {}, (err, res, body: Types.TokenStatus) => {
            if (err) return reject(err);
            if (typeof body === 'string') body = JSON.parse(<string>body);            
            
            if (body.data.error) return reject(body.data.error);
            
            resolve(body);
        })
    });
    
    return promise;
}
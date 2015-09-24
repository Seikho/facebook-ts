import request = require('request');
import * as settings from './settings';
import * as Types from '../../index.d.ts';
 
var logger = require('ls-logger');
var storedToken: string = '';

export = function tokenRequest(usedStoredToken = true): Promise<string> {
    if (usedStoredToken && storedToken.length > 0) return Promise.resolve(storedToken);   
    var options = {
        client_id: settings.getClientId(),
        client_secret: settings.getSecret(),
        grant_type: 'client_credentials'
    };

    var tokenPromise = new Promise<string>((resolve, reject) => {
        request
            .post('https://graph.facebook.com/oauth/access_token', { form: options }, (error, response, body) => {
                if (error) return reject(error);

                var token = authCallback(body);
                if (token == null) return reject('Failed to generate auth token');
                storedToken = token;
                resolve(token);
            });
    })

    return tokenPromise;
}

function authCallback(result: string) {
    try {
        var errorObject = JSON.parse(result);
        if (!!errorObject.error) {
            logger.error(`Failed to generate Application Auth Token: ${errorObject.error.message}`);
            return null;
        }
        logger.error(`Failed to generate Application Auth Token: Unexpected error: ${errorObject}`);
    }
    catch (ex) {
        var split = result.split('=');
        return split[1];
    }
}
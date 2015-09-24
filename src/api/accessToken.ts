import request = require('request');
import * as settings from './settings';
import * as Types from '../../index.d.ts';

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
                
                if (token instanceof Error) return reject(token.message);
                storedToken = <string>token;
                resolve(<string>token);
            });
    })

    return tokenPromise;
}

function authCallback(result: string): string|Error {
    try {
        var errorObject = JSON.parse(result);
        if (!!errorObject.error) {
            return new Error(`Failed to generate Application Auth Token: ${errorObject.error.message}`);
        }
        return new Error(`Failed to generate Application Auth Token: Unexpected error: ${errorObject}`);
    }
    catch (ex) {
        var split = result.split('=');
        return split[1];
    }
}
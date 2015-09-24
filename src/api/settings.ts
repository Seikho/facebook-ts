var appSecret: string = '';
var clientId: string = '';
var apiVersion: string = '';

export function setSecret(secret: string) {
    appSecret = secret;
}

export function getSecret(): string {
    return appSecret;
}

export function setClientId(id: string|number) {
    clientId = id.toString();
}

export function getClientId(): string {
    return clientId;
}

export function setApiVersion(version: string) {
    apiVersion = version;
}

export function getApiVersion() {
    return apiVersion;
}
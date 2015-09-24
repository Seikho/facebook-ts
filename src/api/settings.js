var appSecret = '';
var clientId = '';
var apiVersion = '';
function setSecret(secret) {
    appSecret = secret;
}
exports.setSecret = setSecret;
function getSecret() {
    return appSecret;
}
exports.getSecret = getSecret;
function setClientId(id) {
    clientId = id.toString();
}
exports.setClientId = setClientId;
function getClientId() {
    return clientId;
}
exports.getClientId = getClientId;
function setApiVersion(version) {
    apiVersion = version;
}
exports.setApiVersion = setApiVersion;
function getApiVersion() {
    return apiVersion;
}
exports.getApiVersion = getApiVersion;
//# sourceMappingURL=settings.js.map
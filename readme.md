### facebook-ts
A facebook API for the Node.JS backend in TypeScript.  

### Why TypeScript?
To provide implicit type definitions for the API.  
This requires 1.6 or above. 

### Installation
```
npm install facebook-ts --save
```

### Usage
```javascript
// TypeScript
import * as FB from 'facebook-ts'

// JavaScript
var FB = require('facebook-ts')

FB.settings.setSecret('secret-provided-by-facebook');
FB.settings.setClientId('client-id-provided-by-facebook');

FB.getUser('someFacebookId')
    .then(user => { /* ... */ });
    

```

### API

#### Settings

##### setSecret
```javascript
function setSecret(secret: string) => void;
```
Set the secret as provided by Facebook

##### getSecret
```javascript
function getSecret() => string;
```
Returns the secret that you provided

##### setClientId
```javascript
function setClientId(secret: string|number) => void;
```
Set the client id as provided by Facebook

##### getClientId
```javascript
function getClientId() => string;
```
Returns the client id that you provided

##### setApiVersion
```javascript
function setApiVersion(version: string) => void;
```
...

##### getApiVersion
```javascript
function getApiVersion() => string;
```

#### accessToken
```javascript
function accessToken(usedStoredToken = true) => Promise<string>;
```
Get an access token from Facebook for accessing the rest of the API.  
Use the stored token is one is present.

#### verifyToken
```javascript
function verifyToken(userStatus: Status) => Promise<TokenStatus>;
```
See: [Status](#status) and [TokenStatus](#tokenstatus)  
Returns the status of a user's session/token.  
`userStatus` is an object provided by the Facebook SDK function `getLoginStatus()`.


#### getUser
```javascript
function getUser(facebookId: string|number) => Promise<User>;
```
See [User](#user)


#### Interfaces

##### Status
```javascript
interface Status {
    status: string;
    authResponse: {
        accessToken: string;
        expiresIn: string;
        signedRequest: string;
        userID: string;
    }
}
```

##### TokenStatus
```javascript
interface TokenStatus {
    data?: {
        app_id: string;
        application: string;
        expires_at: number;
        is_valid: boolean;
        scopes: Array<string>;
        user_id: string;
        error?: {
            code: number;
            message: string;
            subcode: number;
        }
    },
    error?: {
        message: string,
        type: string,
        is_transient: boolean,
        code: number
    }
}
```

##### User
```javascript
interface User {
    name: string;
    id: string;
}
```
export var settings: Settings;
export function accessToken(): Promise<string>;
export function getUser(facebookId: string|number): Promise<User>;
export function verifyToken(userStatus: Status): Promise<TokenStatus>;

export interface ApiCallback {
    (response: any): void;
}

export interface LoginCallback {
    (status: Status): void;
}

export interface Options {
    appId: string;
    version: string;
    xfbml?: boolean;
    [option: string]: any;
}

export interface Status {
    status: string;
    authResponse: {
        accessToken: string;
        expiresIn: string;
        signedRequest: string;
        userID: string;
    }
}

export interface TokenStatus {
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

export interface User {
    name: string;
    id: string;
}

interface Settings {
    getSecret(): string;
    setSecret(secret: string): void;    
    
    setClientId(id: string|number): void;
    getClientId(): string;
    
    setApiVersion(version: string): void;
    getApiVersion(): string;
}
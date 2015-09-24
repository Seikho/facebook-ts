export function getLoginStatus(callback: LoginCallback): void;
export function getAccessToken(): string;
export function init(options: Options): void;
export function login(callback: LoginCallback): void;
export function api(route: string, callback: ApiCallback): void;

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

export var settings: Settings;

interface Settings {
    getSecret(): string;
    setSecret(secret: string): void;    
    
    setClientId(id: string|number): void;
    getClientId(): string;
    
    setApiVersion(version: string): void;
    getApiVersion(): string;
}
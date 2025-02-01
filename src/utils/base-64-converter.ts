import { LoginPayloadDTO } from "src/auth/dtos/LoginPayload.dto";

export function authorizationToLoginPayload(authorization: string): number{

    const authorizationSplited = authorization.split('.');

    if (authorizationSplited.length < 3 || !authorizationSplited[1] || !authorization) return undefined;

    //this will return the ID of the user, based on authorization token!
    return JSON.parse(Buffer.from(authorizationSplited[1], 'base64').toString()).sub;
}
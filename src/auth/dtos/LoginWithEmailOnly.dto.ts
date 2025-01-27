import { IsString } from 'class-validator'

export default class LoginWithEmailOnly {
    @IsString()
    email: string;

    //Send by email
    @IsString()
    code: string;
}
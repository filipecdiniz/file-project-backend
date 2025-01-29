import { IsString } from "class-validator";

export default class LoginWithEmailOnlyDTO {
    @IsString()
    email: string;

    @IsString()
    code?: string;
}
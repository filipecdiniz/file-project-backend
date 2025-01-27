import { IsString } from "class-validator";

export default class LoginWithPasswordDTO {
    @IsString()
    email: string;

    @IsString()
    password: string;
}
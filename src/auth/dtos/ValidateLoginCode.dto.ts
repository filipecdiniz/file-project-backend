import { IsString } from "class-validator";

export default class ValidateLoginCodeDTO {
    @IsString()
    email: string;

    @IsString()
    code: string;
}
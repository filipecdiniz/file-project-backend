import { IsString } from "class-validator";

export default class ReturnLoginDTO {
    @IsString()
    email: string;

    @IsString()
    accessToken: string
}
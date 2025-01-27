import { Injectable } from '@nestjs/common';
import LoginWithEmailOnly from './dtos/LoginWithEmailOnly.dto';
import ReturnLoginDTO from './dtos/ReturnLogin.dto';

@Injectable()
export class AuthService {
    async login(loginWithEmailOnly: LoginWithEmailOnly): Promise<ReturnLoginDTO> {
        return 
    }
}

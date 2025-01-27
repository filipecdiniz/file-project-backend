import { Injectable } from '@nestjs/common';
import LoginWithEmailOnly from './dtos/LoginWithEmailOnly.dto';
import ReturnLoginDTO from './dtos/ReturnLogin.dto';
import LoginWithPasswordDTO from './dtos/LoginWithPassword.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService
    ) { }

    async loginWithEmailOnly(loginWithEmailOnly: LoginWithEmailOnly): Promise<ReturnLoginDTO> {
        return
    }

    async loginWithPassword(loginWithPassword: LoginWithPasswordDTO) {

    }
}
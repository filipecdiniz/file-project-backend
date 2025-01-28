import { Injectable } from '@nestjs/common';
import ReturnLoginDTO from './dtos/ReturnLogin.dto';
import LoginWithPasswordDTO from './dtos/LoginWithPassword.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginTokenService } from 'src/login-token/login-token.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService,
        private readonly loginTokenService: LoginTokenService
    ) { }

    async loginWithEmailOnly(email: string): Promise<ReturnLoginDTO> {
        await this.loginTokenService.createToken(email)
        return
    }

    async loginWithPassword(loginWithPassword: LoginWithPasswordDTO) {

    }
}
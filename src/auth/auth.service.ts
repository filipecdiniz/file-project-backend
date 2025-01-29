import { BadRequestException, Injectable } from '@nestjs/common';
import LoginWithPasswordDTO from './dtos/LoginWithPassword.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginTokenService } from 'src/login-token/login-token.service';
import { UserService } from 'src/user/user.service';
import { MailerService } from 'src/mailer/mailer.service';
import LoginWithEmailOnlyDTO from './dtos/LoginWithEmailOnly.dto';
import ValidateLoginCodeDTO from './dtos/ValidateLoginCode.dto';

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService,
        private readonly loginTokenService: LoginTokenService,
        private readonly userService: UserService,
        private readonly mailerService: MailerService
    ) { }

    async loginWithEmailOnly(email: string): Promise<any> {
        const user = await this.userService.createUserWithEmailOnly(email)
        const codeToken = await this.loginTokenService.createToken(user)
        return await this.mailerService.sendMessage(email, codeToken)
    }

    async validateLoginCode({ email, code }: ValidateLoginCodeDTO) {
        if (!code) {
            return new BadRequestException(`No code passed!`)
        }
        const user = await this.userService.findUserByEmail(email)
        if (!user) {
            return new BadRequestException(`Email not found!`)
        }
        return await this.loginTokenService.validateToken(user.id, code)

    }

    async loginWithPassword(loginWithPassword: LoginWithPasswordDTO) {

    }

    async teste() {
        return this.loginTokenService.allTokens()
    }
}
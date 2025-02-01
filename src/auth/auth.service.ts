import { BadRequestException, Injectable } from '@nestjs/common';
import LoginWithPasswordDTO from './dtos/LoginWithPassword.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginTokenService } from 'src/login-token/login-token.service';
import { UserService } from 'src/user/user.service';
import { MailerService } from 'src/mailer/mailer.service';
import ValidateLoginCodeDTO from './dtos/ValidateLoginCode.dto';
import ReturnLoginDTO from './dtos/ReturnLogin.dto';

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService,
        private readonly loginTokenService: LoginTokenService,
        private readonly userService: UserService,
        private readonly mailerService: MailerService
    ) { }

    async loginWithEmailOnly(email: string): Promise<any> {

        //While testing:
        const user = await this.userService.createUserWithEmailOnly(email)
        return { email: user.email, code: await this.loginTokenService.createToken(user) }

        //When projects it's done:
        // const user = await this.userService.createUserWithEmailOnly(email)
        // const codeToken = await this.loginTokenService.createToken(user)
        //await this.mailerService.sendMessage(email, codeToken)
        // return codeToken
    }

    async validateLoginCode({ email, code }: ValidateLoginCodeDTO) {
        if (!code) {
            return new BadRequestException(`No code passed!`)
        }
        const user = await this.userService.findUserByEmail(email)
        if (!user) {
            return new BadRequestException(`Email not found!`)
        }
        await this.loginTokenService.validateToken(user.id, code)
        const payload = { sub: user.id, email: user.email, code }
        // console.log(process.env.JWT_SECRET)
        return { email, accessToken: await this.jwtService.signAsync({ sub: user.id, email: user.email, code }) }
    }

    async loginWithPassword(loginWithPassword: LoginWithPasswordDTO) {

    }

    async teste() {
        return this.loginTokenService.allTokens()
    }
}
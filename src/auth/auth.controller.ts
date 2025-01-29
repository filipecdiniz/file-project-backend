import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import ReturnLoginDTO from './dtos/ReturnLogin.dto';
import LoginWithPasswordDTO from './dtos/LoginWithPassword.dto';
import LoginWithEmailOnlyDTO from './dtos/LoginWithEmailOnly.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) { }

    @Post('login-with-email')
    @UsePipes(ValidationPipe)
    async loginWithEmailOnly(@Body() loginWithEmailOnlyDTO: LoginWithEmailOnlyDTO): Promise<ReturnLoginDTO> {
        return await this.authService.loginWithEmailOnly(loginWithEmailOnlyDTO.email)
    }

    @Post('validate-code')
    @UsePipes(ValidationPipe)
    async validateCode(@Body() loginWithEmailOnlyDTO: LoginWithEmailOnlyDTO) {
        return await this.authService.validateToken(loginWithEmailOnlyDTO)
    }

    @Get()
    @UsePipes(ValidationPipe)
    async allAuths() {
        return await this.authService.teste()
    }

    async loginWithPassword(@Body() loginWithEmail: LoginWithPasswordDTO) {
        return
    }
}

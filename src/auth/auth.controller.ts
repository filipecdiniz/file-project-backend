import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import LoginWithEmailOnly from './dtos/LoginWithEmailOnly.dto';
import ReturnLoginDTO from './dtos/ReturnLogin.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post('login')
    @UsePipes(ValidationPipe)
    async login(@Body() loginWithEmailOnly: LoginWithEmailOnly): Promise<ReturnLoginDTO> {
        return await this.authService.login(loginWithEmailOnly)
    }
}

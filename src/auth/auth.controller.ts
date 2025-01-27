import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import LoginWithEmailOnly from './dtos/LoginWithEmailOnly.dto';
import ReturnLoginDTO from './dtos/ReturnLogin.dto';
import LoginWithPasswordDTO from './dtos/LoginWithPassword.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) { }

    @Post('login')
    @UsePipes(ValidationPipe)
    async loginWithEmailOnly(@Body() loginWithEmailOnly: LoginWithEmailOnly): Promise<ReturnLoginDTO> {
        return await this.authService.loginWithEmailOnly(loginWithEmailOnly)
    }

    async loginWithPassword(@Body() loginWithEmail: LoginWithPasswordDTO) {
        return 
    }
}

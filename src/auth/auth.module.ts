import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { LoginTokenModule } from 'src/login-token/login-token.module';

@Module({
    providers: [AuthService],
    controllers: [AuthController],
    imports: [
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '1d' }
        }),
        LoginTokenModule
    ]
})
export class AuthModule { }

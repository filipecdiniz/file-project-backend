import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { LoginTokenModule } from 'src/login-token/login-token.module';
import { UserModule } from 'src/user/user.module';
import { MailerModule } from 'src/mailer/mailer.module';

@Module({
    providers: [AuthService],
    controllers: [AuthController],
    imports: [
        JwtModule.registerAsync({
            useFactory: () => ({
                global: true,
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: process.env.JWT_EXPIRES }
            })
        }),
        LoginTokenModule,
        UserModule,
        MailerModule
    ]
})
export class AuthModule { }

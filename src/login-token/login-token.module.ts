import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import loginTokenEntity from './entities/loginToken.entity';
import { LoginTokenService } from './login-token.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([loginTokenEntity])
    ],
    providers: [LoginTokenService],
    exports: [LoginTokenService]
})
export class LoginTokenModule { }

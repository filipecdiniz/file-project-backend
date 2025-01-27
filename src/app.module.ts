import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { LoginTokenService } from './login-token/login-token.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local']
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      entities: [`${__dirname}/**/*.entity.{js,ts}`],
      migrations: [`${__dirname}/migration/*.{ts,js}`],
      migrationsRun: true,
      migrationsTableName: 'migration',
      // synchronize: true
    }),
    UserModule,
    AuthModule,
  ],
  providers: [LoginTokenService]
})
export class AppModule { }

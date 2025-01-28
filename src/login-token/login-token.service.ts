import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import loginTokenEntity from './entities/loginToken.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LoginTokenService {
    constructor(
        @InjectRepository(loginTokenEntity)
        private readonly loginTokenRepository: Repository<loginTokenEntity>
    ) { }

    async createToken(email) {
        
    }
}

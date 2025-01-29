import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import loginTokenEntity from './entities/loginToken.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { GenerateCrypto } from 'src/utils/GenerateCrypto.utils';
import UserEntity from 'src/user/entities/user.entity';

@Injectable()
export class LoginTokenService {
    constructor(
        @InjectRepository(loginTokenEntity)
        private readonly loginTokenRepository: Repository<loginTokenEntity>
    ) { }

    async createToken(user: UserEntity) {

        const code = GenerateCrypto()

        const expires = new Date()
        expires.setMinutes(new Date().getMinutes() + 5)

        await this.loginTokenRepository.save({
            userId: user.id,
            code: code,
            expires: expires,
            used: false
        })

        return code
    }

    async validateToken(email: string, code: string){
        try {
            
        } catch (error) {
            
        }
    }

    async allTokens() {
        const data = await this.loginTokenRepository.find()
        const map = data.map((value) => value.expires.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }))
        console.log(map)
        return map
    }
}

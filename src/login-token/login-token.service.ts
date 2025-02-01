import { BadRequestException, Injectable, ServiceUnavailableException } from '@nestjs/common';
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

        //fetch data
        const data = await this.loginTokenRepository.find({ where: { userId: user.id } })

        //time less five minutes
        /* Activate after:
        const fiveMinutesEarlier = new Date()
        fiveMinutesEarlier.setMinutes(new Date().getMinutes() - 5)

        const tries = data.filter((data) => data.createdAt > fiveMinutesEarlier)

        if (tries.length > 0) {
            throw new BadRequestException('Please wait 5 minutes!')
        }
        */

        const code = GenerateCrypto(3)

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

    async validateToken(userId: number, code: string) {
        const loginToken = await this.loginTokenRepository.findOne({ where: { userId, code } })
        if (!loginToken) {
            throw new BadRequestException("Invalid code!")
        }
        if (loginToken.expires < new Date()) {
            throw new BadRequestException("Code is alredy expired!")
        }
        return loginToken
    }

    async allTokens() {
        const data = await this.loginTokenRepository.find()
        const map = data.map((value) => value.expires.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }))
        console.log(map)
        return map
    }
}

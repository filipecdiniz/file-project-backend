import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import UserEntity from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) { }

    async createUserWithEmailOnly(email: string): Promise<UserEntity> {
        const userExists = this.userRepository.findOne({ where: { email } })

        return await this.userRepository.save({
            email: email
        })
    }
}

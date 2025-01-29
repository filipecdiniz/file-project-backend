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
        const userExists = await this.userRepository.findOne({ where: { email } })
        if (userExists) {
            return userExists
        }
        return await this.userRepository.save({
            email: email
        })
    }
}

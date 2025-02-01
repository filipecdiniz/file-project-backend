import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';
import { Repository } from 'typeorm';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { UserService } from 'src/user/user.service';
import UserEntity from 'src/user/entities/user.entity';
import { AcessFileEntity } from './entities/accessFile.entity';

@Injectable()
export class UploadService {
    private readonly s3Client = new S3Client({
        region: process.env.AWS_S3_REGION, credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        }
    });

    constructor(
        @InjectRepository(FileEntity)
        private readonly fileRepository: Repository<FileEntity>,
        @InjectRepository(AcessFileEntity)
        
        private readonly acessFileRepository: Repository<AcessFileEntity>,
        private readonly userService: UserService
    ) { }

    async uploadFileAtS3(fileName: string, file: Buffer, fileType: string, fileSize: number, userId: number) {
        // try {
        //     await this.s3Client.send(
        //         new PutObjectCommand({
        //             Bucket: 'file-project-diniz-file-bucket',
        //             Key: fileName,
        //             Body: file
        //         })
        //     )
        // } catch (error) {

        // }
        return await this.fileRepository.save({
            name: fileName,
            size: fileSize,
            type: fileType,
            ownerId: userId,
            url: ``
        })
    }

    async generatePresignedUrl(fileKey: string, expiresIn: number = 3600) {
        const command = new GetObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: fileKey
        })

        return await getSignedUrl(this.s3Client, command, { expiresIn })
    }

    async getUserFiles(userId: number): Promise<FileEntity[]> {
        const user: UserEntity | undefined = await this.userService.findUserById(userId)
        if (!user) {
            throw new NotFoundException(`User not found!`)
        }
        return this.fileRepository.find({ where: { ownerId: userId } })
    }
}

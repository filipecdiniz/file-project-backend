import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UserModule } from 'src/user/user.module';
import { AcessFileEntity } from './entities/accessFile.entity';

@Module({
    providers: [UploadService],
    controllers: [UploadController],
    imports: [
        TypeOrmModule.forFeature([FileEntity, AcessFileEntity]),
        //Development
        MulterModule.registerAsync({
            useFactory: () => ({
                storage: diskStorage({
                    destination: './static/files',
                    filename: (req, file, callback) => {
                        const randomName = `${Date.now()}.${file.originalname}`;
                        callback(null, `${randomName}`)
                    }
                })
            }),
        }),
        //
        UserModule
    ]
})
export class UploadModule { }

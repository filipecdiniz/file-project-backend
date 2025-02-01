import { Controller, Get, ParseFilePipe, Post, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { UserID } from 'src/decorators/userID.decorator';
import { FileEntity } from './entities/file.entity';

@Controller('upload')
export class UploadController {

    constructor(
        private readonly uploadService: UploadService
    ) { }

    @Post()
    @UsePipes(ValidationPipe)
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File, @UserID() userId: number) {

        return await this.uploadService.uploadFileAtS3(file.originalname, file.buffer, file.originalname.split('.')[1], file.size, userId)
    }

    @Get()
    @UsePipes(ValidationPipe)
    async getUserFiles(@UserID() userId: number): Promise<FileEntity[]> {
        return await this.uploadService.getUserFiles(userId)
    }
}

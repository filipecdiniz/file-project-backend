import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {

    async sendMessage(email: string, code: string) {
        // const transporter = await nodemailer.createTransport({
        //     service: process.env.MAILER_SERVICE,
        //     host: process.env.MAILER_HOST,
        //     port: Number(process.env.MAILER_PORT),
        //     secure: false,
        //     auth: {
        //         user: process.env.MAILER_USER,
        //         pass: process.env.GOOGLE_PASS,
        //     },
        //     tls: {
        //         rejectedUnauthorized: false
        //     }
        // });
        // const mailOptions = {
        //     from: {
        //         name: 'Filipe Diniz',
        //         address: process.env.MAILER_HOST
        //     },
        //     to: [email],
        //     subject: 'Código de Autenticação',
        //     text: `Seu código de login é: ${code}. Ele expirará em 5 minutos.`
        // }

        // try {
        //     await transporter.sendMail(mailOptions)
        // } catch (error) {
        //     console.log(error)
        //     throw new BadRequestException('Bad Request!')
        // }

        return code
    }
}

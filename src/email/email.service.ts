import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class EmailService {
    constructor(private mailerService:MailerService){}

    async sendUserMail(user:User,token:string){
        const sendMailOptions:ISendMailOptions = {
            to:user.email ,
            subject:'Welcome to Nice App! Confirm your Email',
            template:'./yourmail.ejs',
            context:{
                name:user.name
            }

        }
        return await this.mailerService.sendMail(sendMailOptions)
    }
}

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class UserService {
  constructor(private emailService:EmailService){}
  async signUp(user: User) {
    const token = Math.floor(1000 + Math.random() * 9000).toString();
    
   return await this.emailService.sendUserMail(user, token);
  }
}

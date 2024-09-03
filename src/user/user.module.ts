import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { EmailModule } from 'src/email/email.module';
import { EmailService } from 'src/email/email.service';

@Module({
  imports:[EmailModule],
  controllers: [UserController],
  providers: [UserService,EmailService],
})
export class UserModule {}

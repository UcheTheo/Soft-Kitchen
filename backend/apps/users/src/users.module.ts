import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [],
  //   controllers: [UsersController],
  controllers: [],
  providers: [UsersService],
})
export class UsersModule {}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userServices: UserService) {}

  @Get()
  getUser() {
    return this.userServices.get();
  }

  @Post()
  store(@Body() body: CreateUserDto) {
    return this.userServices.create(body);
  }

  @Get('/:userId')
  getUserOne(@Param() params: { userId: number }) {
    return this.userServices.showUser(params);
  }

  @Patch('/:userId')
  updateUser(@Body() body: UpdateUserDto, @Param() param: { userId: number }) {
    return this.userServices.update(body, param);
  }

  @Delete('/:userId')
  deleteUser(@Param() param: { userId: number }) {
    return this.userServices.delete(param);
  }
}

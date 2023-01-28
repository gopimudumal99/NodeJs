import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  get() {
    return 'I am a user';
  }

  create(body: CreateUserDto) {
    return body;
  }

  update(body: UpdateUserDto, param: { userId: number }) {
    return { body: body, param };
  }

  showUser(param: { userId: number }) {
    return param;
  }

  delete(param: { userId: number }) {
    return { message: 'user id is deleted', param };
  }
}

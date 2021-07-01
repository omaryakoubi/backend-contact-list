import { Body, Controller, UsePipes, ValidationPipe } from '@nestjs/common';

import { CreateUserDto } from './dto/registerUser.dto';
import { UserInterface } from './user.interface';
import { UserService } from './user.service';

@Controller("/user")
export class UserController {
  constructor(private userService: UserService) {}

  @UsePipes(ValidationPipe)
  async register(@Body() user: CreateUserDto): Promise<UserInterface> {
    try {
      return await this.userService.create(user);
    } catch (error) {
      console.log(error);
    }
  }
}

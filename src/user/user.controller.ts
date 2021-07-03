import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { LoginUserDto } from './dto/loginUser.dto';

import { CreateUserDto } from './dto/registerUser.dto';
import { UserInterface } from './user.interface';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('register')
  @UsePipes(ValidationPipe)
  async register(@Body() user: CreateUserDto): Promise<UserInterface> {
    try {
      return await this.userService.create(user);
    } catch (error) {
      return error;
    }
  }

  @Get('login')
  async login(@Body() credentials: LoginUserDto) {
    try {
      const userExists = await this.userService.findByEmail(credentials.email);

      if (userExists) {
        const correctPassword = this.authService.passwordMatch(
          credentials.password,
          userExists.password,
        );

        if (correctPassword) {
          //return jwt token here
        }
      }
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'INVALID CREDENTIALS',
        },
        HttpStatus.FORBIDDEN,
      );
    } catch (error) {
      return error;
    }
  }
}

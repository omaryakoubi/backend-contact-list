import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserDto } from './dto/registerUser.dto';
import { UserInterface } from './user.interface';
import { User, UserDocument } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(user: CreateUserDto): Promise<UserInterface> {
    try {
      return this.userModel.create(user);
    } catch (error) {
      return error;
    }
  }

  async findByEmail(email: string): Promise<UserInterface> {
    try {
      return this.userModel.findOne({ email });
    } catch (error) {
      return error;
    }
  }
}

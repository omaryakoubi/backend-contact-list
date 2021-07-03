import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  async hashPassword(password: string): Promise<string> {
    try {
      return await bcrypt.hash(password, 12);
    } catch (error) {
      return error;
    }
  }

  async passwordMatch(password: string, hash: string): Promise<Boolean> {
    try {
      return await bcrypt.compare(password, hash);
    } catch (error) {
      return error;
    }
  }
}

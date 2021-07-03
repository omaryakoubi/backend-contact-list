import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 12);
  }

  async passwordMatch(password: string, hash: string): Promise<Boolean> {
    return await bcrypt.compare(password, hash, 12);
  }
}

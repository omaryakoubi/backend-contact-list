import { Contains, IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  @IsString()
  @Contains('@')
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(8)
  password: string;
}

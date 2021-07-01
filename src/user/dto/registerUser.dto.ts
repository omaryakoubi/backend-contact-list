import { Contains, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Min(2)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Min(3)
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @Contains('@')
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

import { IsNotEmpty, Length, IsInt, IsString, Contains } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty({ message: 'name is a required field' })
  @IsString()
  @Length(3)
  name: string;

  @IsString()
  @Contains('@', { message: "email should include '@'" })
  email: string;

  @IsNotEmpty({ message: 'phoneNumber is a required field' })
  // @Length(8)
  @IsInt()
  phoneNumber: number;
}

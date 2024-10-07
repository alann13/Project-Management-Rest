import { IsNotEmpty, IsEmail } from 'class-validator'

export class CreateClientDto {
  @IsEmail()
  email: string

  @IsNotEmpty()
  name: string

  address: string
}
